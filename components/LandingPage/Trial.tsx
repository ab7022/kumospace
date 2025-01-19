import React from "react";

const Trial = () => {
  return (
    <div id="root">
      <section className="bg-neutral-800 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       

          <div className="mt-20">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trial;
