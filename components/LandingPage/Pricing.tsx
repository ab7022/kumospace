import React from "react";

const Pricing = () => {
  return (
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
                Foster trust and accountability with complete visibility of team
                activities and projects.
              </p>
            </div>
            <div className="rounded-lg bg-neutral-800 p-6">
              <h3 className="text-xl font-semibold text-white">
                Seamless Communication
              </h3>
              <p className="mt-2 text-neutral-300">
                Break down communication barriers with instant voice, video, and
                chat capabilities.
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                <h3 className="text-lg font-medium text-white">Professional</h3>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                  <span className="text-4xl font-bold text-white">Custom</span>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                  See who's available, what they're working on, and collaborate
                  spontaneously - just like in a physical office.
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
                  Foster team bonding and informal interactions that are crucial
                  for building company culture remotely.
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
  );
};

export default Pricing;
