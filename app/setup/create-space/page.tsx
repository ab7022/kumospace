"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SetupForm() {
  const router = useRouter();
  const [spaceName, setSpaceName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [url, setUrl] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUrl, setIsLoadingUrl] = useState(false);
  const [availability, setAvailability] = useState("");
  const [errors, setErrors] = useState<{
    spaceName?: string;
    url?: string;
    teamSize?: string;
    primaryGoal?: string;
    general?: string;
  }>({});

  const validateForm = () => {
    const formErrors: {
      spaceName?: string;
      url?: string;
      teamSize?: string;
      primaryGoal?: string;
    } = {};
    if (!spaceName) formErrors.spaceName = "Space name is required!";
    if (!url) formErrors.url = "URL is required!";
    if (!teamSize) formErrors.teamSize = "Please select your team size!";
    if (!primaryGoal) formErrors.primaryGoal = "Please select a primary goal!";
    return formErrors;
  };
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await axios.get("/api/setup/createSpace");
      const data = response.data;
      if (response.status === 200) {
        setSpaceName(data.spaceName);
        setTeamSize(data.teamSize);
        setPrimaryGoal(data.primaryGoal);
        setUrl(data.url);
        router.push("/Dashboard/Workspace");
        setErrors({});
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      setErrors({});
    }
  }
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (url) {
        fetchUrl();
      }
    }, 2000);
    return () => clearTimeout(debounce);
  }, [url]);

  async function fetchUrl() {
    setIsLoadingUrl(true);
    try {
      const response = await axios.post("/api/setup/urlCheck", { url });
      const message = response.data.message;
      setAvailability(
        message === "Username is Available" ? "available" : "taken"
      );
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setAvailability("error");
    } finally {
      setIsLoadingUrl(false);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    try {
      await axios.post("/api/setup/createSpace", {
        spaceName,
        url,
        primaryGoal,
        teamSize,
      });
      router.push("/Dashboard/Workspace");
      setErrors({});
    } catch (error: any) {
      console.error("Error:", error.message);
      setErrors({ general: "An unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1E1E1E] min-h-screen flex flex-col items-center py-10 relative overflow-hidden">
      {" "}
      <div className="absolute inset-0 opacity-20">
        {/* Background SVG or Image */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,128L30,138.7C60,149,120,171,180,170.7C240,171,300,149,360,138.7C420,128,480,128,540,138.7C600,149,660,171,720,170.7C780,171,840,149,900,144C960,139,1020,149,1080,160C1140,171,1200,181,1260,186.7C1320,192,1380,192,1410,192L1440,192L1440 320L1410 320C1380 320 1320 320 1260 320C1200 320 1140 320 1080 320C1020 320 960 320 900 320C840 320 780 320 720 320C660 320 600 320 540 320C480 320 420 320 360 320C300 320 240 320 180 320C120 320 60 320 30 320H0Z"></path>
        </svg>
      </div>
      <div className="w-full max-w-2xl rounded-lg p-8 mt-10 bg-[#2A2A2A] shadow-lg z-50">
        <h1 className="text-4xl font-bold text-[#FFEA00] text-center mb-6">
          Name Your Space
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Space Name */}
          <div className="mb-6">
            <label
              htmlFor="spaceName"
              className="block text-sm font-semibold text-[#E0E0E0] mb-2"
            >
              Space Name
            </label>
            <input
              type="text"
              id="spaceName"
              value={spaceName}
              onChange={(e) => setSpaceName(e.target.value)}
              placeholder="Enter your Space name"
              required
              className={`block w-full px-4 py-3 border rounded-md border-gray-600 bg-[#3D3D3D] text-[#E0E0E0] focus:ring-yellow-500 focus:border-yellow-500 ${
                errors.spaceName ? "border-red-500" : ""
              }`}
            />
            {errors.spaceName && (
              <p className="text-sm text-red-500">{errors.spaceName}</p>
            )}
          </div>

          {/* URL */}
          <div className="mb-6">
            <label
              htmlFor="url"
              className="block text-sm font-semibold text-[#E0E0E0] mb-2"
            >
              URL
            </label>
            <p className="text-xs text-gray-400 mb-1">
              6 to 20 characters, letters and numbers only
            </p>
            {isLoadingUrl && (
              <span className="px-2 py-2 m-4 bg-gray-700 text-xs text-gray-300">
                Checking...
              </span>
            )}
            {availability === "available" && (
              <span className="px-2 py-2 mt-4 bg-green-600 text-xs text-white">
                This URL is Available
              </span>
            )}
            {availability === "taken" && (
              <span className="px-2 py-2 m-4 bg-red-600 text-xs text-white">
                This URL is Taken
              </span>
            )}
            {availability === "error" && (
              <span className="px-2 py-2 bg-yellow-600 text-xs text-white">
                Error checking URL
              </span>
            )}
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="px-4 py-2 bg-gray-700 text-sm text-gray-300 border-r border-gray-600">
                www.VirtualSync.com/
              </span>
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value.toLowerCase())}
                placeholder="your-url-here"
                required
                className={`flex-1 px-4 py-3 border-none bg-[#3D3D3D] focus:ring-yellow-500 focus:outline-none ${
                  errors.url ? "border-red-500" : ""
                }`}
              />
            </div>
            {errors.url && <p className="text-sm text-red-500">{errors.url}</p>}
          </div>

          {/* Team Size */}
          <div className="mb-6">
            <label
              htmlFor="team-size"
              className="block text-sm font-semibold text-[#E0E0E0] mb-2"
            >
              How many members are in your team?
            </label>
            <select
              id="team-size"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              required
              className="block w-full px-4 py-3 bg-[#3D3D3D] border rounded-md border-gray-600 text-[#E0E0E0] focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="" disabled>
                Select team size
              </option>
              <option value="1–10">1–10 members</option>
              <option value="11–25">11–25 members</option>
              <option value="26–50">26–50 members</option>
              <option value="51–100">51–100 members</option>
              <option value="100+">100+ members</option>
            </select>
          </div>

          {/* Primary Goal */}
          <div className="mb-6">
            <label
              htmlFor="primary-goal"
              className="block text-sm font-semibold text-[#E0E0E0] mb-2"
            >
              What is your primary goal for using VirtualSync?
            </label>
            <select
              id="primary-goal"
              value={primaryGoal}
              onChange={(e) => setPrimaryGoal(e.target.value)}
              required
              className="block w-full px-4 py-3 bg-[#3D3D3D] border rounded-md border-gray-600 text-[#E0E0E0] focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="" disabled>
                Select your primary goal
              </option>
              <option value="team-collaboration">Team collaboration</option>
              <option value="virtual-events">Hosting virtual events</option>
              <option value="education">Education and training</option>
              <option value="social-meetups">Social meetups</option>
              <option value="other">Other</option>
            </select>
          </div>

          {errors.general && (
            <p className="text-red-500 text-center">{errors.general}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 bg-[#FFEA00] text-black font-bold rounded-md hover:bg-yellow-400 transition duration-200 ${
              isLoading ? "opacity-50 cursor-notallowed" : ""
            }`}
          >
            {isLoading ? "Creating Space..." : "Create Space"}
          </button>
        </form>
      </div>
    </div>
  );
}
