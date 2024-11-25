import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const TeamDirectory = () => {
  return (
    <div>
      {" "}
      <section
        id="team_directory"
        className="bg-neutral-800 bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700/50 rounded-2xl shadow-sm m-6"
      >
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-6">
            <div className="flex flex-row justify-center items-center gap-2">
              <UserIcon className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-neutral-100">
                Team Directory
              </h2>
            </div>
            <span className="text-sm text-neutral-400">
              Last updated: Just now
            </span>
          </div>

          <div className="bg-neutral-800 rounded-lg p-4 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <button className="px-4 py-2 bg-neutral-700 text-white rounded-lg">
                All Teams
              </button>
              <button className="px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700 text-white rounded-lg">
                Design
              </button>
              <button className="px-4 py-2 bg-neutral-700/30  text-neutral-700 dark:text-neutral-200 rounded-lg  hover:bg-neutral-700">
                Development
              </button>
              <button className="px-4 py-2 bg-neutral-700/30  text-neutral-700 dark:text-neutral-200 rounded-lg  dark:hover:bg-neutral-700">
                Marketing
              </button>
              <button className="px-4 py-2 bg-neutral-700/30  text-neutral-700 dark:text-neutral-200 rounded-lg  dark:hover:bg-neutral-700">
                Management
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-800">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-neutral-400 text-lg">AS</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold text-neutral-200">
                    Alice Smith
                  </h4>
                  <p className="text-sm text-neutral-400">Senior Designer</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-800">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-neutral-400 text-lg">RJ</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold text-neutral-200">
                    Robert Johnson
                  </h4>
                  <p className="text-sm text-neutral-400">Lead Developer</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                    On Leave
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDirectory;
