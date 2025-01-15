"use client";
import React, { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import peer from "@/lib/peer";
// @ts-ignore
import { debounce } from "lodash";
import Dock from "./Dock";
import Modal from "./Modal";
import "react-responsive-modal/styles.css";
import { Avatar } from "./Avatar";
import { Position, User, UserDetails } from "../types";

const STEP_SIZE = 20;
const AVATAR_SIZE = 68;
const SOCKET_URL = "https://kumospace-be-production.up.railway.app/";
const MOVEMENT_KEYS = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  KeyW: "up",
  KeyS: "down",
  KeyA: "left",
  KeyD: "right",
} as const;

const Canvas = ({ open, session }: any) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [room, setRoom] = useState("");
  const sessionData = session?.value ? JSON.parse(session.value) : {};
  const name = sessionData?.user?.name || "";
  const email = sessionData?.user?.email || "";
  const image = sessionData?.user?.image || "";
  const [socket, setSocket] = useState<Socket | null>(null);
  const [avatarPosition, setAvatarPosition] = useState<Position>({
    x: 100,
    y: 100,
  });
  const [isUserNearby, setIsUserNearby] = useState(false);
  const [otherAvatars, setOtherAvatars] = useState<Record<string, User>>({});
  const [boundaries, setBoundaries] = useState({ width: 0, height: 0 });
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const router = useRouter();
  async function getData() {
    try {
      const response = await axios.get("/api/dashboard/isLoggedIn");
      if (response.status === 200) {
        const data = response.data.existingSpace.user;
        setUserDetails(data);
        setRoom(response.data.existingSpace.space.code);
      } else {
        router.push("/setup");
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      router.push("/setup");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    newSocket.on("connect", () => {
      if (userDetails) {
        newSocket.emit("register", {
          name: name,
          image: image || "image",
          position: { x: 100, y: 100 },
          onCurrentlyWorking: userDetails?.onCurrentlyWorking,
          teamName: userDetails?.teamName,
          designation: userDetails?.designation,
          timezone: userDetails?.timezone,
          status: userDetails?.status,
          email: email,
        });
      }
      newSocket.emit("room:join", { email, room });
    });

    return () => {
      newSocket.disconnect();
    };
  }, [session, userDetails]);

  useEffect(() => {
    const updateBoundaries = () => {
      setBoundaries({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateBoundaries();
    window.addEventListener("resize", updateBoundaries);

    return () => window.removeEventListener("resize", updateBoundaries);
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("users", (users: Record<string, User>) => {
      setOtherAvatars(users);
    });

    return () => {
      socket.off("users");
    };
  }, [socket]);

  const updateServerPosition = useCallback(
    debounce((position: Position) => {
      if (!socket) return;

      socket.emit("updatePosition", {
        x: position.x,
        y: position.y,
        name: name,
      });
    }, 50),
    [socket, session]
  );

  useEffect(() => {
    updateServerPosition(avatarPosition);
  }, [avatarPosition, updateServerPosition]);

  // Movement handler
  const moveAvatar = useCallback(
    (direction: string) => {
      setAvatarPosition((prev:any) => {
        const newPosition = { ...prev };

        switch (direction) {
          case "up":
            newPosition.y = Math.max(0, prev.y - STEP_SIZE);
            break;
          case "down":
            newPosition.y = Math.min(
              boundaries.height - AVATAR_SIZE,
              prev.y + STEP_SIZE
            );
            break;
          case "left":
            newPosition.x = Math.max(0, prev.x - STEP_SIZE);
            break;
          case "right":
            newPosition.x = Math.min(
              boundaries.width - AVATAR_SIZE,
              prev.x + STEP_SIZE
            );
            break;
        }

        return newPosition;
      });
    },
    [boundaries]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const direction = MOVEMENT_KEYS[e.code as keyof typeof MOVEMENT_KEYS];
      if (direction) {
        e.preventDefault();
        moveAvatar(direction);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveAvatar]);

  const PROXIMITY_THRESHOLD_PX = 100; // 50px

  useEffect(() => {
    Object.entries(otherAvatars).forEach(([id, user]) => {
      if (socket && id === socket.id) return;
      const otherPosition = user.position;

      // Check if the other avatar's position is within the threshold range
      const isNearbyX =
        otherPosition.x >= avatarPosition.x - PROXIMITY_THRESHOLD_PX &&
        otherPosition.x <= avatarPosition.x + PROXIMITY_THRESHOLD_PX;
      const isNearbyY =
        otherPosition.y >= avatarPosition.y - PROXIMITY_THRESHOLD_PX &&
        otherPosition.y <= avatarPosition.y + PROXIMITY_THRESHOLD_PX;

      // If both x and y positions are within the proximity threshold, the user is nearby
      if (isNearbyX && isNearbyY) {
        setIsUserNearby(true);

        console.log(`${user.name} is nearby!`);
        if (!socket) return;
        // Perform the action you want (e.g., show a call button)
      } else {
        setIsUserNearby(false);
      }
    });
  }, [avatarPosition, otherAvatars]);

  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  const handleScreenShare = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setScreenStream(stream);
      if (!socket) return console.error("Socket not connected");
      const offer = await peer.getOffer();
      socket.emit("user:screenShare", { to: remoteSocketId, offer });
    } catch (error) {
      console.error("Error sharing screen:", error);
    }
  }, [remoteSocketId, socket]);
  const handleUserJoined = useCallback(({ email, id }: any) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);
  const handleEndCall = useCallback(() => {
    // Notify other peer about call ending
    if (socket && remoteSocketId) {
      socket.emit("call:end", { to: remoteSocketId });
    }
    if (myStream) {
      myStream.getTracks().forEach((track) => {
        track.stop();
      });
      setMyStream(null);
    }
    if (screenStream) {
      screenStream.getTracks().forEach((track) => {
        track.stop();
      });
      setScreenStream(null);
    }
    if (remoteStream) {
      setRemoteStream(null);
    }
    if (peer.peer) {
      peer.peer.close();
    }

    setRemoteSocketId(null);
  }, [socket, remoteSocketId, myStream, screenStream, remoteStream]);

  useEffect(() => {
    if (!socket) return console.error("Socket not connected");
    const handleCallEnded = () => {
      console.log("Call ended by remote peer");

      if (myStream) {
        myStream.getTracks().forEach((track) => {
          track.stop();
        });
        setMyStream(null);
      }

      if (screenStream) {
        screenStream.getTracks().forEach((track) => {
          track.stop();
        });
        setScreenStream(null);
      }

      if (remoteStream) {
        setRemoteStream(null);
      }
      if (peer.peer) {
        peer.peer.close();
      }
      setRemoteSocketId(null);
    };

    socket.on("call:ended", handleCallEnded);

    return () => {
      socket.off("call:ended", handleCallEnded);
    };
  }, [socket, myStream, screenStream, remoteStream]);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    if (!socket) return console.error("Socket not connected");
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }: any) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      if (!socket) return console.error("Socket not connected");
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    if (!myStream && !screenStream) return;
    const streams = [myStream, screenStream].filter(Boolean) as MediaStream[];
    for (const stream of streams) {
      for (const track of stream.getTracks()) {
        peer.peer.addTrack(track, stream);
      }
    }
  }, [myStream, screenStream]);
  const handleCallAccepted = useCallback(
    ({ ans }: any) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    if (!socket) return console.error("Socket not connected");
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }: any) => {
      const ans = await peer.getAnswer(offer);
      if (!socket) return console.error("Socket not connected");
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }: any) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  const handleIncommingScreenShare = useCallback(
    async ({ from, offer }: any) => {
      setRemoteSocketId(from);
      const ans = await peer.getAnswer(offer);
      if (!socket) return console.error("Socket not connected");
      socket.emit("screenShare:accepted", { to: from, ans });
    },
    [socket]
  );

  const handleScreenShareAccepted = useCallback(
    ({ ans }: any) => {
      peer.setLocalDescription(ans);
      console.log("Screen Share Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  useEffect(() => {
    if (!socket) return console.error("Socket not connected");
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);
    socket.on("incomming:screenShare", handleIncommingScreenShare);
    socket.on("screenShare:accepted", handleScreenShareAccepted);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
      socket.off("incomming:screenShare", handleIncommingScreenShare);
      socket.off("screenShare:accepted", handleScreenShareAccepted);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
    handleIncommingScreenShare,
    handleScreenShareAccepted,
  ]);

  const handleFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };
  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - AVATAR_SIZE / 2;
    const y = event.clientY - rect.top - AVATAR_SIZE / 2;
    setAvatarPosition({ x, y });
  };
  return (
    <>
      <div
        className={`relative flex ${
          open ? "flex-row" : "flex-col"
        } overflow-hidden w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800`}
      >
      <div onDoubleClick={handleDoubleClick} className="relative w-full h-full">

        <Image
          src="/images/updated.jpg"
          alt="Virtual Workspace"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
        </div>
        {/* Current user's avatar */}
        <Avatar
          myStream={myStream}
          position={avatarPosition}
          name={name || ""}
          email={email}
          isCurrentUser={true}
          image={image}
          onCurrentlyWorking={userDetails?.onCurrentlyWorking}
          designation={userDetails?.designation}
          teamName={userDetails?.teamName}
          timezone={userDetails?.timezone}
          status={userDetails?.status}
          screenStream={screenStream}
        />
        {/* Other users' avatars */}
        {Object.entries(otherAvatars).map(([id, user]) => {
          if (socket && id === socket.id) return null;

          return (
            <Avatar
              remoteStream={remoteStream}
              key={id}
              position={user.position}
              name={user.name}
              isCurrentUser={false}
              image={user.image}
              onCurrentlyWorking={user?.onCurrentlyWorking}
              designation={user?.designation}
              teamName={user?.teamName}
              timezone={user?.timezone}
              status={user.status}
              email={user.email}
            />
          );
        })}

        <Dock
          myStream={myStream}
          sendStreams={sendStreams}
          handleCallUser={handleCallUser}
          handleEndCall={handleEndCall}
          handleScreenShare={handleScreenShare}
          setScreenStream={setScreenStream}
          remoteStream={remoteStream}
          screenStream={screenStream}
          remoteSocketId={remoteSocketId}
          isUserNearby={isUserNearby}
          handleFullScreen={handleFullScreen}
        />
      </div>
      <Modal
        isFullScreen={isFullScreen}
        closeFullScreen={closeFullScreen}
        myStream={myStream}
        remoteStream={remoteStream}
        screenStream={screenStream}
        name={name}
        remoteSocketId={remoteSocketId}
        otherAvatars={otherAvatars}
      />
    </>
  );
};

export default Canvas;
