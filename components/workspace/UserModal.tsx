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
  timeZone?: any;
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
    <div className="absolute top-12 w-72 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100/50 backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:scale-98">
      <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-cyan-50 rounded-t-2xl px-4 py-3 flex items-center">
        <div className="relative">
          <Image
            src={image}
            width={60}
            height={460}
            alt={`${name}'s avatar`}
            className="rounded-full border-[3px] border-white shadow-[0_4px_12px_rgb(0,0,0,0.08)] object-cover"
          />
          <span
            className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
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
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-bold text-gray-800 mb-0.5">{name}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>
      </div>

      <div className="p-4 space-y-4 bg-gradient-to-b from-white to-gray-50/50">
        <div className="flex items-center space-x-3 bg-white/80 p-3 rounded-xl shadow-sm border border-gray-100/80">
          <UserCircle className="text-blue-500" size={20} />
          <div>
            <p className="text-xs text-gray-500">Currently Working</p>
            <p className="text-sm font-medium text-gray-800">{onCurrentlyWorking}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2 bg-white/80 p-2.5 rounded-xl shadow-sm border border-gray-100/80">
            <MessageCircle className="text-green-500" size={20} />
            <span className="text-xs text-gray-600 truncate">{email}</span>
          </div>
          {currentTime && (
            <div className="flex items-center space-x-2 bg-white/80 p-2.5 rounded-xl shadow-sm border border-gray-100/80">
              <Eye className="text-purple-500" size={18} />
              <span className="text-xs text-gray-600">
                {formatTime(currentTime)}
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">{status}</span>
          </div>
          {teamName && (
            <span className="text-xs font-medium text-gray-600 bg-gray-100/80 px-3 py-1.5 rounded-full shadow-sm border border-gray-200/50">
              {teamName}
            </span>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              window.open(`mailto:${email}`);
            }}
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl hover:bg-gray-200 transition-colors shadow-sm border border-gray-200/50"
          >
            <Mail size={18} />
            <span className="font-medium">Email</span>
          </button>
          <button onClick={()=>{
            window.open(`/Dashboard/Messages`);
          }} className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-colors shadow-sm border border-blue-400/50">
            <MessageCircle size={16} />
            <span className="font-medium">Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;