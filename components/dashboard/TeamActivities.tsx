import React from 'react'

const TeamActivities = () => {
  return (

    <div className="col-span-12 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 p-8 backdrop-blur-xl hover:border-neutral-600 transition-all duration-300">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-2xl font-semibold text-white">
        Recent Activities
      </h3>
      <button className="px-4 py-2 rounded-lg text-sm text-neutral-400 hover:bg-neutral-800 transition-colors">
        View All
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="flex items-start space-x-4 p-6 rounded-xl bg-neutral-800 hover:bg-neutral-800/60 transition-all duration-300">
        <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5"></div>
        <div>
          <p className="text-neutral-300">
            <span className="text-white font-medium">John Doe</span>{" "}
            joined Design team
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <svg
              className="w-4 h-4 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-neutral-500">2m ago</span>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-6 rounded-xl bg-neutral-800 hover:bg-neutral-800/60 transition-all duration-300">
        <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1.5"></div>
        <div>
          <p className="text-neutral-300">
            <span className="text-white font-medium">
              Sarah Smith
            </span>{" "}
            started a meeting
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <svg
              className="w-4 h-4 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-neutral-500">15m ago</span>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-6 rounded-xl bg-neutral-800 hover:bg-neutral-800/60 transition-all duration-300">
        <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5"></div>
        <div>
          <p className="text-neutral-300">
            <span className="text-white font-medium">
              Mike Johnson
            </span>{" "}
            went offline
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <svg
              className="w-4 h-4 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-neutral-500">1h ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

export default TeamActivities