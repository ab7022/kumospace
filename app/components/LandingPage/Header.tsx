import React from "react";

export default function Header() {
  return (
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
  );
}
