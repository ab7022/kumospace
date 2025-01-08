"use client";
import React, { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import peer from "@/lib/peer";
// @ts-ignore
import { debounce } from "lodash";
import UserModal from "./UserModal";
import { DockDemo } from "./DockDemo";
import ReactPlayer from "react-player";

interface Position {
  x: number;
  y: number;
}

interface User {
  timezone: string | undefined;
  teamName: string | undefined;
  designation: string | undefined;
  id: string;
  image: string;
  name: string;
  position: Position;
  email: string;
  status: string;
  lastActive: number;
  otherAvatar: any;
  onCurrentlyWorking?: string;
}

interface AvatarProps {
  position: Position;
  name: string;
  isCurrentUser?: boolean;
  image: string;
  email?: string;
  status?: string;
  onCurrentlyWorking?: string;
  designation?: string;
  teamName?: string;
  timezone?: any;
  remoteStream?: MediaStream | null;
  myStream?: MediaStream | null;
}

const STEP_SIZE = 20;
const AVATAR_SIZE = 68;
const SOCKET_URL = "http://localhost:3001";
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

const Avatar = ({
  position,
  name,
  image,
  email,
  status,
  isCurrentUser = false,
  onCurrentlyWorking,
  designation,
  teamName,
  remoteStream,
  myStream,
}: AvatarProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <div
      className="absolute flex flex-col items-center transition-all duration-200"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <div className="relative">
        {myStream ? (
          <ReactPlayer
            style={{
              borderRadius: "8px",
              border: "2px solid #4B5563",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              objectFit: "contain",
            }}
            playing
            muted
            height="full" // Increased height
            width="150px" // Increased width
            url={myStream}
          />
        ) : remoteStream ? (
          <ReactPlayer
            style={{
              borderRadius: "8px",
              border: "2px solid #4B5563",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              objectFit: "contain",
            }}
            playing
            muted
            height="full" // Increased height
            width="150px" // Increased width
            url={remoteStream}
          />
        ) : (
          <Image
            width={100} // Increased width
            height={150} // Increased height
            src={image}
            alt={`${name}`}
            className="rounded-xl border-2 border-neutral-700 shadow-md"
          />
        )}
      </div>
      <span className="mt-1 pl-6 pr-2 text-center bg-black p-1 rounded-2xl font-semibold text-sm text-white">
        {" "}
        <span
          className={`absolute bottom-2 left-2 h-3 w-3 rounded-full border-2 border-white ${
            status === "AVAILABLE"
              ? "bg-green-500"
              : status === "AWAY"
              ? "bg-yellow-500"
              : status === "DND"
              ? "bg-red-400"
              : status === "BUSY"
              ? "bg-blue-400"
              : "bg-neutral-900"
          }`}
        ></span>
        {name}
      </span>
      {showModal && (
        <UserModal
          email={email}
          name={name}
          designation={designation}
          onCurrentlyWorking={onCurrentlyWorking}
          currentTime={currentTime}
          image={image}
          status={status}
          teamName={teamName}
        />
      )}
    </div>
  );
};
type UserDetails = {
  id: string;
  name: string;
  email: string;
  image: string;
  onCurrentlyWorking: string;
  designation: string;
  teamName: string;
  timezone: string;
  status: string;
};
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
  const [otherAvatars, setOtherAvatars] = useState<Record<string, User>>({});
  const [boundaries, setBoundaries] = useState({ width: 0, height: 0 });
  const router = useRouter();
  async function getData() {
    try {
      const response = await axios.get("/api/dashboard/isLoggedIn");
      if (response.status === 200) {
        const data = response.data.existingSpace.user;
        setUserDetails(data);
        setRoom(response.data.existingSpace.space.code);
        console.log(response.data.existingSpace.space.code);
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
      setAvatarPosition((prev) => {
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

  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  const handleUserJoined = useCallback(({ email, id }: any) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);
  const handleEndCall = useCallback(() => {
    if (myStream) {
      myStream.getTracks().forEach((track) => track.stop());
      setMyStream(null);
    }
    setRemoteStream(null);
    setRemoteSocketId(null);
  }, [myStream]);

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
    if (!myStream) return;
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }: any) => {
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

  useEffect(() => {
    if (!socket) return console.error("Socket not connected");
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <>
      <div
        className={`relative flex ${
          open ? "flex-row" : "flex-col"
        } overflow-hidden w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800`}
      >
        {/* <div className="bg-transparent absolute z-50 bottom-4 inset-x-0 justify-center">
          <DockDemo />
        </div> */}
        <Image
          src="/images/updated.jpg"
          alt="Virtual Workspace"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
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
        <div className="absolute top-0 left-0 bg-black/70 text-white p-4 rounded-lg shadow-lg space-y-4 w-64">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-medium">Connected:</span>
              <span
                className={`font-semibold ${
                  socket?.connected ? "text-green-400" : "text-red-400"
                }`}
              >
                {socket?.connected ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Users:</span>
              <span className="font-semibold">
                {Object.keys(otherAvatars).length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Position:</span>
              <span className="text-gray-300 text-xs truncate">
                {JSON.stringify(avatarPosition)}
              </span>
            </div>
          </div>

          <h4
            className={`text-center text-sm font-semibold p-2 rounded-md ${
              remoteSocketId
                ? "bg-green-600 text-white"
                : "bg-gray-600 text-gray-300"
            }`}
          >
            {remoteSocketId ? "Connected" : "No one in room"}
          </h4>

          <div className="flex flex-col space-y-2">
            {myStream && (
              <button
                onClick={sendStreams}
                className="w-full bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                Send Stream
              </button>
            )}
            {remoteSocketId && (
              <button
                onClick={handleCallUser}
                className="w-full bg-green-600 hover:bg-green-500 focus:ring-2 focus:ring-green-400 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                CALL
              </button>
            )}
            {myStream && (
              <button
                onClick={handleEndCall}
                className="w-full bg-red-600 hover:bg-red-500 focus:ring-2 focus:ring-red-400 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                END
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
//TODO: add a button to end call from both side
//TODO: add a button to mute and unmute audio
//TODO: add a button to mute and unmute video
//TODO: add a button to share screen
//TODO: add a small div for incoming call and accepting call and oncall screen