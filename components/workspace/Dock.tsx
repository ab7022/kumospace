import {
  Maximize,
  Mic,
  MicOff,
  Phone,
  Play,
  Share,
  StopCircle,
  Video,
  VideoOff,
  X,
} from "lucide-react";
import React, { useState } from "react";

export default function Dock({
  sendStreams,
  handleCallUser,
  handleEndCall,
  handleScreenShare,
  setScreenStream,
  screenStream,
  remoteSocketId,
  isUserNearby,
  remoteStream,
  myStream,
  handleFullScreen,
}: any) {
  const [isCameraMuted, setIsCameraMuted] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleToggleCamera = () => {
    setIsCameraMuted(!isCameraMuted);
    if (myStream) {
      myStream.getVideoTracks().forEach((track: any) => {
        track.enabled = !track.enabled;
      });
    }
  };

  const handleToggleMic = () => {
    setIsMicMuted(!isMicMuted);
    if (myStream) {
      myStream.getAudioTracks().forEach((track: any) => {
        track.enabled = !track.enabled;
      });
    }
  };
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg text-white px-4 pt-4 pb-2 rounded-2xl shadow-2xl border border-white/10">
      <div className="flex items-center space-x-6">
        {/* Send Stream Button */}
        <button
          onClick={sendStreams}
          className="group flex flex-col items-center transition-all duration-300"
        >
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 group-hover:from-blue-400 group-hover:to-blue-600 shadow-lg group-hover:shadow-blue-400/25 transition-all duration-300">
            <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </div>
          <span className="mt-2 text-xs font-medium opacity-80 group-hover:opacity-100">
            Stream
          </span>
        </button>

        {/* Call Button */}
        {remoteSocketId && isUserNearby && !remoteStream && (
          <button
            onClick={handleCallUser}
            className="group flex flex-col items-center transition-all duration-300"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-green-700 group-hover:from-green-400 group-hover:to-green-600 shadow-lg group-hover:shadow-green-400/25 transition-all duration-300">
              <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="mt-2 text-xs font-medium opacity-80 group-hover:opacity-100">
              Call
            </span>
          </button>
        )}

        {/* End Call Button */}
        {myStream && (
          <button
            onClick={handleEndCall}
            className="group flex flex-col items-center transition-all duration-300"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-red-700 group-hover:from-red-400 group-hover:to-red-600 shadow-lg group-hover:shadow-red-400/25 transition-all duration-300">
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="mt-2 text-xs font-medium opacity-80 group-hover:opacity-100">
              End
            </span>
          </button>
        )}
         {myStream && ( 
          <>
          {/* Mute Camera Button */}
          
          <button
            onClick={handleToggleCamera}
            className="group flex flex-col items-center transition-all duration-300"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-red-700 group-hover:from-red-400 group-hover:to-red-600 shadow-lg group-hover:shadow-red-400/25 transition-all duration-300">
              {isCameraMuted ? (
                <VideoOff className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              ) : (
                <Video className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              )}
            </div>
            <span className="mt-2 text-xs font-medium opacity-80 group-hover:opacity-100">
              {isCameraMuted ? "Show Camera" : "Mute Camera"}
            </span>
          </button>
        
        {/* Mute Mic Button */}
        <button
          onClick={handleToggleMic}
          className="group flex flex-col items-center transition-all duration-300"
        >
          <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-red-700 group-hover:from-red-400 group-hover:to-red-600 shadow-lg group-hover:shadow-red-400/25 transition-all duration-300">
            {isMicMuted ? (
              <MicOff className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Mic className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </div>
          <span className="mt-2 text-xs font-medium opacity-80 group-hover:opacity-100">
            {isMicMuted ? "Unmute Mic" : "Mute Mic"}
          </span>
        </button>
        </>
        )} 
        {/* Screen Share Toggle Button */}
        <button
          onClick={() => {
            if (screenStream) {
              screenStream.getTracks().forEach((track: any) => track.stop());
              setScreenStream(null);
            } else {
              handleScreenShare();
            }
          }}
          className="group flex flex-col items-center transition-all duration-300"
        >
          <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 group-hover:from-yellow-400 group-hover:to-yellow-600 shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300">
            {screenStream ? (
              <StopCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Share className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </div>
          <span className="mt-2 text-xs font-medium opacity-80 group-hover:opacity-100">
            {screenStream ? "Stop Share" : "Share Screen"}
          </span>
        </button>

        {/* Full Screen Button */}
        {remoteStream && (
          <button
            onClick={handleFullScreen}
            className="group flex flex-col items-center transition-all duration-300"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 group-hover:from-purple-400 group-hover:to-purple-600 shadow-lg group-hover:shadow-purple-400/25 transition-all duration-300">
              <Maximize className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="mt-2 text-xs font-medium opacity-80 group-hover:opacity-100">
              Fullscreen
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
