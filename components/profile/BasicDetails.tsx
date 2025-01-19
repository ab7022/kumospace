"use client";
import {
  UserIcon,
  IdentificationIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import axios from "axios";
import { PersonStanding } from "lucide-react";

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
        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
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
        {/* Header */}
        <div className="p-6 border-b border-neutral-800/50 -mt-8 md:-mt-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary-500/10 p-2 rounded-lg hidden md:block">
                <UserIcon className="w-4 h-4 md:h-6 md:w-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-white">
                  Basic Details
                </h2>
                <p className="text-sm text-neutral-400">{"Your basic Info"}</p>
              </div>
            </div>
            <div className="mb-2">
              <Button onClickFunction={handleSubmit}>Save Changes</Button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="p-8">
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
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="bg-red-500 rounded-full p-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
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
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    icon={
                      <IdentificationIcon className="h-5 w-5 text-neutral-500" />
                    }
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    icon={
                      <IdentificationIcon className="h-5 w-5 text-neutral-500" />
                    }
                  />
                  <Input
                    placeholder="Team Name"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    icon={
                      <BriefcaseIcon className="h-5 w-5 text-neutral-500" />
                    }
                  />
                  <Input
                    placeholder="Role"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    icon={
                      <PersonStanding className="h-5 w-5 text-neutral-500" />
                    }
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
