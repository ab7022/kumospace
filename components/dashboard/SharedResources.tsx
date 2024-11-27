import React from 'react'

const SharedResources = () => {
  return (
    <div className="bg-neutral-800/40 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50 hover:border-primary-500/50 transition-all shadow-xl">
    <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
      <svg
        className="w-6 h-6 mr-2 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokelinejoin="round"
          strokewidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Shared Resources
    </h2>
    <div className="space-y-4">
      <div className="bg-neutral-700/30 rounded-xl p-4 hover:bg-neutral-700/40 transition-all cursor-pointer">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokelinejoin="round"
                strokewidth="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium">Q4 Planning.doc</p>
            <p className="text-sm text-neutral-400">
              Updated 5 mins ago
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-700/30 rounded-xl p-4 hover:bg-neutral-700/40 transition-all cursor-pointer">
        <div className="flex items-center space-x-3">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <svg
              className="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokelinejoin="round"
                strokewidth="2"
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium">
              Analytics Report.xlsx
            </p>
            <p className="text-sm text-neutral-400">
              Updated 1 hour ago
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default SharedResources