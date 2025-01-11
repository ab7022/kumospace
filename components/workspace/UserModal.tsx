import { Eye, Mail, MessageCircle, UserCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const UserModal = ({
  email,
  name,
  designation,
  onCurrentlyWorking,
  currentTime,
  image,
  status,
  teamName,
  timeZone,
}: {
  email?: string;
  name: string;
  designation?: string;
  onCurrentlyWorking?: string;
  currentTime: any;
  image: string;
  status?: string;
  teamName?: string;
  timeZone?: any
}) => {
  const formatTime = (date: any) => {
    if (!date) return "";
    if (!timeZone) return date.toLocaleTimeString();
    return date.toLocaleTimeString("en-IN", {
      timeZone: timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };
  return (
    <div className="absolute top-12 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-500 hover:scale-95">
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-t-2xl px-4 py-2 flex items-center">
        <Image
          src={image}
          width={60}
          height={460}
          alt={`${name}'s avatar`}
          className="rounded-full border-4 border-white shadow-lg object-cover"
        />
        <div className="ml-6">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-center space-x-3">
          <UserCircle className="text-blue-500" size={20} />
          <div>
            <p className="text-xs text-gray-500">Currently Working</p>
            <p className="text-sm font-medium">{onCurrentlyWorking}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <MessageCircle className="text-green-500" size={24} />
            <span className="text-xs text-gray-600">{email}</span>
          </div>
          {currentTime && (
            <div className="flex items-center space-x-2">
              <Eye className="text-purple-500" size={18} />
              <span className="text-xs text-gray-600">
                {formatTime(currentTime)}
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <span
              className={`h-3 w-3 rounded-full ${
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
            <span className="text-sm font-medium text-gray-700">{status}</span>
          </div>
          {teamName && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {teamName}
            </span>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            onClick={() => {
              window.open(`mailto:${email}`);
            }}
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
            <MessageCircle size={16} />
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
