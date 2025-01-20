import React from "react";
import { 
  ArrowRight, 
  Video, 
  Mic, 
  ScreenShare, 
  MessageSquare, 
  Users2, 
  ClipboardList, 
  Play,
  ChartLine,
  MessagesSquare
} from "lucide-react";

export default function Productivity() {
  return (
    <div className="relative min-h-screen -mt-20 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 pt-[92px]">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 md:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 backdrop-blur-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span className="text-sm text-neutral-400">Your Complete Virtual Office Solution</span>
          </div>
          
          <h1 className="mb-6 bg-gradient-to-r from-white via-primary-200 to-primary-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl lg:text-8xl">
            Everything Your Team Needs,
            <br />
            <span className="text-white">All In One Place</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-neutral-400 leading-relaxed">
            Video calls, voice chats, screen sharing, messaging, task management – we have got it all. 
            Transform your remote workspace into a powerhouse of collaboration and productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/setup"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-primary-400 hover:scale-105"
            >
              Try For Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-neutral-700 hover:border-neutral-600 backdrop-blur-sm"
            >
              See Features
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Communication Features Grid */}
          <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                icon: <Video className="h-6 w-6" />,
                title: "Crystal Clear Video Calls",
                description: "HD video conferencing for up to 100 participants"
              },
              {
                icon: <Mic className="h-6 w-6" />,
                title: "Voice Channels",
                description: "Drop in and out of voice conversations naturally"
              },
              {
                icon: <ScreenShare className="h-6 w-6" />,
                title: "Screen Sharing",
                description: "Share your screen with one click"
              },
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Direct Messages",
                description: "Private conversations with end-to-end encryption"
              },
              {
                icon: <MessagesSquare className="h-6 w-6" />,
                title: "Group Chats",
                description: "Organized team discussions in channels"
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                title: "Task Management",
                description: "Assign and track tasks effortlessly"
              },
              {
                icon: <ChartLine className="h-6 w-6" />,
                title: "Progress Tracking",
                description: "Real-time updates on team productivity"
              },
              {
                icon: <Users2 className="h-6 w-6" />,
                title: "Team Spaces",
                description: "Dedicated rooms for different projects"
              }
            ].map((feature) => (
              <div key={feature.title} className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-primary-500/50 hover:bg-neutral-800/50">
                <div className="mb-4 inline-block rounded-lg bg-primary-500/10 p-2 text-primary-500">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>

       \
          {/* Demo Video Section */}
          <div className="mt-24 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
            <div className="aspect-video w-full">
              <video 
                className="w-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source
                  src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/videos/chat-dialog-opt.mp4?tx=w_responsive:fallback-max-width_1080;fallback-max-width-mobile_720"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}