import React from "react";
import {
  Users2,
  MessageSquare,
  BarChart3,
  Video,
  Heart,
  Zap,
  ArrowRight,
  Clock,
  Target,
  Lightbulb,
  Check,
} from "lucide-react";

export default function Steps() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-950 to-neutral-900 py-32 overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_10%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-6 py-2 text-base font-medium text-primary-500">
            How It Works
          </span>
          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Your Complete Virtual Office
            <span className="block text-primary-500">
              Built for Modern Teams
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-400">
            Experience a revolutionary approach to remote work that combines
            seamless collaboration, powerful productivity tools, and natural
            team interactions.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="mt-24 space-y-24">
          {/* Section 1 */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-primary-500">
                <Video className="mr-2 h-5 w-5" />
                <span className="text-sm font-semibold">
                  Real-time Collaboration
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Connect Like You're In The Same Room
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-neutral-400">
                  Experience natural team interactions with HD video calls,
                  instant screen sharing, and spatial audio that makes remote
                  conversations feel real.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Crystal-clear HD video conferencing",
                  "One-click screen sharing",
                  "Track all your tasks",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-neutral-300"
                  >
                    <div className="mr-3 rounded-full bg-primary-500/20 p-1">
                      <Check className="h-4 w-4 text-primary-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-primary-500/50">
                <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-3xl group-hover:bg-primary-500/20" />
                <div className="relative aspect-video rounded-lg bg-neutral-800 p-2">
                  <video
                    className="h-full w-full rounded-lg object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/landing-pages/videos/chat-dialog-opt.mp4?tx=w_responsive:fallback-max-width_1080;fallback-max-width-mobile_720"
                      type="video/mp4"
                    />{" "}
                  </video>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-black/80 p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-white">
                        Live Collaboration
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users2 className="h-4 w-4 text-neutral-400" />
                      <span className="text-sm text-neutral-400">
                        12 team members
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-6 lg:grid-cols-2">
                {[
                  {
                    icon: <MessageSquare className="h-6 w-6" />,
                    title: "Team Chat",
                    description:
                      "Organized conversations in channels and threads",
                  },
                  {
                    icon: <Users2 className="h-6 w-6" />,
                    title: "Virtual Spaces",
                    description:
                      "Dedicated rooms for different projects and teams",
                  },
                  {
                    icon: <BarChart3 className="h-6 w-6" />,
                    title: "Analytics",
                    description: "Track team engagement and productivity",
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Quick Actions",
                    description: "Streamlined workflows and integrations",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-primary-500/50"
                  >
                    <div className="mb-4 inline-block rounded-lg bg-primary-500/10 p-2 text-primary-500">
                      {feature.icon}
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-primary-500">
                <Lightbulb className="mr-2 h-5 w-5" />
                <span className="text-sm font-semibold">Smart Features</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Powerful Tools for Modern Teams
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-neutral-400">
                  Everything you need to manage projects, track progress, and
                  keep your team aligned – all in one unified platform.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white">
                Solving Remote Work Challenges
              </h3>
              <p className="mt-4 text-xl text-neutral-400">
                Turn remote work challenges into advantages
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Heart />,
                  title: "Combat Isolation",
                  description:
                    "Create meaningful connections with virtual water cooler spaces and team-building activities",
                },
                {
                  icon: <Target />,
                  title: "Stay Focused",
                  description:
                    "Keep teams aligned with clear goals, progress tracking, and regular check-ins",
                },
                {
                  icon: <Clock />,
                  title: "Time Management",
                  description:
                    "Balance flexibility with productivity using smart scheduling and time tracking",
                },
              ].map((challenge, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-neutral-800 bg-neutral-900/80 p-8 transition-all hover:border-primary-500/50"
                >
                  <div className="mb-6 inline-block rounded-lg bg-primary-500/10 p-3 text-primary-500">
                    {challenge.icon}
                  </div>
                  <h4 className="mb-4 text-xl font-bold text-white">
                    {challenge.title}
                  </h4>
                  <p className="text-neutral-400">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="/setup"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-primary-400"
            >
              Create your workspace now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
