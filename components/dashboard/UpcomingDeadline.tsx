import React from "react";

const UpcomingDeadline = () => {
  return (
    <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Upcoming Deadlines
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-neutral-700/20 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-medium">Design System V2</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-400/10 text-red-400">
              2 days left
            </span>
          </div>
          <p className="text-sm text-neutral-400">
            Update component library and documentation
          </p>
        </div>

        <div className="p-4 bg-neutral-700/20 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-medium">Client Dashboard</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-400">
              5 days left
            </span>
          </div>
          <p className="text-sm text-neutral-400">
            Implement new analytics features
          </p>
        </div>

        <div className="p-4 bg-neutral-700/20 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-medium">Mobile App Release</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
              2 weeks left
            </span>
          </div>
          <p className="text-sm text-neutral-400">
            Prepare for beta testing phase
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDeadline;
