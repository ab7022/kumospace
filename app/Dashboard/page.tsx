const Dashboard = ({ open }: { open: boolean }) => {
  
  return (
    <div className="flex flex-1  overflow-x-scroll bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
      <div className="max-w-8xl  mx-auto">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
                Dashboard
              </h1>
              <p className="text-neutral-400 text-lg">
                Welcome back! Here's your team's latest updates
              </p>
            </div>
            <div className="flex gap-4">
              <button className="group relative bg-neutral-800 text-white px-6 py-3 rounded-xl hover:bg-neutral-700 transition-all duration-200 flex items-center gap-2">
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
                  />
                </svg>
                New Project
              </button>
              <button className="bg-primary-400 text-neutral-900 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-200 font-semibold flex items-center gap-2">
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Invite Member
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Total Members</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                  +12% ↑
                </span>
              </div>
              <p className="text-3xl font-bold text-white">48</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Active Now</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                  +5% ↑
                </span>
              </div>
              <p className="text-3xl font-bold text-white">32</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">In Meetings</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-400">
                  Active
                </span>
              </div>
              <p className="text-3xl font-bold text-white">8</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Away</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-400/10 text-red-400">
                  15 New
                </span>
              </div>
              <p className="text-3xl font-bold text-white">8</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-6">
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-white">
                  Team Members
                </h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-neutral-700/50 transition-all duration-200">
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
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                    Filter
                  </button>
                  <button className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-neutral-700/50 transition-all duration-200">
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
                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                      />
                    </svg>
                    Sort
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-neutral-700/20 hover:bg-neutral-700/30 rounded-xl transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff"
                        className="w-14 h-14 rounded-full ring-2 ring-indigo-500/50"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-neutral-800"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        Sarah Johnson
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-neutral-400 text-sm">
                          Lead Designer
                        </span>
                        <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                        <span className="text-neutral-400 text-sm">
                          Design System
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                      Active
                    </span>
                    <div className="flex -space-x-2">
                      <button className="p-2 hover:bg-neutral-700 rounded-lg transition-all">
                        <svg
                          className="w-5 h-5 text-neutral-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="text-neutral-400 hover:text-red-400 transition-colors">
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
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-neutral-700/20 hover:bg-neutral-700/30 rounded-xl transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="https://ui-avatars.com/api/?name=Alex+Chen&background=ec4899&color=fff"
                        className="w-14 h-14 rounded-full ring-2 ring-pink-500/50"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-neutral-800"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        Alex Chen
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-neutral-400 text-sm">
                          Frontend Dev
                        </span>
                        <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                        <span className="text-neutral-400 text-sm">
                          Client Dashboard
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-400">
                      In Meeting
                    </span>
                    <div className="flex -space-x-2">
                      <button className="p-2 hover:bg-neutral-700 rounded-lg transition-all">
                        <svg
                          className="w-5 h-5 text-neutral-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="text-neutral-400 hover:text-red-400 transition-colors">
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
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-neutral-700/20 hover:bg-neutral-700/30 rounded-xl transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="https://ui-avatars.com/api/?name=Emily+Wilson&background=84cc16&color=fff"
                        className="w-14 h-14 rounded-full ring-2 ring-lime-500/50"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neutral-400 rounded-full border-2 border-neutral-800"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        Emily Wilson
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-neutral-400 text-sm">
                          Product Manager
                        </span>
                        <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                        <span className="text-neutral-400 text-sm">
                          Mobile App
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-400/10 text-neutral-400">
                      Away
                    </span>
                    <div className="flex -space-x-2">
                      <button className="p-2 hover:bg-neutral-700 rounded-lg transition-all">
                        <svg
                          className="w-5 h-5 text-neutral-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="text-neutral-400 hover:text-red-400 transition-colors">
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
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-neutral-500">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-neutral-800/50 rounded-3xl p-8 border border-neutral-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  Active Collaboration Spaces
                </h3>
                <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Create Space
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl text-white font-medium">
                      Design Room
                    </h4>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      Live
                    </span>
                  </div>
                  <p className="text-neutral-400 mb-4">
                    UI/UX team collaboration space
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-3">
                      <img
                        src="/avatar-1.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-lg border-2 border-neutral-800"
                      />
                      <img
                        src="/avatar-2.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-lg border-2 border-neutral-800"
                      />
                      <div className="w-8 h-8 rounded-lg border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center">
                        <span className="text-white text-xs">+3</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
                      <svg
                        className="w-6 h-6 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl text-white font-medium">
                      Dev Sprint
                    </h4>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      8 Active
                    </span>
                  </div>
                  <p className="text-neutral-400 mb-4">
                    Development team workspace
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-3">
                      <img
                        src="/avatar-3.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-lg border-2 border-neutral-800"
                      />
                      <img
                        src="/avatar-4.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-lg border-2 border-neutral-800"
                      />
                      <div className="w-8 h-8 rounded-lg border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center">
                        <span className="text-white text-xs">+6</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl text-white font-medium">
                      Strategy Meeting
                    </h4>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                      In Progress
                    </span>
                  </div>
                  <p className="text-neutral-400 mb-4">
                    Management discussion room
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-3">
                      <img
                        src="/avatar-5.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-lg border-2 border-neutral-800"
                      />
                      <img
                        src="/avatar-6.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-lg border-2 border-neutral-800"
                      />
                      <div className="w-8 h-8 rounded-lg border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center">
                        <span className="text-white text-xs">+4</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-emerald-500/20 rounded-lg transition-colors">
                      <svg
                        className="w-6 h-6 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-800/40 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50 hover:border-primary-500/50 transition-all shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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

            <div className="bg-neutral-800/40 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50 hover:border-primary-500/50 transition-all shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Upcoming Events
              </h2>
              <div className="space-y-4">
                <div className="bg-neutral-700/30 rounded-xl p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-500/20 px-3 py-2 rounded-lg text-center min-w-[60px]">
                      <span className="text-rose-400 text-sm block">OCT</span>
                      <span className="text-white text-xl font-bold">15</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Team Retrospective
                      </p>
                      <p className="text-sm text-neutral-400">
                        2:00 PM - 3:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-700/30 rounded-xl p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-500/20 px-3 py-2 rounded-lg text-center min-w-[60px]">
                      <span className="text-rose-400 text-sm block">OCT</span>
                      <span className="text-white text-xl font-bold">16</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Product Demo</p>
                      <p className="text-sm text-neutral-400">
                        11:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 space-y-6">
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

            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-neutral-200">
                  Pending Invites
                </h2>
                <span className="text-neutral-400">2 pending</span>
              </div>
              <div className="space-y-5">
                <div className="bg-neutral-700/30 p-5 rounded-xl hover:bg-neutral-700/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-neutral-200 font-medium">
                        jane@example.com
                      </h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-neutral-500 mr-2"
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
                        <p className="text-sm text-neutral-500">
                          Sent 2 days ago
                        </p>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-500 text-sm font-medium transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>

                <div className="bg-neutral-700/30 p-5 rounded-xl hover:bg-neutral-700/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-neutral-200 font-medium">
                        mike@example.com
                      </h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-neutral-500 mr-2"
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
                        <p className="text-sm text-neutral-500">
                          Sent 1 hour ago
                        </p>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-500 text-sm font-medium transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
                <div
                  className={`bg-neutral-900/50 backdrop-blur-sm rounded-xl ${
                    open ? "p-6" : "p-8"
                  } border border-neutral-700`}
                >
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                      />
                    </svg>
                    Upcoming Requests
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-neutral-800/50 rounded-xl p-6 transition-all hover:bg-neutral-800">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src="https://ui-avatars.com/api/?name=Mike+Brown"
                            alt="Mike Brown"
                            className={`${
                              open ? "h-8 w-8" : "h-12 w-12"
                            } rounded-full ring-2 ring-primary-400`}
                          />
                          <div>
                            <h3
                              className={`${
                                open ? "text-xs" : "text-sm"
                              } text-white font-medium`}
                            >
                              Mike Brown
                            </h3>
                            <p
                              className={`${
                                open ? "text-xs" : "text-sm"
                              } text-neutral-400`}
                            >
                              mike@example.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex ${
                          open ? "flex-col space-y-2" : "space-x-2 lg:flex-row"
                        }`}
                      >
                        <button className="flex-1 px-4 py-2 bg-primary-500 rounded-lg text-black font-medium hover:bg-primary-400 transition-all text-sm flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Approve
                        </button>
                        <button className="flex-1 px-4 py-2 bg-neutral-700 rounded-lg text-white font-medium hover:bg-neutral-600 transition-all text-sm flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    Schedule Meeting
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                      <svg
                        className=" h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    Start Video Call
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-400/10 flex items-center justify-center group-hover:bg-purple-400/20 transition-colors">
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />{" "}
                        <div className="relative  bg-neutral-800/40 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50 hover:border-primary-500/50 transition-all shadow-xl">
                          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                            <svg
                              className="w-6 h-6 mr-2 text-yellow-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            Pending Invites
                          </h2>
                          <div className="space-y-4">
                            <div className="bg-neutral-700/30 rounded-xl p-4 hover:bg-neutral-700/40 transition-all">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <p className="text-white font-medium">
                                    alex.smith@example.com
                                  </p>
                                  <p className="text-sm text-neutral-400 flex items-center">
                                    <svg
                                      className="w-4 h-4 mr-1"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    Sent 2 days ago
                                  </p>
                                </div>
                                <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-lg text-sm">
                                  Pending
                                </div>
                              </div>
                              <div className="flex space-x-3">
                                <button className="flex-1 bg-primary-500/20 text-primary-400 px-4 py-2 rounded-lg hover:bg-primary-500/30 transition-all flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                  </svg>
                                  Resend
                                </button>
                                <button className="flex-1 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </svg>
                    </div>
                    Create Project
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <button className="w-full group flex items-center justify-between text-left text-neutral-400 hover:text-white px-4 py-3 rounded-xl hover:bg-neutral-700/50 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink-400/10 flex items-center justify-center group-hover:bg-pink-400/20 transition-colors">
                      <svg
                        className="w-4 h-4 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    Write Update
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
                    <h3 className="text-white font-medium">
                      Mobile App Release
                    </h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
