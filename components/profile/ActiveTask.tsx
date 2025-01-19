"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import {  LucideWorkflow } from "lucide-react";

const ActiveTask = () => {
  interface Task {
    id: number;
    name: string;
    priority: string;
    dueDate: string;
    completed: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    priority: "HIGH",
    dueDate: "",
  });
  const [message, setMessage] = useState<{ text: string; type: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const url = "/api/dashboard/profile/activeTask";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(url);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
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
    <div className=" bg-neutral-950 p-4 ">
      <section className="max-w-6xl mx-auto bg-neutral-900/50 backdrop-blur-lg rounded-xl border border-neutral-800 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800/50 md:-mt-20 -mt-8">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="bg-primary-500/10 p-2 rounded-lg hidden md:block">
                <LucideWorkflow className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Active Task</h2>
                <p className="text-sm text-neutral-400">Manage your Work</p>
              </div>
            </div>
            <div className="mb-2">
            <Button onClickFunction={() => setIsCreating(true)}>
              Create New Task
            </Button>
            </div>
          </div>
        </div>

        {message && (
          <div
            className={`${
              message.type === "success"
                ? "bg-green-600/20 border-green-500 text-green-400"
                : "bg-red-600/20 border-red-500 text-red-400"
            } border rounded-lg p-4 mb-6`}
          >
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-6 justify-center items-center">
          {isCreating && (
            <>
              <div className="bg-neutral-800/70 p-6 rounded-2xl shadow-md flex flex-col justify-center align-middle mt-8 ml-8 items-center">
                <h3 className="text-lg font-bold text-white mb-4">New Task</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.name}
                    onChange={(e) =>
                      setNewTask((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-primary-500 text-white"
                  />
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) =>
                      setNewTask((prev) => ({
                        ...prev,
                        dueDate: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-primary-500 text-white"
                  />
                  <select
                    value={newTask.priority}
                    onChange={(e) =>
                      setNewTask((prev) => ({
                        ...prev,
                        priority: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-primary-500 text-white"
                  >
                    <option>HIGH</option>
                    <option>MEDIUM</option>
                    <option>LOW</option>
                  </select>
                  <div className="flex gap-4">
                    <button
                      onClick={handleCreateTask}
                      className="w-full px-4 py-2 bg-primary-500 text-gray-800 font-bold rounded-lg  hover:bg-primary-600 transition"
                    >
                      Add Task
                    </button>
                    <button
                      onClick={() => setIsCreating(false)}
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {loading ? (
            Array(3)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-800/70 p-6 rounded-2xl shadow-md"
                >
                  <Skeleton height={24} className="mb-4" />
                  <Skeleton height={16} width="80%" />
                  <Skeleton height={16} width="60%" />
                </div>
              ))
          ) : activeTasks?.length === 0 ? (
            <div className="col-span-1 pt-12 md:col-span-3 text-center text-gray-400">
              {"You don't have any pending tasks."}
            </div>
          ) : (
            activeTasks?.map((task) => (
              <div
                key={task.id}
                className="bg-neutral-800/70 p-6 rounded-2xl shadow-md flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {task.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    Due: {task.dueDate || "N/A"}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.priority === "HIGH"
                        ? "bg-red-500/20 text-red-400"
                        : task.priority === "MEDIUM"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {task.priority}
                  </span>
                  <button
                    onClick={() => handleMarkAsDone(task.id)}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default ActiveTask;
