import React from "react";

const Collaboration = () => {
  return (
    <div className="lg:col-span-4 bg-neutral-800/50 rounded-3xl p-8 border border-neutral-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-white">
          Active Collaboration Spaces
        </h3>
        <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create Space
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl text-white font-medium">Design Room</h4>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
              Live
            </span>
          </div>
          <p className="text-neutral-400 mb-4">
            UI/UX team collaboration space
          </p>
          <div className="flex justify-between items-center">
            <div className="flex -space-x-3">
              <img
                src="/avatar-1.jpg"
                alt="Member"
                className="w-8 h-8 rounded-lg border-2 border-neutral-800"
              />
              <img
                src="/avatar-2.jpg"
                alt="Member"
                className="w-8 h-8 rounded-lg border-2 border-neutral-800"
              />
              <div className="w-8 h-8 rounded-lg border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center">
                <span className="text-white text-xs">+3</span>
              </div>
            </div>
            <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl text-white font-medium">Dev Sprint</h4>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
              8 Active
            </span>
          </div>
          <p className="text-neutral-400 mb-4">Development team workspace</p>
          <div className="flex justify-between items-center">
            <div className="flex -space-x-3">
              <img
                src="/avatar-3.jpg"
                alt="Member"
                className="w-8 h-8 rounded-lg border-2 border-neutral-800"
              />
              <img
                src="/avatar-4.jpg"
                alt="Member"
                className="w-8 h-8 rounded-lg border-2 border-neutral-800"
              />
              <div className="w-8 h-8 rounded-lg border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center">
                <span className="text-white text-xs">+6</span>
              </div>
            </div>
            <button className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl text-white font-medium">Strategy Meeting</h4>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
              In Progress
            </span>
          </div>
          <p className="text-neutral-400 mb-4">Management discussion room</p>
          <div className="flex justify-between items-center">
            <div className="flex -space-x-3">
              <img
                src="/avatar-5.jpg"
                alt="Member"
                className="w-8 h-8 rounded-lg border-2 border-neutral-800"
              />
              <img
                src="/avatar-6.jpg"
                alt="Member"
                className="w-8 h-8 rounded-lg border-2 border-neutral-800"
              />
              <div className="w-8 h-8 rounded-lg border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center">
                <span className="text-white text-xs">+4</span>
              </div>
            </div>
            <button className="p-2 hover:bg-emerald-500/20 rounded-lg transition-colors">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
