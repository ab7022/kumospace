"use client";
import { signIn } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { MessageSquare, Video, Calendar, Users } from "lucide-react";

const SignInComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <main className="w-full flex bg-gray-900 text-gray-100">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-center md:flex md:w-1/2">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-2 font-medium text-blue-100 backdrop-blur-sm">
            Welcome to VirtualSync
          </span>
          
          <h2 className="my-6 text-4xl font-bold leading-tight">
            Elevate Your Remote Team's Experience
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Video className="mx-auto mb-2 h-8 w-8 text-blue-300" />
              <p className="text-sm">Crystal-clear Video Calls</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <MessageSquare className="mx-auto mb-2 h-8 w-8 text-blue-300" />
              <p className="text-sm">Real-time Team Chat</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Calendar className="mx-auto mb-2 h-8 w-8 text-blue-300" />
              <p className="text-sm">Task Management</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Users className="mx-auto mb-2 h-8 w-8 text-blue-300" />
              <p className="text-sm">Team Collaboration</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center h-screen p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              Virtual<span className="text-blue-500">Sync</span>
            </h3>
            <p className="mt-2 text-gray-400">Sign in to your workspace</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button
              className="flex items-center justify-center gap-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 hover:bg-gray-700 transition duration-150"
              onClick={() => signIn("google", { callbackUrl: "/setup" })}
            >
              <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none">
                <path d="M47.532 24.553c0-1.632-.132-3.272-.414-4.877H24.48v9.242h12.963c-.502 2.98-2.229 5.617-4.797 7.293v6.076h7.734c4.542-4.18 7.152-10.353 7.152-17.734z" fill="#4285F4"/>
                <path d="M24.48 48c6.473 0 11.932-2.125 15.909-5.813l-7.734-6.076c-2.152 1.464-4.928 2.293-8.175 2.293-6.261 0-11.561-4.224-13.475-9.903H3.273v6.182C7.347 42.881 15.646 48 24.48 48z" fill="#34A853"/>
                <path d="M11.005 28.5c-.482-1.441-.482-3 0-4.441V17.88H3.273C1.189 22.897 1.189 29.103 3.273 34.12l7.732-5.62z" fill="#FBBC05"/>
                <path d="M24.48 9.596c3.422-.054 6.729 1.24 9.207 3.597l6.852-6.852C36.195 2.346 30.437.073 24.48 0 15.646 0 7.347 5.119 3.273 12.881l7.732 5.619c1.914-5.679 7.214-9.903 13.475-9.903z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <button
              className="flex items-center justify-center gap-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 hover:bg-gray-700 transition duration-150"
              onClick={() => signIn("github", { callbackUrl: "/setup" })}
            >
              <svg className="h-5 w-5" viewBox="0 0 48 48" fill="currentColor">
                <path d="M24 2.5c-12.15 0-22 9.85-22 22 0 9.72 6.3 17.98 15.04 20.9 1.1.2 1.5-.48 1.5-1.06v-3.66c-6.12 1.33-7.42-2.95-7.42-2.95-.92-2.35-2.24-2.97-2.24-2.97-1.83-1.25.14-1.22.14-1.22 2.02.14 3.08 2.07 3.08 2.07 1.8 3.07 4.7 2.18 5.84 1.67.18-1.3.7-2.18 1.27-2.68-4.44-.5-9.1-2.22-9.1-9.88 0-2.18.78-3.97 2.06-5.37-.2-.5-.9-2.54.2-5.3 0 0 1.68-.54 5.5 2.05 1.6-.44 3.3-.66 5-.67 1.7.01 3.4.23 5 .67 3.82-2.59 5.5-2.05 5.5-2.05 1.1 2.76.4 4.8.2 5.3 1.28 1.4 2.06 3.19 2.06 5.37 0 7.68-4.67 9.37-9.13 9.86.72.62 1.36 1.84 1.36 3.71v5.5c0 .58.4 1.27 1.52 1.06C39.7 42.48 46 34.22 46 24.5c0-12.15-9.85-22-22-22z"/>
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>

          <div className="relative">
            <span className="block w-full h-px bg-gray-700"></span>
            <p className="inline-block w-fit text-sm bg-gray-900 px-2 absolute -top-2 inset-x-0 mx-auto text-gray-400">
              Or continue with email
            </p>
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2 bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-lg outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-lg outline-none transition-colors"
              />
            </div>

            <p className="text-sm text-gray-400">
              New to VirtualSync?{" "}
              <Link href="/auth/signup" className="text-blue-500 hover:text-blue-400">
                Create an account
              </Link>
            </p>

           

            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg duration-150"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignInComponent;