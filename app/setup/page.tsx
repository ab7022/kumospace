import React from "react";
import Header from "@/components/LandingPage/Header";
import { getUser } from "@/components/Sessions";
import Link from "next/link";
import JoiningRequest from "@/components/setup/JoiningRequest";

export default async function Setup() {
  const session = await getUser();

  return (
    
    <div className="bg-[#121212] min-h-screen flex flex-col items-center">
      <Header session={session} />
      <div className="w-full max-w-7xl mx-auto mt-20 p-8 rounded-lg shadow-lg bg-[#1E1E1E]">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#FFEA00] mb-4">
            Welcome to VirtualSync
          </h1>
          <p className="text-lg text-[#E0E0E0]">
            Choose to create a new workspace or join an existing one to get
            started.
          </p>
        </div>

        <JoiningRequest />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform cursor-pointer bg-[#2A2A2A]">
            <div className="flex items-center justify-center mb-4">
              <span className="text-[#FFEA00] text-5xl ">➕</span>
            </div>
            <h2 className="text-xl font-semibold text-[#FFEA00] text-center mb-2">
              Create a New Space
            </h2>
            <p className="text-sm text-[#E0E0E0] text-center mb-4">
              Build your own virtual workspace for seamless team collaboration.
            </p>
            <Link href="/setup/create-space">
              <button className="w-full py-3 px-6 bg-[#FFEA00] text-black font-semibold rounded-md hover:bg-yellow-400 transition-colors">
                Start Creating!
              </button>
            </Link>
          </div>

          <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform cursor-pointer bg-[#2A2A2A]">
            <div className="flex items-center justify-center mb-4">
              <span className="text-[#FFEA00] text-5xl ">🔗</span>
            </div>
            <h2 className="text-xl font-semibold text-[#FFEA00] text-center mb-2">
              Join an Existing Space
            </h2>
            <p className="text-sm text-[#E0E0E0] text-center mb-4">
              Enter your team’s space code and email to connect with your
              workspace.
            </p>
            <Link href="/setup/join-space">
              <button className="w-full py-3 px-6 bg-[#FFEA00] text-black font-semibold rounded-md hover:bg-yellow-400 transition-colors">
                Join Now!
              </button>
            </Link>
          </div>
          <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform cursor-pointer bg-[#2A2A2A]">
            <div className="flex items-center justify-center mb-4">
              <span className="text-[#FFEA00] text-5xl ">🔗</span>
            </div>
            <h2 className="text-xl font-semibold text-[#FFEA00] text-center mb-2">
              Open Existing Space
            </h2>
            <p className="text-sm text-[#E0E0E0] text-center mb-4">
              Enter your team’s space code and email to connect with your
              workspace.
            </p>
            <Link href="/Dashboard/Workspace">
              <button className="w-full py-3 px-6 bg-[#FFEA00] text-black font-semibold rounded-md hover:bg-yellow-400 transition-colors">
                Join Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
