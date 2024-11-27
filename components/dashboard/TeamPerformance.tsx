import React from 'react'

const TeamPerformance = () => {
  return (
    <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50">
    <h2 className="text-2xl font-semibold text-white mb-6">
      Team Performance
    </h2>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-neutral-400">Project Completion</span>
          <span className="text-white font-medium">85%</span>
        </div>
        <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-neutral-400">Task Completion</span>
          <span className="text-white font-medium">92%</span>
        </div>
        <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div className="h-full w-[92%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-neutral-400">Team Velocity</span>
          <span className="text-white font-medium">78%</span>
        </div>
        <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div className="h-full w-[78%] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
)
}

export default TeamPerformance