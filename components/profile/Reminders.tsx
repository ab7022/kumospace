"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "../Button";

const Reminders = () => {
  const [reminders, setReminders] = useState<
    {
      id: string;
      title: string;
      description: string;
      time: string;
    }[]
  >([]);

  const [newReminder, setNewReminder] = useState({
    title: "",
    description: "",
    time: "",
  });
  const [showInputFields, setShowInputFields] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const url = "/api/dashboard/profile/reminder";

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        if (data) setReminders(data);
      } catch {}
    };
    fetchReminders();
  }, []);

  useEffect(() => {
    const checkExpiredReminders = () => {
      const now = new Date();
      const updatedReminders = reminders.filter((reminder) => {
        const reminderDate = new Date(reminder.time);
        if (reminderDate <= now) {
          showNotification(
            `Reminder expired: ${reminder.title}`,
            "warning"
          );
          return false;
        }
        return true;
      });
      setReminders(updatedReminders);
    };
    const interval = setInterval(checkExpiredReminders, 60000);
    return () => clearInterval(interval);
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewReminder((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReminder = async () => {
    if (newReminder?.title?.trim() && newReminder?.time?.trim()) {
      try {
        const response = await axios.post(url, {
          title: newReminder.title,
          description: newReminder.description,
          time: newReminder.time,
        });
        setReminders((prev) => [...prev, response.data.newReminder]);

        setNewReminder({ title: "", description: "", time: "" });
        setShowInputFields(false);
        showNotification("Reminder added successfully!", "success");
      } catch {
        showNotification("Failed to add reminder. Please try again.", "error");
      }
    } else {
      showNotification("Please fill in all fields.", "error");
    }
  };

  const showNotification = (message: any, type: any) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  const handleCancel = () => {
    setNewReminder({ title: "", description: "", time: "" });
    setShowInputFields(false);
  };

  const handleDeleteReminder = async (id: string) => {
    try {
      await axios.put(`${url}/?id=${id}`);
      setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
      showNotification("Reminder deleted successfully!", "success");
    } catch {
      showNotification("Failed to delete reminder. Please try again.", "error");
    }
  };

  function calculateTimeRemaining(targetDateString: string) {
    const now = new Date();
    const targetDate = new Date(targetDateString);

    if (isNaN(targetDate.getTime())) return "Invalid Date";

    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return "Time's up!";

    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);

    return `${days}d ${hours}h ${minutes}m remaining`;
  }

  return (
    <div className=" bg-neutral-950 p-4 ">
      <section className="max-w-6xl mx-auto bg-neutral-900/50 backdrop-blur-lg rounded-xl border border-neutral-800 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800/50 -mt-8 md:-mt-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary-500/10 p-2 rounded-lg hidden md:block">
                <ClockIcon className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Deadlines</h2>
                <p className="text-xs text-neutral-400">Manage your deadlines</p>
              </div>
            </div>
            <Button
              onClickFunction={()=> setShowInputFields(true)}
            >
              Add new Deadline
            </Button>
          </div>
        </div>


        <div className="p-2 md:p-6 space-y-6">
          {/* Notifications */}
          {notification.message && (
            <div
              className={`p-4 rounded-xl border shadow-md transition-all duration-300 ${
                notification.type === "success"
                  ? "bg-green-600/20 border-green-500 text-green-300"
                  : "bg-red-600/20 border-red-500 text-red-300"
              }`}
            >
              {notification.message}
            </div>
          )}

          {/* Reminder List */}
          <div className="">
            {reminders.length === 0 ? (
              <div className="text-center pt-8">
                <div className="text-gray-400">No Deadlines available.</div>
              </div>
            ) : (
              reminders.map((reminder, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-5 bg-neutral-800/60 hover:bg-neutral-800/80 rounded-xl border border-neutral-600 shadow-lg transition-all duration-200"
                >
                  <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center shadow-md">
                    <svg
                      className="w-7 h-7 text-primary-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-white">
                      {reminder.title || "No Title"}
                    </h4>
                    <p className="text-gray-400">
                      {reminder.description || "No Description"}
                    </p>
                  </div>
                  <span className="px-5 py-2 rounded-lg bg-yellow-600/20 text-yellow-300 font-medium shadow-md">
                    {calculateTimeRemaining(reminder.time) || "No Time"}
                  </span>
                  <button
                    onClick={() => handleDeleteReminder(reminder.id)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg shadow-md"
                  >
                    Mark as done
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="grid grid-cols-1 p-2 md-p-4 md:grid-cols-3 gap-6 justify-center items-center">
          {showInputFields && (
            <>
              <div className="bg-neutral-800/70 md:p-6 p-4 rounded-2xl shadow-md flex flex-col justify-center align-middle mt-4 ml-4 items-center space-y-2">
              <h4 className="text-xl font-bold text-white mb-4">New Reminder</h4>
              <input
                type="text"
                name="title"
                value={newReminder.title}
                placeholder="Reminder Title"
                onChange={handleInputChange}
                className="w-full p-2 bg-neutral-700/60 text-white rounded-lg border border-neutral-600 focus:border-primary outline-none transition duration-200"
              />
              <input
                type="text"
                name="description"
                value={newReminder.description}
                placeholder="Reminder Description"
                onChange={handleInputChange}
                className="w-full p-2 bg-neutral-700/60 text-white rounded-lg border border-neutral-600 focus:border-primary outline-none transition duration-200"
              />
              <input
                type="time"
                name="time"
                value={newReminder.time}
                onChange={handleInputChange}
                className="w-full p-2 bg-neutral-700/60 text-white rounded-lg border border-neutral-600 focus:border-primary outline-none transition duration-200"
              />

<div className="flex gap-8 w-full">
                    <button
                      onClick={handleAddReminder}
                      className="w-full px-4 py-2 bg-primary-500 text-gray-800 text-sm font-bold rounded-lg  hover:bg-primary-600 transition"
                    >
                      Add Reminder
                    </button>
                    <button
                      onClick={handleCancel}
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                    </div>
            </div>
            </>
          )}
          </div>
          </div>
      </section>
    </div>
  );
};

export default Reminders;
