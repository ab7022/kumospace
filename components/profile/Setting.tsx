"use client";
import { UserIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import Button from "../Button";
import axios from "axios";

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
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  const updateTime = () => {
    const time = moment();
    setCurrentTime(time);
  };

  // Fetch user settings on initial render
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

  const handleWorkHoursFromChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorkHoursFrom(e.target.value);
  };

  const handleWorkHoursToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkHoursTo(e.target.value);
  };

  const formattedTime = moment
    .tz(currentTime, selectedTimeZone)
    .format("hh:mm:ss A");

  const url = "/api/dashboard/profile/setting";

  // Function to handle the save action
  const handleSaveChanges = async () => {
    const data = {
  
      timezone: selectedTimeZone,
      workHoursFrom,
      workHoursTo,
    };

    try {
      const response = await axios.post(url, data);
      if (response.status === 200) {
        const updatedUser = response.data;
        console.log("User settings updated:", updatedUser);
        setMessage("Settings updated successfully!");
        setMessageType("success");
      } else {
        console.error("Failed to update:", response.data.error);
        setMessage("Failed to update settings.");
        setMessageType("error");
      }
      // Hide the message after 3 seconds
      setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error occurred while updating settings.");
      setMessageType("error");
      setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 3000);
    }
  };

  return (
    <div>
      <section
        id="settings_panel"
        className="bg-neutral-800 bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700/50 rounded-2xl shadow-sm m-6"
      >
        <div className=" mx-auto">
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-6">
              <div className="flex flex-row justify-center items-center gap-2">
                <UserIcon className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-neutral-100">
                  Settings
                </h2>
              </div>
              <span className="text-sm text-neutral-400">
                Last updated: Just now
              </span>
            </div>
            {message && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  messageType === "success" ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                {message}
              </div>
            )}
            <div className="bg-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-1 text-neutral-200">
                Time Zone
              </h3>

              <div className="bg-neutral-700/10 hover:bg-neutral-700/20 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-300">Current Time</p>
                    <p className="text-2xl font-semibold text-white">
                      {formattedTime}
                    </p>
                  </div>
                  <select
                    className="bg-neutral-700/30 hover:bg-neutral-700/50 border border-neutral-500 rounded-lg px-3 py-2 text-neutral-200"
                    value={selectedTimeZone}
                    onChange={handleTimeZoneChange}
                  >
                    {timeZones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-neutral-200">
                Working Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="working-hours-from"
                    className="text-neutral-200"
                  >
                    From:
                  </label>
                  <input
                    id="working-hours-from"
                    type="time"
                    value={workHoursFrom}
                    onChange={handleWorkHoursFromChange}
                    className="w-1/4 px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                  <label
                    htmlFor="working-hours-to"
                    className="text-neutral-200"
                  >
                    To:
                  </label>
                  <input
                    id="working-hours-to"
                    type="time"
                    value={workHoursTo}
                    onChange={handleWorkHoursToChange}
                    className="w-1/4 px-4 py-2 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                </div>
              </div>
            </div>

            <Button onClickFunction={handleSaveChanges}>Save Changes</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;
