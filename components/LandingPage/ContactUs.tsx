import React from "react";

const ContactUs = () => {
  return (
    <div id="root">
      <div className=" bg-neutral-900">
      
        <div className="mx-auto max-w-5xl px-4 py-10 lg:py-20 xl:px-0">
          {/* <div className="">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">
                Ready to Transform Your Remote Workspace?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
             {"   Join thousands of successful remote companies who've boosted their team's productivity with our platform."}
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
          </div> */}
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-white">24/7 Support</h3>
                    <a className="mt-1 text-sm text-neutral-300" href="tel:+918217003676">
                    +91 82170 03676
                    </a>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                    <a className="mt-1 text-sm text-neutral-300" href="mailto:bayees1@gmail.com">
                    bayees1@gmail.com
                    </a>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h3 className="font-semibold text-white">VirtualSync</h3>
                  <p className="mt-1 text-sm text-neutral-300">
                    RT Nagar, Bengaluru, 560032
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
                    href="https://x.com/abdul__bayees" target="_blank"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/abdulbayees" target="_blank"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/ab7022" target="_blank"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
  );
};

export default ContactUs;
