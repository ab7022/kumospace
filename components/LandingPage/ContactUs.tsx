"use client"
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    message: ''
  });

  const handleChange = (e:any) => {
    setFormState({
      ...formState,
      [e.target.id.replace('contact-', '')]: e.target.value
    });
  };

  const formSubmit = async()=>{
    console.log(formState)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Transform your remote workspace with VirtualSync
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/30 p-6 transition-all duration-300 hover:bg-neutral-800/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10">
                  <Phone className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">24/7 Support</h3>
                  <a href="tel:+918217003676" className="mt-1 text-neutral-300 hover:text-yellow-400">
                    +91 82170 03676
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/30 p-6 transition-all duration-300 hover:bg-neutral-800/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10">
                  <Mail className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                  <a href="mailto:bayees1@gmail.com" className="mt-1 text-neutral-300 hover:text-yellow-400">
                    bayees1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/30 p-6 transition-all duration-300 hover:bg-neutral-800/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">VirtualSync</h3>
                  <p className="mt-1 text-neutral-300">
                    RT Nagar, Bengaluru, 560032
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-neutral-800/30 p-6">
              <h3 className="mb-4 font-semibold text-white">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a
                  href="https://x.com/abdul__bayees"
                  target="_blank"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/50 transition-all hover:bg-yellow-400/20"
                >
                  <Twitter className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-yellow-400" />
                </a>
                <a
                  href="https://linkedin.com/in/abdulbayees"
                  target="_blank"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/50 transition-all hover:bg-yellow-400/20"
                >
                  <Linkedin className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-yellow-400" />
                </a>
                <a
                  href="https://github.com/ab7022"
                  target="_blank"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/50 transition-all hover:bg-yellow-400/20"
                >
                  <Github className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-yellow-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-neutral-800/30 p-8">
            <form className="space-y-6" onSubmit={formSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-name"
                    value={formState.name}
                    onChange={handleChange}
                    className="peer w-full rounded-lg border-transparent bg-neutral-800/60 p-4 text-sm text-white placeholder-transparent backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Name"
                  />
                  <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="contact-email"
                    value={formState.email}
                    onChange={handleChange}
                    className="peer w-full rounded-lg border-transparent bg-neutral-800/60 p-4 text-sm text-white placeholder-transparent backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Email"
                  />
                  <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                    Business Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="contact-company"
                    value={formState.company}
                    onChange={handleChange}
                    className="peer w-full rounded-lg border-transparent bg-neutral-800/60 p-4 text-sm text-white placeholder-transparent backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Company"
                  />
                  <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                    Company Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="contact-size"
                    value={formState.size}
                    onChange={handleChange}
                    className="peer w-full rounded-lg border-transparent bg-neutral-800/60 p-4 text-sm text-white placeholder-transparent backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Size"
                  />
                  <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                    Company Size
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="contact-message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="peer w-full rounded-lg border-transparent bg-neutral-800/60 p-4 text-sm text-white placeholder-transparent backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Message"
                  ></textarea>
                  <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                    Tell us about your workspace needs
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Get Started Now
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;