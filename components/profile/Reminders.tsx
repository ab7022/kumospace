"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Reminders = () => {
  const [reminders, setReminders] = useState<
    {
      id: string;
      reminderTitle: string;
      reminderDescription: string;
      reminderTime: string;
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
      } catch (error) {
        console.error("Error fetching reminders:", error);
      }
    };
    fetchReminders();
  }, []);
  // Remove expired reminders
  useEffect(() => {
    const checkExpiredReminders = () => {
      const now = new Date();
      const updatedReminders = reminders.filter((reminder) => {
        const reminderDate = new Date(reminder.reminderTime);
        if (reminderDate <= now) {
          showNotification(
            `Reminder expired: ${reminder.reminderTitle}`,
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
      } catch (error) {
        console.error("Error adding reminder:", error);
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
    } catch (error) {
      console.error("Error deleting reminder:", error);
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
    <div>
      <section
        id="reminders_deadlines"
        className="bg-neutral-800 bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700/50 rounded-2xl shadow-sm m-6"
      >
        <div className="space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-neutral-100">
                Reminders &amp; Deadlines
              </h2>
            </div>
          </div>

          {/* Notifications */}
          {notification.message && (
            <div
              className={`p-4 mb-4 text-sm rounded-lg ${
                notification.type === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {notification.message}
            </div>
          )}

          {/* Reminder List */}
          <div className="bg-neutral-800 rounded-lg p-4 mb-8">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-medium text-neutral-200">
                Today's Reminders
              </h3>
              <button
                onClick={() => setShowInputFields(true)}
                className="flex items-center gap-2 px-3 py-2 bg-primary-500 text-neutral-800 text-sm font-medium rounded-md hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Reminder
              </button>
            </div>

            <div className="space-y-4">
              {reminders.length === 0 ? (
                <div className="text-neutral-400 text-center">
                  No reminders available.
                </div>
              ) : (
                reminders.map((reminder, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg border border-neutral-800"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
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
                      <h4 className="text-sm font-semibold text-neutral-200">
                        {reminder.reminderTitle || "No Title"}
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {reminder.reminderDescription || "No Description"}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                      {calculateTimeRemaining(reminder.reminderTime) ||
                        "No Time"}
                    </span>
                    <button
                      onClick={() => handleDeleteReminder(reminder.id)}
                      className="text-white text-md bg-neutral-800 hover:cursor-pointer hover:bg-neutral-900 px-3 py-2 rounded-md text-sm focus:outline-none"
                    >
                      Mark as done
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Input Fields */}
          {showInputFields && (
            <div className="bg-neutral-700/30 p-4 rounded-md">
              <h4 className="text-neutral-100 mb-4">Create New Reminder</h4>
              <input
                type="text"
                name="title"
                value={newReminder.title}
                placeholder="Reminder Title"
                onChange={handleInputChange}
                className="w-full p-2 mb-2 bg-neutral-700 text-white rounded"
              />
              <input
                type="text"
                name="description"
                value={newReminder.description}
                placeholder="Reminder Description"
                onChange={handleInputChange}
                className="w-full p-2 mb-2 bg-neutral-700 text-white rounded"
              />
              <input
                type="time"
                name="time"
                value={newReminder.time}
                placeholder="Reminder Time"
                onChange={handleInputChange}
                className="w-full p-2 bg-neutral-700 text-white rounded"
              />

              <div className="flex justify-start mt-4 space-x-2">
                <button
                  onClick={handleCancel}
                  className="px-3 py-2 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddReminder}
                  className="px-3 py-2 bg-primary-500 text-neutral-800 text-sm rounded-md hover:bg-primary-400 focus:outline-none"
                >
                  Add Reminder
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reminders;
