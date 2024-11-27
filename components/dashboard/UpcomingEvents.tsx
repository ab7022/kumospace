import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="bg-neutral-800/40 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50 hover:border-primary-500/50 transition-all shadow-xl">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-rose-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokelinejoin="round"
            strokewidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Upcoming Events
      </h2>
      <div className="space-y-4">
        <div className="bg-neutral-700/30 rounded-xl p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-rose-500/20 px-3 py-2 rounded-lg text-center min-w-[60px]">
              <span className="text-rose-400 text-sm block">OCT</span>
              <span className="text-white text-xl font-bold">15</span>
            </div>
            <div>
              <p className="text-white font-medium">Team Retrospective</p>
              <p className="text-sm text-neutral-400">2:00 PM - 3:30 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-700/30 rounded-xl p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-rose-500/20 px-3 py-2 rounded-lg text-center min-w-[60px]">
              <span className="text-rose-400 text-sm block">OCT</span>
              <span className="text-white text-xl font-bold">16</span>
            </div>
            <div>
              <p className="text-white font-medium">Product Demo</p>
              <p className="text-sm text-neutral-400">11:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
