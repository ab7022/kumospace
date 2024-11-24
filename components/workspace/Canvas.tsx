"use client";

import React, { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import Image from "next/image";
import { debounce } from "lodash";

// Types
interface Position {
  x: number;
  y: number;
}

interface User {
  id: string;
  image: string;
  name: string;
  position: Position;
  status: string;
  lastActive: number;
  otherAvatar: any;
}

interface AvatarProps {
  position: Position;
  name: string;
  isCurrentUser?: boolean;
  image: string;
}

// Constants
const STEP_SIZE = 20;
const AVATAR_SIZE = 48;
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

// Avatar Component
const Avatar = ({
  position,
  name,
  image,
  isCurrentUser = false,
}: AvatarProps) => {
  console.log(image);
  return (
    <div
      className={`absolute w-16 h-16 rounded-full flex items-center justify-center text-white font-bold transition-all duration-200 `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <>
        {" "}
        <div className="flex flex-col">
          <Image
            width={100}
            height={100}
            src={image}
            alt={`${name}`}
            className="rounded-md shadow-md shadow-gray-400"
          />
          <span className="text-center text-xs">{name}</span>
        </div>
        <div className="absolute bottom-3 -right-2 w-3 h-3 bg-green-500 rounded-full" />
      </>
    </div>
  );
};

// Main Canvas Component
const Canvas = ({ open, session }: any) => {
  const sessionData = session?.value ? JSON.parse(session.value) : {};
  const name = sessionData?.user?.name || ""; // Fallback to empty string
  const email = sessionData?.user?.email || "";
  const image = sessionData?.user?.image || "";
  const [socket, setSocket] = useState<Socket | null>(null);
  const [avatarPosition, setAvatarPosition] = useState<Position>({
    x: 100,
    y: 100,
  });
  const [otherAvatars, setOtherAvatars] = useState<Record<string, User>>({});
  const [boundaries, setBoundaries] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    newSocket.on("connect", () => {
      newSocket.emit("register", {
        name: name || email,
        image: image || "image",
        position: { x: 100, y: 100 },
      });
    });

    return () => {
      newSocket.disconnect();
    };
  }, [session]);

  // Update boundaries on window resize
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

  // Socket event handlers
  useEffect(() => {
    if (!socket) return;

    // Listen for users update from server
    socket.on("users", (users: Record<string, User>) => {
      setOtherAvatars(users);
    });

    return () => {
      socket.off("users");
    };
  }, [socket]);

  // Debounced position update to server
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

  // Update server when position changes
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
    <div
      className={`relative flex ${
        open ? "flex-row" : "flex-col"
      } overflow-hidden w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800`}
    >
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
        name={name || email || ""}
        isCurrentUser={true}
        image={image}
      />

      {/* Other users' avatars */}
      {Object.entries(otherAvatars).map(([id, user]) => {
        console.log(user);

        if (socket && id === socket.id) return null;

        return (
          <Avatar
            key={id}
            position={user.position}
            name={user.name}
            isCurrentUser={false}
            image={user.image}
          />
        );
      })}

      <div className="absolute top-0 left-0 bg-black/50 text-white p-2 text-sm">
        <div>Connected: {socket?.connected ? "Yes" : "No"}</div>
        <div>Users: {Object.keys(otherAvatars).length}</div>
        <div>Position: {JSON.stringify(avatarPosition)}</div>
      </div>
    </div>
  );
};

export default Canvas;
