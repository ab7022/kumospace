export default function Home() {
  return (
    <>
      <header
        className="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap before:absolute before:inset-0 before:mx-2 before:max-w-[66rem] before:rounded-[10px] py-4 before:bg-neutral-800/30 before:backdrop-blur-md md:flex-nowrap md:justify-start before:lg:mx-auto"
        data-element-type="header"
      >
        <nav
          className="relative mx-2 w-full max-w-[66rem] py-2.5 pe-2 ps-5 md:flex md:items-center md:justify-between md:py-0 lg:mx-auto"
          data-element-type="nav"
        >
          <div
            className="flex items-center justify-between"
            data-element-type="Container"
          >
            <a
              className="flex-none text-2xl font-bold text-white"
              href="/"
              data-element-type="Text"
            >
              VirtualSync
            </a>

            <div className="md:hidden" data-element-type="Container">
              <button
                type="button"
                className="hs-collapse-toggle flex size-8 items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold text-white"
                data-hs-collapse="#navbar-collapse"
                data-element-type="Button"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse"
            className="hidden grow basis-full overflow-hidden transition-all duration-300 md:block md:basis-auto"
            data-element-type="Container"
          >
            <div
              className="mt-5 flex flex-col gap-5 md:mt-0 md:flex-row md:items-center md:justify-end md:ps-5"
              data-element-type="Container"
            >
              <a
                className="text-base text-white hover:text-primary-300"
                href="#solutions"
                data-element-type="Text"
              >
                Solutions
              </a>
              <a
                className="text-base text-white hover:text-primary-300"
                href="#features"
                data-element-type="Text"
              >
                Features
              </a>
              <a
                className="text-base text-white hover:text-primary-300"
                href="#pricing"
                data-element-type="Text"
              >
                Pricing
              </a>
              <a
                className="text-base text-white hover:text-primary-300"
                href="#contact"
                data-element-type="Text"
              >
                Contact
              </a>
              <div className="flex gap-3" data-element-type="Container">
                <a
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-500 bg-transparent px-6 py-2 text-base font-medium text-white transition hover:bg-white hover:text-black"
                  href="/login"
                  data-element-type="Text"
                >
                  Sign in
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-2 text-sm font-medium text-black transition hover:bg-primary-400"
                  href="/signup"
                  data-element-type="Text"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="relative -mt-[92px] bg-neutral-900 pt-[92px]"
        data-element-type="Container"
      >
        <div
          className="mx-auto max-w-6xl px-4 pb-24 pt-24 md:px-6 lg:px-8 element-highlight"
          data-element-type="Container"
        >
          <div className="text-center" data-element-type="Container">
            <h1
              className="mb-6 text-4xl text-center font-bold text-white md:text-6xl lg:text-7xl max-w-5xl"
              data-element-type="Heading"
            >
              Transform Your Remote Team's 
              Productivity Today
            </h1>
            <p
              className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400"
              data-element-type="Text"
            >
              Say goodbye to disconnected remote work. Our virtual workspace
              brings your team together with real-time collaboration,
              transparent workflows, and seamless communication - just like
              being in the same office.
            </p>
            <div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              data-element-type="Container"
            >
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-base font-medium text-black transition hover:bg-primary-400"
                data-element-type="Text"
              >
                Start 14-Day Free Trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-3 text-base font-medium text-white transition hover:bg-white hover:text-black"
                data-element-type="Text"
              >
                See It In Action
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </a>
            </div>

            <div
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
              data-element-type="Container"
            >
              <div
                className="rounded-xl bg-neutral-800/30 p-6 text-left"
                data-element-type="Container"
              >
                <svg
                  className="mb-4 h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <h3
                  className="mb-2 text-xl font-bold text-white"
                  data-element-type="Heading"
                >
                  Real-Time Visibility
                </h3>
                <p className="text-neutral-400" data-element-type="Text">
                  See what everyone is working on in real-time. No more status
                  meetings needed.
                </p>
              </div>

              <div
                className="rounded-xl bg-neutral-800/30 p-6 text-left"
                data-element-type="Container"
              >
                <svg
                  className="mb-4 h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <h3
                  className="mb-2 text-xl font-bold text-white"
                  data-element-type="Heading"
                >
                  Seamless Collaboration
                </h3>
                <p className="text-neutral-400" data-element-type="Text">
                  Interactive spaces for meetings, brainstorming, and casual
                  conversations.
                </p>
              </div>

              <div
                className="rounded-xl bg-neutral-800/30 p-6 text-left"
                data-element-type="Container"
              >
                <svg
                  className="mb-4 h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <h3
                  className="mb-2 text-xl font-bold text-white"
                  data-element-type="Heading"
                >
                  Secure &amp; Private
                </h3>
                <p className="text-neutral-400" data-element-type="Text">
                  Enterprise-grade security with end-to-end encryption for all
                  communications.
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-16 overflow-hidden rounded-xl border border-neutral-800"
            data-element-type="Container"
          >
            <div
              className="aspect-video w-full bg-neutral-800"
              data-element-type="Container"
            >
              <video className="w-full" autoPlay muted loop>
                <source
                  src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/videos/chat-dialog-opt.mp4?tx=w_responsive:fallback-max-width_1080;fallback-max-width-mobile_720"
                  type="video/mp4"
                />{" "}
              </video>
            </div>
          </div>
        </div>
      </div>

      <div id="root" data-element-type="Container" className="">
        <div
          className="bg-neutral-800 py-32 relative overflow-hidden"
          data-element-type="Container"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
            data-element-type="Container"
          >
            <div className="text-center" data-element-type="Container">
              <h2
                className="text-5xl font-extrabold text-white sm:text-6xl bg-gradient-to-r from-primary-300 via-primary-500 to-primary-600 bg-clip-text text-transparent drop-shadow-lg"
                data-element-type="Heading"
              >
                Transform Your Remote Workspace Today
              </h2>
              <p
                className="mx-auto mt-6 max-w-2xl text-xl text-neutral-300 leading-relaxed"
                data-element-type="Text"
              >
                Revolutionize your remote work culture with real-time
                collaboration and transparency. See your team working together,
                just like in a physical office.
              </p>
            </div>

            <div className="mt-24" data-element-type="Container">
              <div
                className="border-b border-neutral-700/50 backdrop-blur-sm"
                data-element-type="Container"
              >
                <nav
                  className="-mb-px flex justify-center space-x-12"
                  data-element-type="nav"
                >
                  <button
                    className="border-primary-500 text-primary-400 group relative border-b-2 px-3 pb-6 text-base font-medium hover:text-primary-300 transition-all duration-300 ease-in-out"
                    data-element-type="Button"
                  >
                    <div
                      className="flex items-center space-x-3"
                      data-element-type="Container"
                    >
                      <img
                        src="https://content.kumospace.com/hubfs/landing-pages/rebrand/icons/optimized/center-icon.svg"
                        alt="Chat"
                        className="h-6 w-6 transform group-hover:scale-110 transition-transform"
                        data-element-type="Image"
                      />
                      <span data-element-type="Text">Live Collaboration</span>
                    </div>
                  </button>
                  <button
                    className="text-neutral-400 hover:text-primary-400 group relative px-3 pb-6 text-base font-medium transition-all duration-300 ease-in-out"
                    data-element-type="Button"
                  >
                    <div
                      className="flex items-center space-x-3"
                      data-element-type="Container"
                    >
                      <img
                        src="https://content.kumospace.com/hubfs/landing-pages/rebrand/icons/optimized/screenshare-icon.svg"
                        alt="Video"
                        className="h-6 w-6 transform group-hover:scale-110 transition-transform"
                        data-element-type="Image"
                      />
                      <span data-element-type="Text">Virtual Meetings</span>
                    </div>
                  </button>
                  <button
                    className="text-neutral-400 hover:text-primary-400 group relative px-3 pb-6 text-base font-medium transition-all duration-300 ease-in-out"
                    data-element-type="Button"
                  >
                    <div
                      className="flex items-center space-x-3"
                      data-element-type="Container"
                    >
                      <img
                        src="https://content.kumospace.com/hubfs/landing-pages/rebrand/icons/optimized/calendar-icon.svg"
                        alt="Calendar"
                        className="h-6 w-6 transform group-hover:scale-110 transition-transform"
                        data-element-type="Image"
                      />
                      <span data-element-type="Text">Team Presence</span>
                    </div>
                  </button>
                </nav>
              </div>

              <div
                className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
                data-element-type="Container"
              >
                <div
                  className="flex flex-col justify-center space-y-8"
                  data-element-type="Container"
                >
                  <h3
                    className="text-4xl font-bold text-white leading-tight"
                    data-element-type="Heading"
                  >
                    Real-time Team Visibility
                  </h3>
                  <p
                    className="text-xl text-neutral-300 leading-relaxed"
                    data-element-type="Text"
                  >
                    See who's working on what in real-time. Our platform enables
                    seamless collaboration and transparency, making remote work
                    feel more natural than ever.
                  </p>
                  <ul className="space-y-6" data-element-type="ul">
                    <li
                      className="flex items-center space-x-4 group"
                      data-element-type="Text"
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg group-hover:scale-110 transition-transform"
                        data-element-type="Text"
                      >
                        <svg
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span
                        className="text-lg text-neutral-300 group-hover:text-white transition-colors"
                        data-element-type="Text"
                      >
                        Live activity status and presence indicators
                      </span>
                    </li>
                    <li
                      className="flex items-center space-x-4 group"
                      data-element-type="Text"
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg group-hover:scale-110 transition-transform"
                        data-element-type="Text"
                      >
                        <svg
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span
                        className="text-lg text-neutral-300 group-hover:text-white transition-colors"
                        data-element-type="Text"
                      >
                        Instant team communication channels
                      </span>
                    </li>
                    <li
                      className="flex items-center space-x-4 group"
                      data-element-type="Text"
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg group-hover:scale-110 transition-transform"
                        data-element-type="Text"
                      >
                        <svg
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span
                        className="text-lg text-neutral-300 group-hover:text-white transition-colors"
                        data-element-type="Text"
                      >
                        Virtual office spaces and rooms
                      </span>
                    </li>
                    <li
                      className="flex items-center space-x-4 group"
                      data-element-type="Text"
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg group-hover:scale-110 transition-transform"
                        data-element-type="Text"
                      >
                        <svg
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span
                        className="text-lg text-neutral-300 group-hover:text-white transition-colors"
                        data-element-type="Text"
                      >
                        Project tracking and team analytics
                      </span>
                    </li>
                  </ul>
                  <div className="pt-6" data-element-type="Container">
                    <button
                      className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
                      data-element-type="Button"
                    >
                      Start Free Trial
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="relative group" data-element-type="Container">
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"
                    data-element-type="Container"
                  ></div>
                  <div
                    className="relative rounded-2xl border border-neutral-700/50 bg-neutral-900/90 shadow-2xl backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-300"
                    data-element-type="Container"
                  >
                    <video
                      className="w-full rounded-2xl flex justify-center items-center align-center"
                      loop
                      autoPlay
                      muted
                    >
                      <source
                        src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/videos/chat-dialog-opt.mp4?tx=w_responsive:fallback-max-width_1080;fallback-max-width-mobile_720"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="root">
        <section className="bg-neutral-900 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Transform Your Remote Workspace
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
                Solve the biggest challenges of remote work with our
                comprehensive virtual office solution.
              </p>
            </div>

            <div className="mt-20 grid gap-16">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <div className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                    <div className="aspect-video rounded-lg bg-neutral-700 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 lg:pl-8">
                  <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-primary-500">
                    <span className="text-sm font-semibold">
                      Real-time Collaboration
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    See Your Team in Action
                  </h3>
                  <p className="mt-4 text-lg text-neutral-300">
                    Experience true transparency with our virtual office. See
                    who's working on what, join conversations naturally, and
                    maintain team cohesion just like in a physical office.
                  </p>
                </div>
              </div>

              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="lg:pr-8">
                  <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-primary-500">
                    <span className="text-sm font-semibold">
                      Seamless Communication
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Break Down Communication Barriers
                  </h3>
                  <p className="mt-4 text-lg text-neutral-300">
                    No more endless email chains or fragmented conversations.
                    Our platform enables instant communication, file sharing,
                    and collaborative workspaces all in one place.
                  </p>
                </div>
                <div>
                  <div className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                    <div className="aspect-video rounded-lg bg-neutral-700 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <div className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                    <div className="aspect-video rounded-lg bg-neutral-700 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 lg:pl-8">
                  <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-primary-500">
                    <span className="text-sm font-semibold">
                      Productivity Tools
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Boost Team Performance
                  </h3>
                  <p className="mt-4 text-lg text-neutral-300">
                    Built-in project management tools, virtual whiteboards, and
                    screen sharing capabilities ensure your team stays
                    productive and aligned on goals.
                  </p>
                </div>
              </div>

              <div className="mt-16 grid gap-8 lg:grid-cols-3">
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Virtual Meeting Rooms
                  </h4>
                  <p className="mt-2 text-neutral-300">
                    Dedicated spaces for team meetings, client presentations,
                    and casual conversations.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Document Collaboration
                  </h4>
                  <p className="mt-2 text-neutral-300">
                    Real-time document editing and version control for seamless
                    teamwork.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Team Analytics
                  </h4>
                  <p className="mt-2 text-neutral-300">
                    Insights into team engagement and productivity to optimize
                    workflow.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white">
                      Solving Remote Work Challenges
                    </h3>
                    <p className="mt-2 text-lg text-neutral-400">
                      Experience a virtual office that addresses the key
                      challenges of remote work
                    </p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 rounded-lg border border-neutral-700 bg-neutral-900">
                      <h4 className="text-white font-semibold">Isolation</h4>
                      <p className="text-neutral-400 mt-2">
                        Create a sense of belonging with virtual spaces that
                        encourage natural interactions
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-neutral-700 bg-neutral-900">
                      <h4 className="text-white font-semibold">
                        Communication Barriers
                      </h4>
                      <p className="text-neutral-400 mt-2">
                        Enable seamless communication with integrated chat,
                        voice, and video tools
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-neutral-700 bg-neutral-900">
                      <h4 className="text-white font-semibold">
                        Collaboration Hurdles
                      </h4>
                      <p className="text-neutral-400 mt-2">
                        Foster collaboration with shared workspaces and
                        real-time project tracking
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-base font-medium text-black transition hover:bg-primary-400"
                  >
                    Transform Your Remote Work Today
                  </a>
                  <p className="mt-4 text-sm text-neutral-400">
                    Start with a 14-day free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="root">
        <section className="relative bg-neutral-800  py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white sm:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Transform Your Team's Productivity
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
                Revolutionize your remote work experience with our immersive
                virtual office - where collaboration meets innovation.
              </p>
            </div>

            <div className="mt-20">
              <div className="relative rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <video className="w-full rounded-xl" autoPlay muted loop>
                    <source
                      src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/videos/explainer-video-op.mp4?tx=w_responsive:fallback-max-width_970;fallback-max-width-mobile_720"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">
                    <svg
                      className="h-12 w-12 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Reduce Overhead Costs
                  </h3>
                  <p className="mt-2 text-neutral-400">
                    Cut down on physical office expenses while maintaining team
                    productivity and collaboration.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">
                    <svg
                      className="h-12 w-12 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Boost Team Engagement
                  </h3>
                  <p className="mt-2 text-neutral-400">
                    Foster spontaneous interactions and strengthen team bonds in
                    our immersive virtual environment.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">
                    <svg
                      className="h-12 w-12 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Maximize Productivity
                  </h3>
                  <p className="mt-2 text-neutral-400">
                    Enable seamless collaboration and communication to drive
                    business growth.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-6 mt-8">
                <div className="mb-4">
                  <svg
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Real-time Collaboration
                </h3>
                <p className="mt-2 text-neutral-400">
                  See who's working on what in real-time, just like in a
                  physical office. No more isolation or communication gaps.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-6 mt-2">
                <div className="mb-4">
                  <svg
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Instant Communication
                </h3>
                <p className="mt-2 text-neutral-400">
                  Jump into conversations naturally with spatial audio and quick
                  video chats. No more scheduling required.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-6 mt-2">
                <div className="mb-4">
                  <svg
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Team Presence
                </h3>
                <p className="mt-2 text-neutral-400">
                  Always know who's available and what they're working on with
                  real-time presence indicators.
                </p>
              </div>
              <div className="mt-20">
                <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white">
                      Track Your Success
                    </h3>
                    <p className="mt-2 text-lg text-neutral-400">
                      Monitor team performance and workspace utilization with
                      comprehensive analytics.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-700">
                    <img
                      src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/rebrand/other-images/home.analytics.screenshot.2396x1384.png"
                      alt="Analytics Dashboard"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white">
                      Work From Anywhere
                    </h3>
                    <p className="mt-2 text-lg text-neutral-400">
                      Empower your team with flexible access across all devices
                      and platforms.
                    </p>
                  </div>
                  <img
                    src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/rebrand/other-images/optimized/home.download.virtual-office-app.904x635.png"
                    alt="Devices Preview"
                    className="mx-auto w-full max-w-4xl"
                  />
                </div>
              </div>

              <div className="mt-20 text-center">
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Free Trial
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </a>
                <p className="mt-4 text-neutral-400">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="root">
        <section className="bg-neutral-900  py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Transform Your Workspace Today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
                Elevate your team's productivity with our cutting-edge virtual
                workspace solutions.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="text-xl font-semibold text-white">
                  Real-time Collaboration
                </h3>
                <p className="mt-2 text-neutral-300">
                  See what everyone is working on in real-time, just like in a
                  physical office. No more isolation or communication gaps.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="text-xl font-semibold text-white">
                  Team Transparency
                </h3>
                <p className="mt-2 text-neutral-300">
                  Foster trust and accountability with complete visibility of
                  team activities and projects.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="text-xl font-semibold text-white">
                  Seamless Communication
                </h3>
                <p className="mt-2 text-neutral-300">
                  Break down communication barriers with instant voice, video,
                  and chat capabilities.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="relative inline-flex rounded-full bg-neutral-800/50 backdrop-blur-sm p-1">
                <button className="relative rounded-full px-6 py-2 text-sm font-medium text-white">
                  Monthly
                </button>
                <button className="relative rounded-full bg-gradient-to-r from-primary-500 to-primary-400 px-6 py-2 text-sm font-medium text-black">
                  Annual
                </button>
              </div>
              <p className="mt-2 text-sm text-primary-400">
                Save 20% with annual billing
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <div>
                  <h3 className="text-lg font-medium text-white">Starter</h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    Perfect for small teams getting started
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$12</span>
                    <span className="text-neutral-400">/user/month</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full rounded-full border border-primary-500 bg-transparent px-6 py-3 text-center font-medium text-primary-500 transition hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-400 hover:text-black"
                  >
                    Start Free Trial
                  </a>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Up to 10 team members
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Basic virtual office features
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Video & voice calls
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Chat & messaging
                  </li>
                </ul>
              </div>

              <div className="relative rounded-2xl border border-primary-500 bg-gradient-to-b from-neutral-900/90 to-neutral-800/90 backdrop-blur-sm p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/30">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary-500 to-primary-400 px-4 py-1 text-sm font-medium text-black">
                  Best Value
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Professional
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    For ambitious teams ready to grow
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$29</span>
                    <span className="text-neutral-400">/user/month</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 px-6 py-3 text-center font-medium text-black transition hover:from-primary-400 hover:to-primary-300"
                  >
                    Start Free Trial
                  </a>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited team members
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Advanced virtual office features
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Custom office layouts
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Analytics & reporting
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Priority support
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <div>
                  <h3 className="text-lg font-medium text-white">Enterprise</h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    Customized solutions for large teams
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">
                      Custom
                    </span>
                    <span className="text-neutral-400">/pricing</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full rounded-full border border-primary-500 bg-transparent px-6 py-3 text-center font-medium text-primary-500 transition hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-400 hover:text-black"
                  >
                    Contact Sales
                  </a>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Everything in Professional
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Dedicated success manager
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      className="mr-3 h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    24/7 premium support
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">
                  Why Choose Our Virtual Workspace?
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                  We solve the biggest challenges of remote work:
                </p>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-lg bg-neutral-800 p-6">
                  <h4 className="text-lg font-semibold text-white">
                    Combat Remote Work Isolation
                  </h4>
                  <p className="mt-2 text-neutral-300">
                    Our virtual workspace creates a sense of presence and
                    community, making remote teams feel connected and engaged.
                  </p>
                </div>
                <div className="rounded-lg bg-neutral-800 p-6">
                  <h4 className="text-lg font-semibold text-white">
                    Enhance Team Visibility
                  </h4>
                  <p className="mt-2 text-neutral-300">
                    See who's available, what they're working on, and
                    collaborate spontaneously - just like in a physical office.
                  </p>
                </div>
                <div className="rounded-lg bg-neutral-800 p-6">
                  <h4 className="text-lg font-semibold text-white">
                    Boost Productivity
                  </h4>
                  <p className="mt-2 text-neutral-300">
                    All your collaboration tools in one place, reducing context
                    switching and increasing focus time.
                  </p>
                </div>
                <div className="rounded-lg bg-neutral-800 p-6">
                  <h4 className="text-lg font-semibold text-white">
                    Build Strong Culture
                  </h4>
                  <p className="mt-2 text-neutral-300">
                    Foster team bonding and informal interactions that are
                    crucial for building company culture remotely.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="mt-16 text-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-base font-medium text-black transition hover:bg-primary-400"
                >
                  Start Your Virtual Office Now
                  <svg
                    className="ml-2 h-5 w-5"
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
                </a>
                <p className="mt-4 text-sm text-neutral-400">
                  No credit card required • Free 14-day trial
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="root">
        <section className="bg-neutral-800 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Transform Your Remote Workspace
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
                Boost productivity and team collaboration with our all-in-one
                virtual workspace solution designed for modern remote companies.
              </p>
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/10">
                  <svg
                    className="h-6 w-6 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  Real-time Team Visibility
                </h3>
                <p className="mt-4 text-neutral-400">
                  See who's working on what in real-time, fostering transparency
                  and collaboration.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Live activity status
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Project progress tracking
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Team availability dashboard
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/10">
                  <svg
                    className="h-6 w-6 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  Complete Virtual Office
                </h3>
                <p className="mt-4 text-neutral-400">
                  Everything your remote team needs in one unified platform.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Virtual meeting rooms
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Instant communication
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Document collaboration
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/10">
                  <svg
                    className="h-6 w-6 text-primary-500"
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
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  Remote Work Solutions
                </h3>
                <p className="mt-4 text-neutral-400">
                  Overcome common remote work challenges with our innovative
                  features.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Time zone management
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Async collaboration tools
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Team building activities
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Transform Your Remote Workspace?
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
                  Join thousands of successful remote companies who've boosted
                  their team's productivity with our platform.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-base font-medium text-black transition hover:bg-primary-400"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-6 py-3 text-base font-medium text-white transition hover:bg-neutral-800"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="root">
        <div className=" bg-neutral-900">
          <div className="mx-auto max-w-5xl px-4 py-10 lg:py-20 xl:px-0">
            <div className="mb-10 max-w-3xl lg:mb-14">
              <h2 className="text-2xl font-semibold text-white md:text-4xl md:leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-neutral-300">
                Discover how our virtual workspace can transform your team's
                productivity.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="divide-y divide-neutral-700">
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-white hover:text-neutral-300">
                    Why do leading companies choose virtual offices?
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Industry giants like McKinsey, Microsoft, and PwC predict
                    that 70%+ of future work will be remote. Companies using our
                    virtual office solution report up to 40% increase in team
                    productivity and 65% better employee satisfaction. Don't let
                    your competition get ahead!
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-lg font-semibold text-white hover:text-neutral-300">
                    How quickly can we get started?
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Your entire team can be up and running in less than 15
                    minutes! Our streamlined setup process means zero downtime.
                    Plus, our dedicated onboarding specialists will guide you
                    through every step - completely free of charge.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-lg font-semibold text-white hover:text-neutral-300">
                    What makes our platform stand out?
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Our cutting-edge features include HD video conferencing,
                    instant team messaging, intuitive screen sharing, and
                    revolutionary spatial audio that makes remote conversations
                    feel natural. Teams report feeling "just like being in the
                    same room."
                  </p>
                </div>
              </div>

              <div className="divide-y divide-neutral-700">
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-white hover:text-neutral-300">
                    How will this benefit my bottom line?
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Our clients typically see 30% reduction in operational
                    costs, 25% decrease in employee turnover, and significant
                    savings on real estate expenses. Plus, access to global
                    talent without geographical limitations means building your
                    dream team without compromise.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-lg font-semibold text-white hover:text-neutral-300">
                    Can we make it our own?
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Absolutely! Create a virtual office that truly reflects your
                    brand. Custom layouts, branded themes, and dedicated spaces
                    for different departments. Our clients love how they can
                    design everything from meeting rooms to casual break areas.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-lg font-semibold text-white hover:text-neutral-300">
                    What kind of ROI can we expect?
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Companies using our platform report an average ROI of 300%
                    within the first year. This comes from improved
                    productivity, reduced overhead costs, and enhanced team
                    collaboration. Plus, our flexible pricing means you only pay
                    for what you use.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="mb-4 text-neutral-300">
                Ready to transform your workplace?
              </p>
              <a
                className="group inline-flex items-center gap-x-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-800 hover:from-yellow-400 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                href="#"
              >
                Schedule a Demo Now
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="root">
        <div className=" bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 py-10 lg:py-20 xl:px-0">
            <div className="mb-10 lg:mb-14 text-center">
              <h2 className="text-3xl font-semibold text-white text-center md:text-4xl md:leading-tight">
                Contact Us
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:gap-x-16">
              <div className="mb-10 border-b border-neutral-700/50 pb-10 md:order-2 md:mb-0 md:border-b-0 md:pb-0">
                <form>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-name"
                        className="peer block w-full rounded-lg border-transparent bg-neutral-800/60 backdrop-blur-sm p-4 text-sm text-white placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-1 focus:ring-yellow-400/50 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Name"
                      />
                      <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-yellow-400 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="contact-email"
                        className="peer block w-full rounded-lg border-transparent bg-neutral-800/60 backdrop-blur-sm p-4 text-sm text-white placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-1 focus:ring-yellow-400/50 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Email"
                      />
                      <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-yellow-400 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                        Business Email
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="contact-company"
                        className="peer block w-full rounded-lg border-transparent bg-neutral-800/60 backdrop-blur-sm p-4 text-sm text-white placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-1 focus:ring-yellow-400/50 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Company"
                      />
                      <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-yellow-400 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                        Company Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-company"
                        className="peer block w-full rounded-lg border-transparent bg-neutral-800/60 backdrop-blur-sm p-4 text-sm text-white placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-1 focus:ring-yellow-400/50 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Company"
                      />
                      <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-yellow-400 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                        Company Size
                      </label>
                    </div>

                    <div className="relative">
                      <textarea
                        id="contact-message"
                        rows={4}
                        className="peer block w-full rounded-lg border-transparent bg-neutral-800/60 backdrop-blur-sm p-4 text-sm text-white placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-1 focus:ring-yellow-400/50 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Message"
                      ></textarea>
                      <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-yellow-400 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                        Tell us about your workspace needs
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-x-2 rounded-full bg-[#ff0] px-6 py-3 text-sm font-semibold text-neutral-800 hover:bg-[#ff0]/90 focus:outline-none focus:ring-2 focus:ring-[#ff0] focus:ring-offset-2 focus:ring-offset-neutral-900"
                    >
                      Get Started Now
                      <svg
                        className="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="space-y-6">
                <div className="flex gap-x-5 bg-neutral-800/40 p-4 rounded-lg backdrop-blur-sm hover:bg-neutral-800/60 transition-all duration-200">
                  <svg
                    className="size-6 shrink-0 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-white">24/7 Support</h3>
                    <p className="mt-1 text-sm text-neutral-300">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 bg-neutral-800/40 p-4 rounded-lg backdrop-blur-sm hover:bg-neutral-800/60 transition-all duration-200">
                  <svg
                    className="size-6 shrink-0 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <p className="mt-1 text-sm text-neutral-300">
                      security@virtualoffice.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 bg-neutral-800/40 p-4 rounded-lg backdrop-blur-sm hover:bg-neutral-800/60 transition-all duration-200">
                  <svg
                    className="size-6 shrink-0 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-white">VirtualSync</h3>
                    <p className="mt-1 text-sm text-neutral-300">
                      Bengaluru 560032
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-700/50 pt-8">
                  <h3 className="mb-4 font-semibold text-white">
                    Follow Our Journey
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="root">
        <footer className="relative overflow-hidden border-t border-neutral-700  bg-gradient-to-b from-neutral-900 to-neutral-950">
         
            <div className=" mx-20 py-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-neutral-400">
                  © 2024 Virtual Office. Transforming remote work for
                  enterprises worldwide.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
 
        </footer>
      </div>
    </>
  );
}
