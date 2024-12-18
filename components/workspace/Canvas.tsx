"use client";
import React, { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

// @ts-ignore
import { debounce } from "lodash";
import UserModal from "./UserModal";
import { DockDemo } from "./DockDemo";

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
  timezone,
}: AvatarProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <div
      className={`absolute flex flex-col items-center transition-all duration-200`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <div className="relative">
        <Image
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          src={image}
          alt={`${name}`}
          className="rounded-xl border-2 border-neutral-700 shadow-md"
        />
        {/* <span
          className={`absolute bottom-0 -right-1 h-3 w-3 rounded-full border-2 border-white ${
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
        ></span> */}
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
          timeZone={timezone}
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
        console.log(response.data.existingSpace.user);
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
  return (
    <>
      <div
        className={`relative flex ${
          open ? "flex-row" : "flex-col"
        } overflow-hidden w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800`}
      >
        <div className="bg-transparent absolute z-50 bottom-4 inset-x-0 justify-center">
          <DockDemo />
        </div>
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
        //TODO: Add the status of the user
        {/* Other users' avatars */}
        {Object.entries(otherAvatars).map(([id, user]) => {
          if (socket && id === socket.id) return null;

          return (
            <Avatar
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
        <div className="absolute top-0 left-0 bg-black/50 text-white p-2 text-sm">
          <div>Connected: {socket?.connected ? "Yes" : "No"}</div>
          <div>Users: {Object.keys(otherAvatars).length}</div>
          <div>Position: {JSON.stringify(avatarPosition)}</div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
