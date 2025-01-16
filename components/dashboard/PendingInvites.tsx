import React, { useEffect, useState } from "react";
import axios from "axios";

type Invite = {
  id: number;
  email: string;
  invitedAt: string;
};
type Request = {
  id: number;
  name: string;
  email: string;
};

const PendingInvites = () => {
  const [invites, setInvites] = useState<Invite[]>([]);
  const [joinRequest, setJoinRequest] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const open = false
  const fetchInvites = async () => {
    try {
      const response = await axios.get("/api/dashboard/invite");
      setInvites(response.data.existingInvites);
    } catch  {
      setError("");
    } finally {
      setLoading(false);
    }
  };
  const fetchJoinRequests = async () => {
    try {
      const response = await axios.get("/api/dashboard/joinRequests");
      setJoinRequest(response.data.existingInvites);
    } catch  {
      setError("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvites();
    fetchJoinRequests();
  }, []);
  async function deleteInvite(inviteId: number) {
    try {
      const res = await axios.delete(
        `/api/dashboard/invite?inviteId=${inviteId}`
      );
      if (res.status === 200) {
        const newInvites = invites.filter((invite) => invite.id !== inviteId);
        setInvites(newInvites);
      } else {
        alert("Error deleting invite");
      }
    } catch {
      alert("Error deleting invite");
    }
  }
  async function approveRequest(requestId: number) {
    try {
      const res = await axios.post(`/api/dashboard/approveRequests`, {
        requestId,
      });
      if (res.status === 200) {
        const newRequests = joinRequest.filter(
          (request) => request.id !== requestId
        );
        setJoinRequest(newRequests);
      } else {
        alert("Error approving request");
      }
    } catch (error) {
      console.error("Error approving request:", error);
      alert("Error approving request");
    }
  }
  async function declineRequest(requestId: number) {
    try {
      const res = await axios.put(`/api/dashboard/approveRequests`, {
        requestId,
      });
      if (res.status === 200) {
        const newRequests = joinRequest.filter(
          (request) => request.id !== requestId
        );
        setJoinRequest(newRequests);
      } else {
        alert("Error approving request");
      }
    } catch  {
      alert("Error approving request");
    }
  }
  return (
    <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50 shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-neutral-200">
          Pending Invites
        </h2>
        <span className="text-neutral-400">{invites.length} pending</span>
      </div>
      <div className="space-y-5">
        {loading && (
          <p className="text-neutral-400">Loading pending invites...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {invites.map((invite) => (
          <div
            key={invite.id}
            className="bg-neutral-700/30 p-5 rounded-xl hover:bg-neutral-700/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-primary-800 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                  {invite.email.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-neutral-200 font-medium">
                    {invite.email}
                  </h3>
                  <div className="flex items-center mt-2">
                    <svg
                      className="w-4 h-4 text-neutral-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className="text-xs text-neutral-500">
                      Sent {new Date(invite.invitedAt).toDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <button
                aria-label="Cancel Invite"
                className="text-red-400 bg-neutral-800 px-4 rounded-lg py-2 hover:text-red-500 text-sm font-medium transition-colors"
                onClick={() => {
                  deleteInvite(invite.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {joinRequest.map((request) => (
          <div
            className="bg-neutral-700/30 p-5 rounded-xl hover:bg-neutral-700/40 transition-all duration-300"
            key={request.id}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${request.name}&rounded=true`}
                  alt={request.name}
                  className={`${
                    open ? "h-8 w-8" : "h-12 w-12"
                  } rounded-full ring-2 ring-primary-400`}
                />
                <div>
                  <h3
                    className={`${
                      open ? "text-xs" : "text-sm"
                    } text-white font-medium`}
                  >
                    {request.name}
                  </h3>
                  <p
                    className={`${
                      open ? "text-xs" : "text-sm"
                    } text-neutral-400`}
                  >
                    {request.email}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`flex ${
                open ? "flex-col space-y-2" : "space-x-2 lg:flex-row"
              }`}
            >
              <button
                className="flex-1 px-4 py-2 bg-primary-500 rounded-lg text-black font-medium hover:bg-primary-400 transition-all text-sm flex items-center justify-center"
                onClick={() => {
                  approveRequest(request.id);
                }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Approve
              </button>
              <button
                className="flex-1 px-4 py-2 bg-neutral-700 rounded-lg text-white font-medium hover:bg-neutral-600 transition-all text-sm flex items-center justify-center"
                onClick={() => {
                  declineRequest(request.id);
                }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Decline
              </button>
            </div>
          </div>
        ))}
        <p className="text-neutral-400 text-center">
          No pending invites.{" "}
          <button
            onClick={() => {
              fetchInvites();
              fetchJoinRequests();
            }}
            className="text-blue-500 hover:underline"
          >
            Please refresh
          </button>
        </p>
      </div>
    </div>
  );
};
export default PendingInvites;
