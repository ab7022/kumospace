import React from "react";
import Header from "@/components/LandingPage/Header";
import { getUser } from "@/components/Sessions";
import Link from "next/link";
import JoiningRequest from "@/components/setup/JoiningRequest";
import { Plus, Users, Briefcase, ArrowRight } from "lucide-react";

export default async function Setup() {
  const session = await getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header session={session} />
      
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block rounded-full bg-yellow-500/10 px-4 py-1.5">
            <span className="text-sm font-medium text-yellow-400">
              Welcome to VirtualSync
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Get Started with Your <span className="text-yellow-400">Workspace</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Create a new collaborative space or join an existing one to enhance your team's productivity
          </p>
        </div>

        <JoiningRequest />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Create Space Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm border border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                <Plus className="h-6 w-6 text-yellow-400" />
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-3">
                Create New Space
              </h2>
              
              <p className="text-gray-400 mb-6">
                Build your own virtual workspace and invite your team for seamless collaboration.
              </p>
              
              <Link href="/setup/create-space">
                <button className="flex items-center justify-between w-full px-4 py-2.5 text-black font-medium bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors group">
                  <span>Create Workspace</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

          {/* Join Space Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm border border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-3">
                Join Existing Space
              </h2>
              
              <p className="text-gray-400 mb-6">
                Connect with your team by entering your workspace code and credentials.
              </p>
              
              <Link href="/setup/join-space">
                <button className="flex items-center justify-between w-full px-4 py-2.5 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors group">
                  <span>Join Workspace</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

          {/* Open Space Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm border border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <Briefcase className="h-6 w-6 text-purple-400" />
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-3">
                Open Existing Space
              </h2>
              
              <p className="text-gray-400 mb-6">
                Resume your work by accessing your previously created workspace.
              </p>
              
              <Link href="/Dashboard/Workspace">
                <button className="flex items-center justify-between w-full px-4 py-2.5 text-white font-medium bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors group">
                  <span>Open Workspace</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}