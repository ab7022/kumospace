import React from 'react';
import Dialog from './Dialog';
import ReactPlayer from 'react-player';

const Modal = ({
  isFullScreen,
  closeFullScreen,
  myStream,
  remoteStream,
  screenStream,
  name,
  remoteSocketId,
  otherAvatars
}:any) => {
  return (
    <Dialog
      isOpen={isFullScreen}
      onClose={closeFullScreen}
      title="Video Conference"
    >
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* My Stream */}
        {myStream && (
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative flex flex-col items-center bg-gray-900 rounded-xl p-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <ReactPlayer
                  playing
                  muted
                  width="100%"
                  height="100%"
                  url={screenStream ? screenStream : myStream}
                  className="absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-lg font-medium text-white">
                    {name} {screenStream ? '(Screen)' : '(Camera)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remote Stream */}
        {remoteStream && (
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative flex flex-col items-center bg-gray-900 rounded-xl p-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <ReactPlayer
                  playing
                  
                  width="100%"
                  height="100%"
                  url={ remoteStream}
                  className="absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-lg font-medium text-white">
                    {otherAvatars[remoteSocketId]?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={closeFullScreen}
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300"
        >
          End Full Screen
        </button>
      </div>
    </Dialog>
  );
};

export default Modal;