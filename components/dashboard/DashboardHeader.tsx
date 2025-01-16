import axios from "axios";
import React, {  useEffect, useState } from "react";

const DashboardHeader = ({ userRole }: { userRole: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeStatus, setActiveStatus] = useState("0");
  const [awayStatus, setAwayStatus] = useState("0");
  const [dndStatus, setDndStatus] = useState("0");
  const [totalMembers, setTotalMembers] = useState("0");
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
  async function getAllStatus()  {
    setLoading(true);
    try {
      const response = await axios.get("/api/dashboard/getStatus");
      if (response.status === 200) {
        console.log(response);
        setTotalMembers(response.data.statusCount.total);
        setActiveStatus(response.data.statusCount.active);
        setAwayStatus(response.data.statusCount.away);
        setDndStatus(response.data.statusCount.dnd);
      } else {
        const errorData = await response.data;
        alert(`Error: ${errorData.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error with post request:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAllStatus();
  }, []);
  return (
    <>
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
              Dashboard
            </h1>
            <p className="text-neutral-400 text-lg">
              {"              Welcome back! Here's your team's latest updates"}{" "}
            </p>
          </div>
          {(userRole === "ADMIN" || userRole === "MODERATOR") && (
            <div className="flex gap-4">
             
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
               
              </div>
              <p className="text-3xl font-bold text-white">{totalMembers}</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Available</span>
              
              </div>
              <p className="text-3xl font-bold text-white">{activeStatus}</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">DND</span>
                
              </div>
              <p className="text-3xl font-bold text-white">{dndStatus}</p>
            </div>
            <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-400">Away</span>
            
              </div>
              <p className="text-3xl font-bold text-white">{awayStatus}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardHeader;
