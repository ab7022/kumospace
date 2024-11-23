"use client";

import React, { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import Image from "next/image";
import { debounce } from 'lodash';

// Types
interface Position {
  x: number;
  y: number;
}

interface User {
  id: string;
  name: string;
  position: Position;
  status: string;
  lastActive: number;
}

interface AvatarProps {
  position: Position;
  name: string;
  isCurrentUser?: boolean;
}

interface CanvasProps {
  open: boolean;
  session: {
    user?: {
      name?: string;
      email?: string;
    };
  };
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
const Avatar = ({ position, name, isCurrentUser = false }: AvatarProps) => (
  <div
    className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-200 ${
      isCurrentUser ? "bg-blue-500 shadow-lg" : "bg-green-500"
    }`}
    style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  >
    <span className="truncate max-w-[40px] text-center">
      {name.split(" ")[0] || "Anonymous"}
    </span>
  </div>
);

// Main Canvas Component
const Canvas: React.FC<CanvasProps> = ({ open, session }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [avatarPosition, setAvatarPosition] = useState<Position>({ x: 100, y: 100 });
  const [otherAvatars, setOtherAvatars] = useState<Record<string, User>>({});
  const [boundaries, setBoundaries] = useState({ width: 0, height: 0 });

  // Initialize socket connection and register user
  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    // Register user when socket connects
    newSocket.on("connect", () => {
      newSocket.emit("register", {
        name: session?.user?.name || session?.user?.email || "Anonymous",
        position: { x: 100, y: 100 }
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
        name: session?.user?.name || session?.user?.email || "Anonymous",
      });
    }, 50),
    [socket, session]
  );

  // Update server when position changes
  useEffect(() => {
    updateServerPosition(avatarPosition);
  }, [avatarPosition, updateServerPosition]);

  // Movement handler
  const moveAvatar = useCallback((direction: string) => {
    setAvatarPosition((prev) => {
      const newPosition = { ...prev };

      switch (direction) {
        case "up":
          newPosition.y = Math.max(0, prev.y - STEP_SIZE);
          break;
        case "down":
          newPosition.y = Math.min(boundaries.height - AVATAR_SIZE, prev.y + STEP_SIZE);
          break;
        case "left":
          newPosition.x = Math.max(0, prev.x - STEP_SIZE);
          break;
        case "right":
          newPosition.x = Math.min(boundaries.width - AVATAR_SIZE, prev.x + STEP_SIZE);
          break;
      }

      return newPosition;
    });
  }, [boundaries]);

  // Keyboard controls
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
        name={session?.user?.name || session?.user?.email || "Anonymous"}
        isCurrentUser={true}
      />

      {/* Other users' avatars */}
      {Object.entries(otherAvatars).map(([id, user]) => {
        if (socket && id === socket.id) return null;
        return (
          <Avatar
            key={id}
            position={user.position}
            name={user.name}
          />
        );
      })}

      
        <div className="absolute top-0 left-0 bg-black/50 text-white p-2 text-sm">
          <div>Connected: {socket?.connected ? 'Yes' : 'No'}</div>
          <div>Users: {Object.keys(otherAvatars).length}</div>
          <div>Position: {JSON.stringify(avatarPosition)}</div>
        </div>
      
    </div>
  );
};

export default Canvas;