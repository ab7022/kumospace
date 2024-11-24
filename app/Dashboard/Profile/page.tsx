import React from "react";
import {
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="flex flex-col w-full flex-1  overflow-x-scroll bg-gradient-to-br from-neutral-900 to-neutral-800">
      <section
        id="profile_header"
        className="p-6 rounded-lg shadow-sm w-full element-highlight"
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Profile
          </h1>
          <p className="text-neutral-400 text-lg">
            Welcome back! Here's your profile details
          </p>
        </div>

        <div className="flex flex-col gap-6 bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <UserIcon className="h-8 w-8 text-white rounded-full border p-1" />
              <h2 className="text-2xl font-semibold text-white">
                Basic Details
              </h2>
            </div>
            <hr className="border-t-2 border-neutral-700 mb-6 w-full" />
          </div>

          <div className="flex flex-row flex-wrap items-start gap-6">
            {/* Profile Picture Section */}
            <div className="relative group">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-neutral-600">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-white p-2 rounded-full shadow-lg">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Inputs Section */}
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              <input
                type="text"
                placeholder="Enter your First Name"
                className="w-full bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl transition-all duration-200 px-4 py-2 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-80 text-white"
              />
              <input
                type="text"
                placeholder="Enter your Last Name"
                className="w-full bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl transition-all duration-200 px-4 py-2 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-80 text-white"
              />
              <input
                type="text"
                placeholder="Enter your Team Name"
                className="w-full bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl transition-all duration-200 px-4 py-2 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-80 text-white"
              />
              <input
                type="text"
                placeholder="Enter your Designation"
                className="w-full bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl transition-all duration-200 px-4 py-2 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-80 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="daily_status"
        className="bg-neutral-800 bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700/50 rounded-2xl shadow-sm m-6"
      >
        <div className="">
          <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <ArrowRightIcon className="w-6 h-6 text-primary" /> Daily Status
            </h2>
            <span className="text-sm text-neutral-400">
              Last updated: 5 mins ago
            </span>
          </div>

          <div className="mb-8 bg-neutral-800 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4 text-neutral-200">
              What are you working on?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <textarea
                    placeholder="Update your current task..."
                    rows={2}
                    className="w-full px-4 py-3 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white resize-none"
                  >
                    Working on the new dashboard UI components
                  </textarea>
                  <div className="flex gap-2 mt-2">
                    <button className="px-3 py-1 text-sm bg-neutral-700 hover:bg-neutral-600 text-neutral-200 rounded-full">
                      🎯 Focus Mode
                    </button>
                    <button className="px-3 py-1 text-sm bg-neutral-700 hover:bg-neutral-600 text-neutral-200 rounded-full">
                      ⏳ Until 2:30 PM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 bg-neutral-800 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4 text-neutral-200">
              Availability
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="p-2 hover:bg-neutral-700/30 animate-slide-up duration-1000 rounded-lg">
                <button className="px-4 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/40 text-green-300 font-medium">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Available
                  </span>
                </button>
              </div>
              <div className="p-2 hover:bg-neutral-700/30 animate-slide-up duration-100 rounded-lg">
                <button className="px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-300 font-medium hover:bg-yellow-500/30">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    In Meeting
                  </span>
                </button>
              </div>
              <div className="p-2 hover:bg-neutral-700/30 animate-slide-up duration-100 rounded-lg">
                <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 font-medium hover:bg-red-500/30">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Do Not Disturb
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tasks_projects"
        className="bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700 rounded-2xl shadow-md m-6 space-y-8"
      >
        {/* Active Tasks Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            🚀 Active Tasks
          </h3>
          <hr className="`border-t-2 border-neutral-700 mb-6 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fix bugs in dashboard",
                progress: 50,
                priority: "High",
              },
              {
                title: "Optimize React components",
                progress: 30,
                priority: "Medium",
              },
              {
                title: "Review PR for feature X",
                progress: 80,
                priority: "Low",
              },
            ].map((task, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-700 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {task.title}
                </h4>
                <div className="mb-2">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      task.priority === "High"
                        ? "bg-red-500/30 text-red-400"
                        : task.priority === "Medium"
                        ? "bg-yellow-500/30 text-yellow-400"
                        : "bg-green-500/30 text-green-400"
                    }`}
                  >
                    {task.priority} Priority
                  </span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-neutral-400">
                    {task.progress}% Complete
                  </span>
                  <button className="text-primary text-sm hover:underline">
                    Mark as Done
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="tasks_projects"
        className="bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700 rounded-2xl shadow-md m-6 space-y-8"
      >
        {/* Projects Assigned Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            📂 Projects Assigned
          </h3>
          <hr className="border-t-2 border-neutral-700 mb-6 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Project Alpha",
                deadline: "Dec 10, 2024",
                teammates: ["John Doe", "Jane Smith"],
              },
              {
                title: "Project Beta",
                deadline: "Jan 5, 2025",
                teammates: ["Alice Brown", "Bob White"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-700/50 relative hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-neutral-400 mb-2">
                  <span className="font-medium text-neutral-200">
                    Deadline:
                  </span>{" "}
                  {project.deadline}
                </p>
                <div className="text-sm text-neutral-400">
                  <span className="font-medium text-neutral-200">
                    Teammates:
                  </span>{" "}
                  {project.teammates.join(", ")}
                </div>
                <button className="absolute bottom-4 right-4 text-sm text-primary hover:underline">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <button className="flex items-center gap-2 px-2 py-0 bg-neutral-700 text-white text-sm font-medium rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-all">
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
              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-700 text-white text-sm font-medium rounded-md hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
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

            {/* Save Button */}
            <button className="px-6 py-2 bg-neutral-900 text-white rounded-md hover:bg-primary/90">
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
