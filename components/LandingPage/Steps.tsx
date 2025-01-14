import React from "react";

const Steps = () => {
  return (
    <div id="root">
      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Transform Your Remote Workspace
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
              Solve the biggest challenges of remote work with our comprehensive
              virtual office solution.
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                  who is working on what, join conversations naturally, and
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
                  No more endless email chains or fragmented conversations. Our
                  platform enables instant communication, file sharing, and
                  collaborative workspaces all in one place.
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                  screen sharing capabilities ensure your team stays productive
                  and aligned on goals.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                <h4 className="text-xl font-bold text-white">
                  Virtual Meeting Rooms
                </h4>
                <p className="mt-2 text-neutral-300">
                  Dedicated spaces for team meetings, client presentations, and
                  casual conversations.
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
                <h4 className="text-xl font-bold text-white">Team Analytics</h4>
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
                      Enable seamless communication with integrated chat, voice,
                      and video tools
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-neutral-700 bg-neutral-900">
                    <h4 className="text-white font-semibold">
                      Collaboration Hurdles
                    </h4>
                    <p className="text-neutral-400 mt-2">
                      Foster collaboration with shared workspaces and real-time
                      project tracking
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
  );
};

export default Steps;
