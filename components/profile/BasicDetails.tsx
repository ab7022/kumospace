"use client";
import {
  UserIcon,
  CameraIcon,
  IdentificationIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import axios from "axios";

const BasicDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    teamName: "",
    designation: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });
  const url = "/api/dashboard/profile/basicDetails";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setFormData(response.data);
        }
      } catch {
        setMessage({
          type: "error",
          text: "Failed to load profile details. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setMessage({ type: "success", text: response.data.message });
      } else {
        alert(`Error: ${response.data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      setMessage({
        type: "error",
        text:
          (axios.isAxiosError(error) && error.response?.data?.message) ||
          "An unexpected error occurred. Please try again.",
      });
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again later.");
    }
  };

  return (
    <div className=" bg-neutral-950 p-4 md:p-8">
      <section className="max-w-6xl mx-auto bg-neutral-900/50 backdrop-blur-lg rounded-xl border border-neutral-800 shadow-2xl ">
        {/* Header Section */}
        <div className="px-8 border-b border-neutral-800/50 md:-mt-8">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-2 tracking-tight">
                Profile
              </h1>
              <p className="text-neutral-400 text-lg">
                Welcome back! Here's your profile details
              </p>
            </div>
            {!loading && (
              <Button
                onClickFunction={handleSubmit}
           
              >
                Save Changes
              </Button>
            )}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="p-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/20 p-3 rounded-lg">
                <UserIcon className="h-6 w-6 text-primary-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Basic Details</h2>
            </div>
          </div>

          {loading ? (
            <div className="animate-pulse space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-28 h-28 rounded-full bg-neutral-800" />
                <div className="space-y-4 flex-1">
                  <div className="h-4 bg-neutral-800 rounded w-1/4" />
                  <div className="h-4 bg-neutral-800 rounded w-1/3" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-neutral-800 rounded-lg" />
                ))}
              </div>
            </div>
          ) : (
            <>
              {message.text && (
                <div
                  className={`mb-6 p-4 rounded-lg text-white flex items-center gap-2 ${
                    message.type === "success"
                      ? "bg-green-500/20 border border-green-500/50"
                      : "bg-red-500/20 border border-red-500/50"
                  }`}
                >
                  {message.type === "success" ? (
                    <div className="bg-green-500 rounded-full p-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="bg-red-500 rounded-full p-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                  {message.text}
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-neutral-700/50 group-hover:border-primary-500 transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                      <UserIcon className="w-12 h-12 text-neutral-500" />
                    </div>
                  </div>
                  <button
                    className="absolute bottom-0 right-0 bg-primary-500 hover:bg-primary-400 text-white p-2 rounded-full shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                    title="Update Profile Picture"
                  >
                    <CameraIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    icon={<IdentificationIcon className="h-5 w-5 text-neutral-500" />}
                    className="bg-neutral-800/50 border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20"
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    icon={<IdentificationIcon className="h-5 w-5 text-neutral-500" />}
                    className="bg-neutral-800/50 border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20"
                  />
                  <Input
                    placeholder="Team Name"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    icon={<BriefcaseIcon className="h-5 w-5 text-neutral-500" />}
                    className="bg-neutral-800/50 border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20"
                  />
                  <Input
                    placeholder="Role"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    icon={<BriefcaseIcon className="h-5 w-5 text-neutral-500" />}
                    className="bg-neutral-800/50 border-neutral-700 focus:border-primary-500 focus:ring-primary-500/20"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BasicDetails;