import React, { useState, useEffect } from "react";
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
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface DockProps {
  sendStreams: () => void;
  handleCallUser: () => void;
  handleEndCall: () => void;
  handleScreenShare: () => void;
  setScreenStream: (stream: MediaStream | null) => void;
  screenStream: MediaStream | null;
  remoteSocketId: string | null;
  isUserNearby: boolean;
  remoteStream: MediaStream | null;
  myStream: MediaStream | null;
  handleFullScreen: () => void;
}

const DockButton = ({ 
  onClick, 
  icon: Icon, 
  label, 
  variant = "default",
  disabled = false,
  isMobile = false
}: {
  onClick: () => void;
  icon: React.ElementType;
  label: string;
  variant?: "default" | "primary" | "danger" | "warning" | "success";
  disabled?: boolean;
  isMobile?: boolean;
}) => {
  const variants = {
    default: "from-gray-500 to-gray-700 hover:from-gray-400 hover:to-gray-600 shadow-gray-400/25",
    primary: "from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 shadow-blue-400/25",
    danger: "from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 shadow-red-400/25",
    warning: "from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 shadow-yellow-400/25",
    success: "from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 shadow-green-400/25"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group flex ${isMobile ? 'flex-row items-center gap-3' : 'flex-col items-center'} transition-all duration-300`}
      aria-label={label}
    >
      <div className={`${isMobile ? 'p-3' : 'p-4'} rounded-xl bg-gradient-to-br ${variants[variant]} shadow-lg group-hover:shadow-lg transition-all duration-300 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'group-hover:scale-105'}`}>
        <Icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-white group-hover:scale-110 transition-transform`} />
      </div>
      <span className={`${isMobile ? 'text-xs' : 'mt-2 text-xs'} font-medium opacity-80 group-hover:opacity-100 transition-opacity`}>
        {label}
      </span>
    </button>
  );
};

export default function Dock(props: DockProps) {
  const [isCameraMuted, setIsCameraMuted] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggleCamera = () => {
    setIsCameraMuted(!isCameraMuted);
    if (props.myStream) {
      props.myStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
  };

  const handleToggleMic = () => {
    setIsMicMuted(!isMicMuted);
    if (props.myStream) {
      props.myStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
  };

  const MobileLayout = () => (
    <div className="fixed bottom-0 w-full left-0 right-0 bg-gray-500/90 backdrop-blur-xl text-white px-4 py-3 border-t border-white/10">
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white p-1 rounded-t-lg border-t border-l border-r border-white/10"
      >
        {isCollapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      
      {!isCollapsed && (
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-3">
            <DockButton
              onClick={props.sendStreams}
              icon={Play}
              label="Stream"
              variant="primary"
              disabled={!props.myStream}
              isMobile={true}
            />

            {props.remoteSocketId && props.isUserNearby && !props.remoteStream && (
              <DockButton
                onClick={props.handleCallUser}
                icon={Phone}
                label="Call"
                variant="success"
                isMobile={true}
              />
            )}

            {props.myStream && (
              <DockButton
                onClick={props.handleEndCall}
                icon={X}
                label="End"
                variant="danger"
                isMobile={true}
              />
            )}
          </div>

          {props.myStream && (
            <div className="flex items-center gap-3">
              <DockButton
                onClick={handleToggleCamera}
                icon={isCameraMuted ? VideoOff : Video}
                label={isCameraMuted ? "Camera" : "Camera"}
                variant={isCameraMuted ? "danger" : "default"}
                isMobile={true}
              />

              <DockButton
                onClick={handleToggleMic}
                icon={isMicMuted ? MicOff : Mic}
                label={isMicMuted ? "Mic" : "Mic"}
                variant={isMicMuted ? "danger" : "default"}
                isMobile={true}
              />
            </div>
          )}

          <div className="flex items-center gap-3">
            <DockButton
              onClick={() => {
                if (props.screenStream) {
                  props.screenStream.getTracks().forEach(track => track.stop());
                  props.setScreenStream(null);
                } else {
                  props.handleScreenShare();
                }
              }}
              icon={props.screenStream ? StopCircle : Share}
              label={props.screenStream ? "Stop" : "Share"}
              variant="warning"
              isMobile={true}
            />

            {props.remoteStream && (
              <DockButton
                onClick={props.handleFullScreen}
                icon={Maximize}
                label="Full"
                variant="default"
                isMobile={true}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );

  const DesktopLayout = () => (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 transition-all duration-300 hover:bg-black/95">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 border-r border-white/10 pr-4">
          <DockButton
            onClick={props.sendStreams}
            icon={Play}
            label="Stream"
            variant="primary"
            disabled={!props.myStream}
          />

          {props.remoteSocketId && props.isUserNearby && !props.remoteStream && (
            <DockButton
              onClick={props.handleCallUser}
              icon={Phone}
              label="Call"
              variant="success"
            />
          )}

          {props.myStream && (
            <DockButton
              onClick={props.handleEndCall}
              icon={X}
              label="End"
              variant="danger"
            />
          )}
        </div>

        {props.myStream && (
          <div className="flex items-center gap-4 border-r border-white/10 pr-4">
            <DockButton
              onClick={handleToggleCamera}
              icon={isCameraMuted ? VideoOff : Video}
              label={isCameraMuted ? "Show Camera" : "Hide Camera"}
              variant={isCameraMuted ? "danger" : "default"}
            />

            <DockButton
              onClick={handleToggleMic}
              icon={isMicMuted ? MicOff : Mic}
              label={isMicMuted ? "Unmute Mic" : "Mute Mic"}
              variant={isMicMuted ? "danger" : "default"}
            />
          </div>
        )}

        <div className="flex items-center gap-4">
          <DockButton
            onClick={() => {
              if (props.screenStream) {
                props.screenStream.getTracks().forEach(track => track.stop());
                props.setScreenStream(null);
              } else {
                props.handleScreenShare();
              }
            }}
            icon={props.screenStream ? StopCircle : Share}
            label={props.screenStream ? "Stop Share" : "Share Screen"}
            variant="warning"
          />

          {props.remoteStream && (
            <DockButton
              onClick={props.handleFullScreen}
              icon={Maximize}
              label="Fullscreen"
              variant="default"
            />
          )}
        </div>
      </div>
    </div>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}