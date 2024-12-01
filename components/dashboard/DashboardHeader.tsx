import axios from "axios";
import React, { useState } from "react";

const DashboardHeader = ({ userRole }: { userRole: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInvite = async () => {
    if (!email) {
      alert("Please fill out both fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/dashboard/invite", {
        email,
        role,
      });

      if (response.status === 200) {
        setIsDialogOpen(false);
        setEmail("");
        setRole("");
      } else {
        const errorData = await response.data;
        alert(`Error: ${errorData.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error sending invite:", error);
      alert("An error occurred while sending the invitation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
              Dashboard
            </h1>
            <p className="text-neutral-400 text-lg">
              Welcome back! Here's your team's latest updates
            </p>
          </div>
          {(userRole === "ADMIN" || userRole === "MODERATOR") && (
            <div className="flex gap-4">
              <button className="group relative bg-neutral-800 text-white px-6 py-3 rounded-xl hover:bg-neutral-700 transition-all duration-200 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                New Project
              </button>
              <button
                className="bg-primary-400 text-neutral-900 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-200 font-semibold flex items-center gap-2"
                onClick={() => setIsDialogOpen(true)}
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
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Invite Member
              </button>
            </div>
          )}
        </div>

        {/* Dialog Box */}
        {isDialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-neutral-800 rounded-lg shadow-xl p-6 w-1/3">
              <h2 className="text-xl font-semibold text-white mb-4">
                Invite Member
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-neutral-400 mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-neutral-400 mb-2" htmlFor="role">
                    Role
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select role
                    </option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="MODERATOR">MODERATOR</option>
                    <option value="MEMBER">MEMBER</option>
                  </select>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-primary-500 text-neutral-800 rounded-lg hover:bg-primary-600"
                    disabled={loading}
                    onClick={handleInvite}
                  >
                    Invite
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {(userRole === "ADMIN" || userRole === "MODERATOR") && (
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Total Members</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                  +12% ↑
                </span>
              </div>
              <p className="text-3xl font-bold text-white">48</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Active Now</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                  +5% ↑
                </span>
              </div>
              <p className="text-3xl font-bold text-white">32</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">In Meetings</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-400">
                  Active
                </span>
              </div>
              <p className="text-3xl font-bold text-white">8</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Away</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-400/10 text-red-400">
                  15 New
                </span>
              </div>
              <p className="text-3xl font-bold text-white">8</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardHeader;
