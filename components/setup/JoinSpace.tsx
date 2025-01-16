"use client";
import React, { useState } from "react";
import axios from "axios";
export default function JoinSpace() {
  const [spaceCode, setSpaceCode] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    spaceCode: "",
    email: "",
    general: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ spaceCode: "", email: "", general: "" });

    if (!spaceCode) {
      setErrors((prev) => ({ ...prev, spaceCode: "Space code is required." }));
      return;
    }
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required." }));
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("/api/setup/joinSpace", {
        spaceCode,
        email,
      });

      if (response.status === 200) {
        setErrors({
          spaceCode: "",
          email: "",
          general: "Sent! Please wait until someone accepts your request!",
        });
      }
    } catch (err: any) {
      const errorResponse =
        err.response?.data?.error || "Something went wrong.";
      setErrors((prev) => ({ ...prev, general: errorResponse }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-1/2">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,128L30,138.7C60,149,120,171,180,170.7C240,171,300,149,360,138.7C420,128,480,128,540,138.7C600,149,660,171,720,170.7C780,171,840,149,900,144C960,139,1020,149,1080,160C1140,171,1200,181,1260,186.7C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
        </svg>
      </div>

      <div className=" w-full rounded-lg p-8 mt-20 bg-[#2A2A2A] shadow-lg z-10 transform ">
        <h1 className="text-4xl font-bold text-[#FFEA00] text-center mb-6">
          Join a Space
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="spaceCode"
              className="block text-sm font-semibold text-[#E0E0E0] mb-2"
            >
              Space Code
            </label>
            <input
              type="text"
              id="spaceCode"
              value={spaceCode}
              onChange={(e) => setSpaceCode(e.target.value.toUpperCase())}
              placeholder="Enter Space Code"
              required
              className={`block w-full px-4 py-3 border rounded-md bg-[#3D3D3D] text-[#E0E0E0] ${
                errors.spaceCode ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.spaceCode && (
              <p className="text-sm text-red-500">{errors.spaceCode}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#E0E0E0] mb-2"
            >
              Admin Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Admin Email Id"
              required
              className={`block w-full px-4 py-3 border rounded-md bg-[#3D3D3D] text-[#E0E0E0] ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 bg-[#FFEA00] text-black font-bold rounded-md hover:bg-yellow-400 transition-transform ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {isLoading ? "Joining..." : "Join Space"}
          </button>
        </form>
      </div>
    </div>
  );
}
