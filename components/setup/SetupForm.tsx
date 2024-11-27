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
    let formErrors: {
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
    const debounce = setTimeout(() => {
      if (url) {
        fetchUrl();
      }
    }, 2000);
    return () => clearTimeout(debounce);
  }, [url]);

  useEffect(() => {
    getData();
  }, []);

  async function fetchUrl() {
    setIsLoadingUrl(true);
    try {
      const response = await axios.post("/api/setup/urlCheck", { url });
      const message = response.data.message;

      if (message === "Username is Available") {
        setAvailability("available");
      } else if (message === "Username is Taken") {
        setAvailability("taken");
      } else {
        setAvailability("error");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setAvailability("error");
    } finally {
      setIsLoadingUrl(false);
    }
  }
  async function getData() {
    try {
      const response = await axios.get("/api/setup");
      const data = response.data;
      if (response.status === 200) {
        setSpaceName(data.spaceName);
        setTeamSize(data.teamSize);
        setPrimaryGoal(data.primaryGoal);
        setUrl(data.url);
        setTimeout(() => {
          router.push("/Dashboard/Workspace");
        }, 2000);
        console.log("Space created successfully:", response.data.newSpace);
        setErrors({});
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      setErrors({});
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    console.log({ spaceName, url, primaryGoal, teamSize });

    try {
      const response = await axios.post("/api/setup", {
        spaceName,
        url,
        primaryGoal,
        teamSize,
      });

      router.push("/Dashboard/Workspace");
      console.log("Space created successfully:", response.data.newSpace);
      setErrors({});
    } catch (error: any) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        setErrors({
          general:
            error.response.data.error ||
            "Something went wrong. Please try again.",
        });
      } else if (error.request) {
        console.error("Error request:", error.request);
        setErrors({
          general: "No response from the server. Please try again later.",
        });
      } else {
        console.error("Error:", error.message);
        setErrors({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-lg md:p-8 p-4 mt-20">
      <h1 className="text-4xl font-bold text-gray-700 text-center mb-6">
        Name Your Space
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="spaceName"
            className="block text-sm font-semibold text-gray-600 mb-2"
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
            className={`block w-full px-4 py-2 border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.spaceName ? "border-red-500" : ""
            }`}
          />
          {errors.spaceName && (
            <p className="text-sm text-red-500">{errors.spaceName}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="url"
            className="block text-sm font-semibold text-gray-600 mb-2"
          >
            URL
          </label>
          <p className="text-xs text-gray-500 mb-1">
            6 to 20 characters, letters and numbers only{" "}
          </p>{" "}
          <br />
          {isLoadingUrl && (
            <span className="px-2 py-2 m-4  bg-gray-100 text-xs text-gray-500">
              Checking...
            </span>
          )}
          {availability === "available" && (
            <span className="px-2 py-2 mt-4  bg-green-100 text-xs text-green-500">
              This URL is Available
            </span>
          )}
          {availability === "taken" && (
            <span className="px-2 py-2 m-4  bg-red-100 text-xs text-red-500">
              This URL is Taken
            </span>
          )}
          {availability === "error" && (
            <span className="px-2 py-2 bg-yellow-100 text-xs text-yellow-500">
              Error checking URL
            </span>
          )}
          <div className="flex items-center border rounded-md shadow-sm">
            <span className="px-4 py-2 bg-gray-100 text-sm text-gray-500 border-r border-gray-300">
              www.VirtualSync.com/
            </span>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value.toLowerCase())}
              placeholder="your-url-here"
              required
              className={`flex-1 px-4 py-2 border-0 focus:ring-blue-500 focus:outline-none text-sm ${
                errors.url ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.url && <p className="text-sm text-red-500">{errors.url}</p>}
        </div>

        <div className="mb-6">
          <label
            htmlFor="team-size"
            className="block text-sm font-semibold text-gray-600 mb-2"
          >
            How many members are in your team?
          </label>
          <select
            id="team-size"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            required
            className="block w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none transition duration-150 ease-in-out"
          >
            <option value="" disabled>
              Select team size
            </option>
            <option value="1-10">1-10 members</option>
            <option value="11-25">11-25 members</option>
            <option value="26-50">26-50 members</option>
            <option value="51-100">51-100 members</option>
            <option value="100+">100+ members</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="primary-goal"
            className="block text-sm font-semibold text-gray-600 mb-2"
          >
            What is your primary goal for using VirtualSync?
          </label>
          <select
            id="primary-goal"
            value={primaryGoal}
            onChange={(e) => setPrimaryGoal(e.target.value)}
            required
            className="block w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none transition duration-150 ease-in-out"
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

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-primary-500 text-white font-bold rounded-md hover:bg-primary-600 border-primary-600 border-2 transition duration-200"
        >
          {isLoading ? "Creating Space..." : "Create Space"}
        </button>
      </form>
    </div>
  );
}
