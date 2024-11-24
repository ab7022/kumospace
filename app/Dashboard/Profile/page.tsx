import React from "react";

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
            <h2 className="text-2xl font-semibold text-white mb-4">
              Basic Details
            </h2>
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
              <svg
                className="w-6 h-6 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16.5 12a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 12l6-6m0 6l-6-6"
                />
              </svg>
              Daily Status
            </h2>
            <span className="text-sm text-neutral-400">
              Last updated: 5 mins ago
            </span>
          </div>

          <div className="mb-8">
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

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-neutral-200">
              Availability
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-green-500/20 text-green-300 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Available
                </span>
              </button>
              <button className="px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-300 font-medium hover:bg-yellow-500/30">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  In Meeting
                </span>
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 font-medium hover:bg-red-500/30">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Do Not Disturb
                </span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-neutral-200">
              Time Zone
            </h3>
            <div className="bg-neutral-700/30 hover:bg-neutral-700/50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-300">Current Time</p>
                  <p className="text-2xl font-semibold text-white">10:30 AM</p>
                </div>
                <select className="bg-neutral-600 border border-neutral-500 rounded-lg px-3 py-2 text-neutral-200">
                  <option>UTC-7 (PDT)</option>
                  <option>UTC-4 (EDT)</option>
                  <option>UTC+0 (GMT)</option>
                  <option>UTC+1 (CET)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="reminders_deadlines"
        className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm m-6 element-highlight"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-white">
            Reminders &amp; Deadlines
          </h2>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Add Reminder
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Set Deadline
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-neutral-700 dark:text-neutral-200">
              Today's Reminders
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Team Meeting
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    2:00 PM - Weekly Progress Review
                  </p>
                </div>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                  In 2 hours
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Project Deadline
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Submit Q1 Report
                  </p>
                </div>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                  Due Today
                </span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-neutral-700 dark:text-neutral-200">
              Upcoming Deadlines
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-600 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Client Presentation
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Marketing Campaign Results
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Tomorrow
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    10:00 AM
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Product Launch
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      New Feature Release
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Next Week
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Monday, 9:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="team_directory"
        className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm m-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">
              Team Directory
            </h2>
            <div className="flex gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search team members..."
                  className="w-64 px-4 py-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white pr-10"
                />
                <svg
                  className="w-5 h-5 absolute right-3 top-2.5 text-neutral-400 dark:text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                Add Member
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg">
              All Teams
            </button>
            <button className="px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600">
              Design
            </button>
            <button className="px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600">
              Development
            </button>
            <button className="px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600">
              Marketing
            </button>
            <button className="px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600">
              Management
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-600 rounded-lg flex items-center justify-center text-xl font-medium text-neutral-600 dark:text-neutral-300">
                    AS
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-neutral-800"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-neutral-800 dark:text-white">
                    Alice Smith
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Senior Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      Design
                    </span>
                    <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200 rounded text-xs">
                      UI/UX
                    </span>
                  </div>
                </div>
                <button className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-600 rounded-lg flex items-center justify-center text-xl font-medium text-neutral-600 dark:text-neutral-300">
                    RJ
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white dark:border-neutral-800"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-neutral-800 dark:text-white">
                    Robert Johnson
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Lead Developer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs">
                      Development
                    </span>
                    <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200 rounded text-xs">
                      Frontend
                    </span>
                  </div>
                </div>
                <button className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-600 rounded-lg flex items-center justify-center text-xl font-medium text-neutral-600 dark:text-neutral-300">
                    ML
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-white dark:border-neutral-800"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-neutral-800 dark:text-white">
                    Maria Lopez
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Marketing Manager
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs">
                      Marketing
                    </span>
                    <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200 rounded text-xs">
                      Strategy
                    </span>
                  </div>
                </div>
                <button className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600">
              Load More
            </button>
          </div>
        </div>
      </section>

      <section
        id="settings_panel"
        className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm m-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-white">
            Settings
          </h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                Account Settings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value="john.doe@example.com"
                    className="w-full px-4 py-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value="+1 (555) 123-4567"
                    className="w-full px-4 py-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                Avatar Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    <span className="ms-3 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Enable Avatar Movement
                    </span>
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    <span className="ms-3 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Show Avatar Status
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                Notification Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Direct Messages
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Receive notifications for direct messages
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Meeting Reminders
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Get notifications before scheduled meetings
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                Privacy Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Online Status Visibility
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Show your online status to other users
                    </p>
                  </div>
                  <select className="bg-white dark:bg-neutral-600 border border-neutral-200 dark:border-neutral-500 rounded-lg px-3 py-2 text-neutral-700 dark:text-neutral-200">
                    <option>Everyone</option>
                    <option>Team Only</option>
                    <option>Nobody</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
