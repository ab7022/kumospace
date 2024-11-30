import React from "react";

const Productivity = () => {
  return (
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
            Transform Your Remote Team's Productivity Today
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400"
            data-element-type="Text"
          >
            Say goodbye to disconnected remote work. Our virtual workspace
            brings your team together with real-time collaboration, transparent
            workflows, and seamless communication - just like being in the same
            office.
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
  );
};

export default Productivity;
