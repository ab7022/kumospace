"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import TimePicker from "react-time-picker";  

const ActiveTask = () => {
  const [tasks, setTasks] = useState<
    {
      id: number;
      name: string;
      priority: string;
      completed: boolean;
      dueDate?: String;
    }[]
  >([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    priority: "HIGH",
    dueDate: "",
  });
  const [message, setMessage] = useState<{ text: string; type: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true); // Add loading state
  const url = "/api/dashboard/profile/activeTask";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(url);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); // Set loading to false after tasks are fetched
      }
    };
    fetchTasks();
  }, []);

  const handleCreateTask = async () => {
    try {
      const response = await axios.post(url, { ...newTask });
      const addedTask = response.data.task;
      setTasks((prevTasks) => [addedTask, ...prevTasks]);
      setIsCreating(false);
      setNewTask({ name: "", priority: "HIGH", dueDate: "" });
      setMessage({ text: "Task created successfully!", type: "success" });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error("Error creating task:", error);
      setMessage({
        text: "Failed to create task. Please try again.",
        type: "error",
      });
      setTimeout(() => setMessage(null), 3000);
    }
  };
  const [time, setTime] = useState("10:00"); // Default time

  const handleTimeChange = (selectedTime: string) => {
    setTime(selectedTime); // Update time picker value
    setNewTask((prev) => ({
      ...prev,
      dueDate: selectedTime, // Store just the time as a string
    }));
  };
  const handleMarkAsDone = async (taskId: number) => {
    try {
      await axios.patch(url, { taskId, completed: true });
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        )
      );
    } catch (error) {
      console.error("Error marking task as done:", error);
    }
  };

  const activeTasks =
    tasks.length >= 0 ? tasks.filter((task) => !task.completed) : null;

  return (
    <div>
      <section
        id="tasks_projects"
        className="bg-neutral-800/50 backdrop-blur-xl p-6 border border-neutral-700 rounded-2xl shadow-md m-6 space-y-8"
      >
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            🚀 Active Tasks
          </h3>
          <hr className="border-t-2 border-neutral-700 mb-6 w-full" />

          {/* Show message */}
          {message && (
            <div
              className={`${
                message.type === "success" ? "bg-green-500" : "bg-red-500"
              } text-white p-3 rounded-md mb-4`}
            >
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Show skeleton loaders while loading
              Array(3)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-700"
                  >
                    <Skeleton
                      height={30}
                      width="80%"
                      className="mb-2"
                      enableAnimation
                    />
                    <Skeleton
                      height={20}
                      width="60%"
                      className="mb-4"
                      enableAnimation
                    />
                    <Skeleton height={20} width="40%" enableAnimation />
                  </div>
                ))
            ) : activeTasks && activeTasks.length > 0 ? (
              activeTasks?.map((task) => (
                <div
                  key={task.id}
                  className="bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-700 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-row justify-between">
                    <h4 className="text-lg font-bold text-white mb-2 w-full">
                      {task.name}
                    </h4>
                    <span className="text-sm font-bold text-white mb-2">
                      {task?.dueDate}
                    </span>
                  </div>
                  <div className="mb-2 flex flex-row justify-between">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        task.priority === "HIGH"
                          ? "bg-red-500/30 text-red-400"
                          : task.priority === "MEDIUM"
                          ? "bg-yellow-500/30 text-yellow-400"
                          : "bg-green-500/30 text-green-400"
                      }`}
                    >
                      {task.priority}
                    </span>
                   
                    <button
                      onClick={() => handleMarkAsDone(task.id)}
                      className="text-white bg-neutral-700 rounded-md px-2 py-1 text-sm hover:underline"
                    >
                      Mark as Done
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}

            {isCreating ? (
              <div className="bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-700 hover:scale-105 transition-transform duration-300">
                <h4 className="text-lg font-bold text-white mb-2">
                  Create New Task
                </h4>
                <div className="mb-4">
                  <input
                    type="text"
                    required
                    placeholder="Task Title"
                    value={newTask.name}
                    onChange={(e) =>
                      setNewTask((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 bg-neutral-700/30 text-white rounded-md border border-neutral-600 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    required
                    placeholder="Task Deadline"
                    value={newTask.dueDate}
                    onChange={(e) =>
                      setNewTask((prev) => ({
                        ...prev,
                        dueDate: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 bg-neutral-700/30 text-white rounded-md border border-neutral-600 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <select
                    onChange={(e) => {
                      const selectedPriority =
                        e.target.options[e.target.selectedIndex].value;
                      setNewTask((prev) => ({
                        ...prev,
                        priority: selectedPriority,
                      }));
                    }}
                    className="w-full px-4 py-2 bg-neutral-700/30 text-white rounded-md border border-neutral-600 focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    <option>HIGH</option>
                    <option>MEDIUM</option>
                    <option>LOW</option>
                  </select>
                </div>
                <div className="flex ">
                  <button
                    onClick={handleCreateTask}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                  >
                    Add Task
                  </button>
                  <button
                    onClick={() => setIsCreating(false)}
                    className="px-4 py-2 bg-neutral-600 text-white rounded-md ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsCreating(true)}
                className="bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-700 hover:scale-105 transition-transform duration-300 flex items-center justify-center cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-3xl text-neutral-500 mb-2">+</div>
                  <h4 className="text-lg font-bold text-white">
                    Create New Task
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActiveTask;
