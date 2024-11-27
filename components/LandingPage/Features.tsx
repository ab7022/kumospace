import React from "react";

const Features = () => {
  return (
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
                      strokeLinecap="round"
                      strokelinejoin="round"
                      strokewidth="2"
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
                      strokeLinecap="round"
                      strokelinejoin="round"
                      strokewidth="2"
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
                      strokeLinecap="round"
                      strokelinejoin="round"
                      strokewidth="2"
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
                    strokeLinecap="round"
                    strokelinejoin="round"
                    strokewidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Real-time Collaboration
              </h3>
              <p className="mt-2 text-neutral-400">
                See who's working on what in real-time, just like in a physical
                office. No more isolation or communication gaps.
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
                    strokeLinecap="round"
                    strokelinejoin="round"
                    strokewidth="2"
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
                    strokeLinecap="round"
                    strokelinejoin="round"
                    strokewidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokelinejoin="round"
                    strokewidth="2"
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
                    strokeLinecap="round"
                    strokelinejoin="round"
                    strokewidth="2"
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
  );
};

export default Features;
