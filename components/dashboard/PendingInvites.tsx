import React, { useEffect, useState } from "react";
import axios from "axios";

type Invite = {
  id: number;
  email: string;
  invitedAt: string;
};

const PendingInvites = ({ open }: { open: boolean }) => {
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInvites = async () => {
    try {
      const response = await axios.get("/api/dashboard/invite");
      setInvites(response.data.existingInvites);
    } catch (err) {
      console.error("Error fetching invites:", err);
      setError("Failed to load invites.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvites();
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
    } catch (error) {
      console.error("Error deleting invite:", error);
      alert("Error deleting invite");
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

        {!invites.length && (
          <p className="text-neutral-400">No pending invites.</p>
        )}
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
      </div>
    </div>
  );
};
export default PendingInvites;
