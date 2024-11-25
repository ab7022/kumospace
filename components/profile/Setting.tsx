import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "../Button";

const Setting = () => {
  return (
    <div>
      {" "}
      <section
        id="settings_panel"
        className="bg-neutral-800 bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700/50 rounded-2xl shadow-sm m-6"
      >
        <div className=" mx-auto">
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-6">
              <div className="flex flex-row justify-center items-center gap-2">
                <UserIcon className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-neutral-100">
                  Settings
                </h2>
              </div>
              <span className="text-sm text-neutral-400">
                Last updated: Just now
              </span>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-1 text-neutral-200">
                Time Zone
              </h3>
              <div className="bg-neutral-700/10 hover:bg-neutral-700/20 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-300">Current Time</p>
                    <p className="text-2xl font-semibold text-white">
                      {new Date().toLocaleTimeString()}
                    </p>
                  </div>
                  <select className="bg-neutral-700/30 hover:bg-neutral-700/50 border border-neutral-500 rounded-lg px-3 py-2 text-neutral-200">
                    <option>UTC-7 (PDT)</option>
                    <option>UTC-4 (EDT)</option>
                    <option>UTC+0 (GMT)</option>
                    <option>UTC+1 (CET)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-8 bg-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-neutral-200">
                Working Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="working-hours-from"
                    className="text-neutral-200"
                  >
                    From:
                  </label>
                  <input
                    id="working-hours-from"
                    type="time"
                    className="w-1/4 px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                  <label
                    htmlFor="working-hours-to"
                    className="text-neutral-200"
                  >
                    To:
                  </label>
                  <input
                    id="working-hours-to"
                    type="time"
                    className="w-1/4 px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                </div>
              </div>
            </div>
            {/* Account Settings */}
            <div className="mb-8 bg-neutral-800 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium text-neutral-200">
                Account Settings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value="john.doe@example.com"
                    className="w-full px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value="+1 (555) 123-4567"
                    className="w-full px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="mb-8 bg-neutral-800 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium text-neutral-200">
                Notification Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-800">
                  <div>
                    <h4 className="font-medium text-neutral-200">
                      Direct Messages
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Receive notifications for direct messages
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-800">
                  <div>
                    <h4 className="font-medium text-neutral-200">
                      Meeting Reminders
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Get notifications before scheduled meetings
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <Button>Update Details</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;
