"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { signOut } from "next-auth/react";

export default function Header({ session }: { session: any }) {
  const [username, setUsername] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session?.user?.email) {
      setUsername(session.user.email);
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [session]);

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuVisible]);

  return (
    <header className="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap before:absolute before:inset-0 before:mx-2 before:max-w-[66rem] before:rounded-[10px] py-4 before:bg-neutral-800/30 before:backdrop-blur-md md:flex-nowrap md:justify-start before:lg:mx-auto">
      <nav className="relative mx-2 w-full max-w-[66rem] py-2.5 pe-2 ps-5 md:flex md:items-center md:justify-between md:py-0 lg:mx-auto">
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-between">
          <Link className="flex-none text-2xl font-bold text-white" href="/">
            VirtualSync
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full bg-neutral-800/50 backdrop-blur-sm text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              {menuVisible ? (
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex md:items-center md:justify-end md:gap-8 md:ps-5">
         

          {/* Profile Section - Desktop */}
          <div className="relative flex gap-3">
            {session ? (
              <>
                <Link
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-500 bg-transparent px-6 py-2 text-base font-medium text-white transition hover:bg-primary-500  hover:text-black"
                  href="/Dashboard/Workspace"
                >
                  My Workspace
                </Link>
                <div className="relative" ref={dropdownRef}>
                  <Image
                    src={session.user.image || "/default-profile.png"}
                    alt="Profile"
                    className="cursor-pointer rounded-full border-2 border-white"
                    width={40}
                    height={40}
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                  />
                  {dropdownVisible && (
                    <div className="absolute right-0 mt-4 w-64 rounded-lg bg-neutral-800/80 backdrop-blur-lg shadow-lg">
                      <div className="flex items-center gap-3 border-b border-neutral-700 p-4">
                        <Image
                          src={session.user.image || "/default-profile.png"}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white"
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {session?.user?.name}
                          </p>
                          <p className="text-xs text-gray-400">{username}</p>
                        </div>
                      </div>
                      <div className="p-2">
                        <button
                          className="flex w-full items-center gap-3 rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-red-600"
                          onClick={() => signOut()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5 text-gray-300"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m5.25-3h-8.25m0 0l3-3m-3 3l3 3"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-500 bg-transparent px-6 py-2 text-base font-medium text-white transition hover:bg-white hover:text-black"
                  href="/auth/signin"
                >
                  Sign in
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-primary-400"
                  href="/setup"
                >
                  Get Your Workspace
                </Link>
              </div>
            )}
          </div>
        </div>

        {menuVisible && (
          <div className="fixed inset-2 top-[100px] z-50 bg-neutral-800/30 backdrop-blur-md md:hidden">
            <div className="flex h-full flex-col px-4 pb-6">
              {/* Navigation Links */}
              

              {/* Action Buttons */}
              <div className="mt-auto flex flex-col gap-4">
                {session ? (
                  <>
                    {/* User Info */}
                    <div className="flex items-center gap-3 border-t border-neutral-600/30 pt-4">
                      <Image
                        src={session.user.image || "/default-profile.png"}
                        alt="Profile"
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-white"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {session.user.name || "John Doe"}
                        </p>
                        <p className="text-xs text-gray-400">{username}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <Link
                      className="inline-flex items-center justify-center rounded-full border-2 border-gray-500 bg-neutral-800/50 backdrop-blur-sm px-6 py-3 text-base font-medium text-white transition hover:bg-white hover:text-black"
                      href="/Dashboard/Workspace"
                      onClick={() => setMenuVisible(false)}
                    >
                      My Workspace
                    </Link>
                    <button
                      className="flex w-full items-center justify-center gap-3 rounded-full bg-red-500/80 backdrop-blur-sm px-6 py-3 text-base font-medium text-white transition-colors hover:bg-red-600"
                      onClick={() => {
                        signOut();
                        setMenuVisible(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m5.25-3h-8.25m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="inline-flex items-center justify-center rounded-full border-2 border-gray-500 bg-neutral-800/50 backdrop-blur-sm px-6 py-3 text-base font-medium text-white transition hover:bg-white hover:text-black"
                      href="/auth/signin"
                      onClick={() => setMenuVisible(false)}
                    >
                      Sign in
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center rounded-full bg-primary-500/90 backdrop-blur-sm px-6 py-3 text-base font-medium text-black transition hover:bg-primary-400"
                      href="/signup"
                      onClick={() => setMenuVisible(false)}
                    >
                      Start Free Trial
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
