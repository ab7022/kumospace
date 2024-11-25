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
    role: "",
  });
  const [loading, setLoading] = useState(true); // Track loading state

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
      } catch (error) {
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
    <div>
      <section
        id="profile_header"
        className="p-6 rounded-lg shadow-sm w-full element-highlight"
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Profile
          </h1>
          <p className="text-neutral-400 text-lg">
            Welcome back! Here's your profile details
          </p>
        </div>

        <div className="flex flex-col gap-6 bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <UserIcon className="h-8 w-8 text-white rounded-full border p-1" />
              <h2 className="text-2xl font-semibold text-white">
                Basic Details
              </h2>
            </div>
            <hr className="border-t-2 border-neutral-700 mb-6 w-full" />
          </div>
          {loading ? (
            <div className="animate-pulse duration-800 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="h-12 bg-neutral-800 rounded"></div>
                <div className="h-12 bg-neutral-800 rounded"></div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-12 bg-neutral-800 rounded"></div>
                <div className="h-12 bg-neutral-800 rounded"></div>
              </div>
              <div className="h-10 bg-neutral-800 rounded w-1/3"></div>
            </div>
          ) : (
            <>
              {message.text && (
                <div
                  className={`mb-4 p-3 rounded ${
                    message.type === "success"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div className="flex flex-row flex-wrap items-start gap-6">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-neutral-600">
                    <div className="w-full h-full flex items-center justify-center">
                      <UserIcon className="w-12 h-12 text-neutral-500" />
                    </div>
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-white p-2 rounded-full shadow-lg">
                    <CameraIcon className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                  <Input
                    placeholder="Enter your First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    icon={
                      <IdentificationIcon className="h-5 w-5 text-neutral-500" />
                    }
                  />
                  <Input
                    placeholder="Enter your Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    icon={
                      <IdentificationIcon className="h-5 w-5 text-neutral-500" />
                    }
                  />
                  <Input
                    placeholder="Enter Team Name"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    icon={
                      <BriefcaseIcon className="h-5 w-5 text-neutral-500" />
                    }
                  />
                  <Input
                    placeholder="Enter your Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    icon={
                      <BriefcaseIcon className="h-5 w-5 text-neutral-500" />
                    }
                  />
                </div>
              </div>
              <Button onClickFunction={handleSubmit}>Update Details</Button>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BasicDetails;
