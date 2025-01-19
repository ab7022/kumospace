"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";

const DailyStatus = () => {
  const [task, setTask] = useState("");
  const [availability, setAvailability] = useState("AVAILABLE");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(true);
  const url = "/api/dashboard/profile/DailyStatus";

  // Fetch daily status on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setTask(response.data.task);
          setAvailability(response.data.availability);
        }
      } catch {
        setMessage({
          type: "error",
          text: "Failed to load status details. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Update status handler
  const handleUpdate = async () => {
    try {
      const response = await axios.post(url, { task, availability });
      if (response.status === 200) {
        setMessage({ type: "success", text: "Status updated successfully!" });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Failed to update status. Please try again.",
      });
    } finally {
      setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 3000);
    }
  };

  // Status configuration for UI
  const statusConfig = {
    AVAILABLE: { color: "green", label: "Available" },
    AWAY: { color: "yellow", label: "Away" },
    DND: { color: "red", label: "Do Not Disturb" },
  };

  return (
    <div className=" bg-neutral-950 p-4 md:p-8">
    <section className="max-w-6xl mx-auto bg-neutral-900/50 backdrop-blur-lg rounded-xl border border-neutral-800 shadow-2xl ">
      {/* Header */}
      <div className="p-6 border-b border-neutral-800/50 -mt-8 md:-mt-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary-500/10 p-2 rounded-lg hidden md:block">
              <ClockIcon className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Availability</h2>
              <p className="text-sm text-neutral-400">{"What's your status"}</p>
            </div>
          </div>
          <div className="mb-2">

         
          <Button
            onClickFunction={handleUpdate}
         
          >
            Save Changes
          </Button>
          </div>
        </div>
      </div>

        {/* Content */}
        <div className="p-6 space-y-6 ">
          {/* Notification */}
          {message.text && (
            <div
              className={`p-4 rounded-lg border ${
                message.type === "success"
                  ? "bg-green-500/20 border-green-500 text-green-400"
                  : "bg-red-500/20 border-red-500 text-red-400"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Task Section */}
          <div className="bg-neutral-800/30 p-6 rounded-xl border border-neutral-700 space-y-4">
            <h3 className="text-lg font-semibold text-white">Current Task</h3>
            {loading ? (
              <div className="w-full h-24 bg-neutral-700/30 rounded-lg animate-pulse" />
            ) : (
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="What are you working on right now?"
                rows={3}
                className="w-full p-4 bg-neutral-800/50 text-white rounded-lg border border-neutral-700 focus:border-primary focus:ring focus:ring-primary/50 transition duration-200"
              />
            )}
          </div>

          {/* Availability Section */}
          <div className="bg-neutral-800/30 p-6 rounded-xl border border-neutral-700 space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Availability Status
            </h3>
            <div className=" gap-4 flex flex-col">
              {Object.entries(statusConfig).map(([status, config]) => (
                <button
                  key={status}
                  onClick={() => setAvailability(status)}
                  className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-200 ${
                    availability === status
                      ? `bg-${config.color}-500/10 ring ring-${config.color}-500`
                      : "hover:bg-neutral-700"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full bg-${config.color}-500`}
                  ></span>
                  <span
                    className={`font-medium flex flex-col ${
                      availability === status
                        ? `text-${config.color}-300`
                        : "text-white"
                    }`}
                  >
                    {config.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyStatus;
