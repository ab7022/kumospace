import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faVideo,
  faProjectDiagram,
  faEdit,

} from "@fortawesome/free-solid-svg-icons";

const QuickActions = () => {
  return (
    <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50">
      <h2 className="text-2xl font-semibold text-white mb-6">Quick Actions</h2>
      <div className="space-y-3">
        <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-blue-400"
              />
            </div>
            Schedule Meeting
          </div>
          <FontAwesomeIcon
            icon="chevron-right"
            className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
          />
        </button>

        <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
              <FontAwesomeIcon
                icon={faVideo}
                className="text-blue-400"
              />
            </div>
            Start Video Call
          </div>
          <FontAwesomeIcon
            icon="chevron-right"
            className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
          />
        </button>

        <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-400/10 flex items-center justify-center group-hover:bg-purple-400/20 transition-colors">
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className="text-purple-400"
              />
            </div>
            Create Project
          </div>
          <FontAwesomeIcon
            icon="chevron-right"
            className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
          />
        </button>

        <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-pink-400/10 flex items-center justify-center group-hover:bg-pink-400/20 transition-colors">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-pink-400"
              />
            </div>
            Write Update
          </div>
          <FontAwesomeIcon
            icon="chevron-right"
            className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
          />
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
