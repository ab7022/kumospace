"use client"
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Menu, X, LogOut } from 'lucide-react';

interface HeaderProps {
  session: any;
}

export default function Header({ session }: HeaderProps) {
  const [username, setUsername] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      setUsername(session.user.email);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
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
    <header 
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div 
          className={`relative rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-4'
          }`}
        >
          <nav className="relative mx-auto flex items-center justify-between px-4">
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-xl font-bold text-white transition-colors"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text  text-2xl text-transparent">
                VirtualSync
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white md:hidden"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              {menuVisible ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {session ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/Dashboard/Workspace"
                    className="rounded-full border border-neutral-700 bg-neutral-800/50 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-700 hover:text-white"
                  >
                    My Workspace
                  </Link>
                  
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownVisible(!dropdownVisible)}
                      className="group relative overflow-hidden rounded-full border-2 border-neutral-700 transition-all hover:border-yellow-400/50"
                    >
                      <Image
                        src={session.user.image || "/default-profile.png"}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </button>
                    
                    {dropdownVisible && (
                      <div className="absolute right-0 mt-4 w-72 origin-top-right rounded-xl border border-neutral-800 bg-neutral-900/95 p-1 shadow-lg backdrop-blur-sm transition-all">
                        <div className="border-b border-neutral-800 p-4">
                          <div className="flex items-center gap-3">
                            <Image
                              src={session.user.image || "/default-profile.png"}
                              alt="Profile"
                              width={48}
                              height={48}
                              className="rounded-full border-2 border-neutral-700"
                            />
                            <div className="overflow-hidden">
                              <p className="truncate text-sm font-medium text-white">
                                {session?.user?.name}
                              </p>
                              <p className="truncate text-sm text-neutral-400">
                                {username}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <button
                            onClick={() => signOut()}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-400 transition-colors hover:bg-red-500/10 hover:text-red-500"
                          >
                            <LogOut className="h-4 w-4" />
                            Sign out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href="/signin"
                    className="rounded-full px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/setup"
                    className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-yellow-300"
                  >
                    Get Your Workspace
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            {menuVisible && (
              <div className="absolute inset-x-0 top-full mt-4 rounded-xl border border-neutral-800 bg-neutral-900/95 p-4 backdrop-blur-sm md:hidden">
                {session ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
                      <Image
                        src={session.user.image || "/default-profile.png"}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-neutral-700"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {session?.user?.name}
                        </p>
                        <p className="text-sm text-neutral-400">{username}</p>
                      </div>
                    </div>
                    <Link
                      href="/Dashboard/Workspace"
                      className="block rounded-lg bg-neutral-800 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                      onClick={() => setMenuVisible(false)}
                    >
                      My Workspace
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setMenuVisible(false);
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/20"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/signin"
                      className="block rounded-lg bg-neutral-800 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                      onClick={() => setMenuVisible(false)}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/setup"
                      className="block rounded-lg bg-yellow-400 px-4 py-2 text-center text-sm font-medium text-neutral-900 transition-colors hover:bg-yellow-300"
                      onClick={() => setMenuVisible(false)}
                    >
                      Get Your Workspace
                    </Link>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}