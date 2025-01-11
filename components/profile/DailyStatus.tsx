"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import axios from "axios";

const DailyStatus = () => {
  const [task, setTask] = useState("");
  const [availability, setAvailability] = useState("AVAILABLE");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(true);
  const url = "/api/dashboard/profile/DailyStatus";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setTask(response.data.task);
          setAvailability(response.data.availability);
        }
      } catch (error) {
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
  const handleUpdate = async () => {
    try {
      const response = await axios.post(url, { task, availability });
      if (response.status === 200) {
        setMessage({ type: "success", text: "Status updated successfully!" });
      }
    } catch (error) {
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

  return (
    <div>
      <section
        id="daily_status"
        className="bg-neutral-800 bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700/50 rounded-2xl shadow-sm m-6"
      >
        <div className="">
          <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <ArrowRightIcon className="w-6 h-6 text-primary" /> Daily Status
            </h2>
          </div>

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
          <div className="mb-8 bg-neutral-800 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4 text-neutral-200">
              What are you working on?
            </h3>
            <div className="space-y-4">
              {loading ? (
                <div className="w-full h-10 bg-neutral-700/50 rounded-lg animate-pulse"></div>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="flex-grow">
                    <textarea
                      placeholder="Update your current task..."
                      rows={2}
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8 bg-neutral-800 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4 text-neutral-200">
              Availability
            </h3>
            <div className="flex flex-wrap gap-3">
              {loading
                ? Array(5)
                    .fill("")
                    .map((_, index) => (
                      <div
                        key={index}
                        className="w-32 h-10 bg-neutral-700/50 rounded-lg animate-pulse"
                      ></div>
                    ))
                : ["AVAILABLE", "AWAY", "DND", "OFFLINE", "BUSY"].map(
                    (status) => (
                      <div
                        key={status}
                        className={`p-2 hover:bg-neutral-700/30 animate-slide-up duration-200 rounded-lg ${
                          availability === status
                            ? "border border-neutral-600 bg-neutral-800"
                            : ""
                        }`}
                      >
                        <button
                          onClick={() => setAvailability(status)}
                          className={`px-4 py-2 rounded-lg ${
                            status === "AVAILABLE"
                              ? "bg-green-500/20 text-green-300 hover:bg-green-500/40"
                              : status === "AWAY"
                              ? "bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/40"
                              : status === "DND"
                              ? "bg-red-500/20 text-red-300 hover:bg-red-500/40"
                              : status === "OFFLINE"
                              ? "bg-neutral-600/20 text-neutral-300 hover:bg-neutral-600/40"
                              : "bg-blue-500/20 text-blue-300 hover:bg-blue-500/40" // For BUSY
                          } font-medium`}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                status === "AVAILABLE"
                                  ? "bg-green-500"
                                  : status === "AWAY"
                                  ? "bg-yellow-500"
                                  : status === "DND"
                                  ? "bg-red-500"
                                  : status === "OFFLINE"
                                  ? "bg-neutral-600"
                                  : "bg-blue-500"
                              }`}
                            ></span>
                            {status}
                          </span>
                        </button>
                      </div>
                    )
                  )}
            </div>
          </div>
          <Button onClickFunction={handleUpdate}>Update Details</Button>
        </div>
      </section>
    </div>
  );
};
export default DailyStatus;
