import { ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

const Reminders = () => {
  return (
    <div>
      <section
        id="reminders_deadlines"
        className="bg-neutral-800 bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700/50 rounded-2xl shadow-sm m-6"
      >
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-6">
            <div className="flex flex-row justify-center items-center gap-2">
              <ClockIcon className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-neutral-100">
                Reminders &amp; Deadlines
              </h2>
            </div>
            <span className="text-sm text-neutral-400">
              Last updated: Just now
            </span>
          </div>

          <div className="bg-neutral-800 rounded-lg p-4 mb-8">
            <div className="flex flex-row justify-between mb-2">
              <h3 className="text-lg font-medium text-neutral-200 mb-4">
                Today's Reminders
              </h3>
              <button className="flex items-center gap-2 px-2 py-0 bg-primary-500 text-neutral-800 text-sm font-medium rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Reminder
              </button>
            </div>

            <div className="space-y-4">
              {/* Reminder Card */}
              <div className="flex items-center gap-4 p-4 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-800">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold text-neutral-200">
                    Team Meeting
                  </h4>
                  <p className="text-sm text-neutral-400">
                    2:00 PM - Weekly Progress Review
                  </p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                  In 2 hours
                </span>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-neutral-800 rounded-lg p-4">
            <div className="flex flex-row justify-between mb-2">
              <h3 className="text-lg font-medium text-neutral-200 mb-4">
                Upcoming Deadlines
              </h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-neutral-800 text-sm font-medium rounded-md hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Set Deadline
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border border-neutral-800 p-4 rounded-lg bg-neutral-700/30">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold text-neutral-200">
                    Client Presentation
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Marketing Campaign Results
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-neutral-200">
                    Tomorrow
                  </p>
                  <p className="text-sm text-neutral-400">10:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reminders;
