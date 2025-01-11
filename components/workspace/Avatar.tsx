import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import UserModal from "./UserModal";

export const Avatar: React.FC<AvatarProps> = ({
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
  screenStream,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [currentTime] = useState(new Date());

  return (
    <div
      className="absolute flex flex-col items-center transition-all duration-200"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <div className="relative">
        {(myStream || remoteStream) ? (
          <ReactPlayer
            style={{
              borderRadius: "6px",
              border: "2px solid #4B5563",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              objectFit: "contain",
            }}
            playing
            muted
            height="full"
            width="150px"
            url={screenStream || myStream || remoteStream}
          />
        ) : (
          <Image
            width={100}
            height={150}
            src={image}
            alt={name}
            className="rounded-xl border-2 border-neutral-700 shadow-md"
          />
        )}
      </div>
      <span className="mt-1 pl-6 pr-2 text-center bg-black p-1 rounded-2xl font-semibold text-sm text-white">
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
        />
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

