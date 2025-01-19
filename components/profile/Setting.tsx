"use client";
import { UserIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import axios from "axios";
import moment from "moment-timezone";

const getAllTimeZones = () => {
  return moment.tz.names();
};

const Setting = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState(moment());
  const [timeZones, setTimeZones] = useState<string[]>([]);
  const [workHoursFrom, setWorkHoursFrom] = useState("09:00");
  const [workHoursTo, setWorkHoursTo] = useState("17:00");
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  // Original useEffect and handlers remain the same...
  const updateTime = () => {
    const time = moment();
    setCurrentTime(time);
  };

  useEffect(() => {
    const zones = getAllTimeZones();
    setTimeZones(zones);
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          const { timezone, workHoursFrom, workHoursTo } = response.data;
          setSelectedTimeZone(timezone);
          setWorkHoursFrom(workHoursFrom);
          setWorkHoursTo(workHoursTo);
        }
      } catch (error) {
        console.error("Error fetching user settings:", error);
      }
    };

    fetchUserSettings();
  }, []);

  const handleTimeZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimeZone(e.target.value);
  };

  const handleWorkHoursFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkHoursFrom(e.target.value);
  };

  const handleWorkHoursToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkHoursTo(e.target.value);
  };

  const formattedTime = moment.tz(currentTime, selectedTimeZone).format("hh:mm:ss A");

  const url = "/api/dashboard/profile/setting";
  const handleSaveChanges = async () => {
    const data = {
      timezone: selectedTimeZone,
      workHoursFrom,
      workHoursTo,
    };

    try {
      const response = await axios.post(url, data);
      if (response.status === 200) {
        setMessage("Settings updated successfully!");
        setMessageType("success");
      } else {
        setMessage("Failed to update settings.");
        setMessageType("error");
      }
      setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 3000);
    } catch {
      setMessage("Error occurred while updating settings.");
      setMessageType("error");
      setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 3000);
    }
  };

  return (
    <div className=" bg-neutral-950 p-4 md:p-8">
      <section className="max-w-6xl mx-auto bg-neutral-900/50 backdrop-blur-lg rounded-xl border border-neutral-800 shadow-2xl ">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800/50 md:-mt-16">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary-500/10 p-2 rounded-lg">
                <UserIcon className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Settings</h2>
                <p className="text-sm text-neutral-400">Manage your preferences</p>
              </div>
            </div>
            <Button
              onClickFunction={handleSaveChanges}
           
            >
              Save Changes
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Alert Messages */}
          {message && (
            <div
              className={`p-4 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                messageType === "success"
                  ? "bg-green-500/20 border border-green-500/50 text-green-200"
                  : "bg-red-500/20 border border-red-500/50 text-red-200"
              }`}
            >
              <div
                className={`p-1 rounded-full ${
                  messageType === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {messageType === "success" ? "✓" : "✕"}
              </div>
              {message}
            </div>
          )}

          {/* Time Zone Section */}
          <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <ClockIcon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Time Zone</h3>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Current Time</p>
                  <p className="text-3xl font-bold text-white tracking-tight">
                    {formattedTime}
                  </p>
                </div>
                <select
                  className="px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 border border-neutral-600 
                    rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 
                    transition-colors duration-200"
                  value={selectedTimeZone}
                  onChange={handleTimeZoneChange}
                >
                  {timeZones.map((tz) => (
                    <option key={tz} value={tz} className="bg-neutral-800">
                      {tz}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/10 p-2 rounded-lg">
                <CalendarIcon className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Working Hours</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="working-hours-from" className="text-sm text-neutral-400 block">
                  Start Time
                </label>
                <input
                  id="working-hours-from"
                  type="time"
                  value={workHoursFrom}
                  onChange={handleWorkHoursFromChange}
                  className="w-full px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg 
                    border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 
                    text-white transition-colors duration-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="working-hours-to" className="text-sm text-neutral-400 block">
                  End Time
                </label>
                <input
                  id="working-hours-to"
                  type="time"
                  value={workHoursTo}
                  onChange={handleWorkHoursToChange}
                  className="w-full px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg 
                    border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 
                    text-white transition-colors duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;