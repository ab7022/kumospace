import React from "react";

const Faq = () => {
  return (
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
                  Industry giants like McKinsey, Microsoft, and PwC predict that
                  70%+ of future work will be remote. Companies using our
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
                  Our clients typically see 30% reduction in operational costs,
                  25% decrease in employee turnover, and significant savings on
                  real estate expenses. Plus, access to global talent without
                  geographical limitations means building your dream team
                  without compromise.
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
                  within the first year. This comes from improved productivity,
                  reduced overhead costs, and enhanced team collaboration. Plus,
                  our flexible pricing means you only pay for what you use.
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
