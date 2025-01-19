import React, { useEffect, useState } from "react";
import axios from "axios";
import { Clock, UserPlus, Check, X, RefreshCcw, Mail, Calendar } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<'invites' | 'requests'>('invites');

  const fetchInvites = async () => {
    try {
      const response = await axios.get("/api/dashboard/invite");
      setInvites(response.data.existingInvites);
    } catch {
      setError("");
    } finally {
      setLoading(false);
    }
  };

  const fetchJoinRequests = async () => {
    try {
      const response = await axios.get("/api/dashboard/joinRequests");
      setJoinRequest(response.data.existingInvites);
    } catch {
      setError("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvites();
    fetchJoinRequests();
  }, []);

  const deleteInvite = async (inviteId: number) => {
    try {
      const res = await axios.delete(`/api/dashboard/invite?inviteId=${inviteId}`);
      if (res.status === 200) {
        setInvites(invites.filter((invite) => invite.id !== inviteId));
      }
    } catch {
      alert("Error deleting invite");
    }
  };

  const approveRequest = async (requestId: number) => {
    try {
      const res = await axios.post(`/api/dashboard/approveRequests`, { requestId });
      if (res.status === 200) {
        setJoinRequest(joinRequest.filter((request) => request.id !== requestId));
      }
    } catch {
      alert("Error approving request");
    }
  };

  const declineRequest = async (requestId: number) => {
    try {
      const res = await axios.put(`/api/dashboard/approveRequests`, { requestId });
      if (res.status === 200) {
        setJoinRequest(joinRequest.filter((request) => request.id !== requestId));
      }
    } catch {
      alert("Error declining request");
    }
  };

  const refreshData = () => {
    setLoading(true);
    fetchInvites();
    fetchJoinRequests();
  };

  return (
    <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl border border-neutral-700/50 shadow-xl">
      <div className="p-6 border-b border-neutral-700/50">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-semibold text-white">Pending Requests</h2>
          </div>
          <button
            onClick={refreshData}
            className="p-2 hover:bg-neutral-700/50 rounded-lg transition-all duration-200 text-neutral-400 hover:text-white"
          >
            <RefreshCcw className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-4 border-b border-neutral-700/50">
          <button
            onClick={() => setActiveTab('invites')}
            className={`px-4 py-2 -mb-px font-medium transition-all duration-200 ${
              activeTab === 'invites'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Invites ({invites.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-4 py-2 -mb-px font-medium transition-all duration-200 ${
              activeTab === 'requests'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Requests ({joinRequest.length})
          </button>
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Clock className="w-6 h-6 text-neutral-400 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-red-400 bg-red-400/10 p-4 rounded-lg">{error}</div>
        ) : (
          <div className="space-y-4">
            {activeTab === 'invites' ? (
              invites.length > 0 ? (
                invites.map((invite) => (
                  <div
                    key={invite.id}
                    className="group bg-neutral-700/30 p-5 rounded-xl hover:bg-neutral-700/40 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-all duration-200">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{invite.email}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4 text-neutral-500" />
                            <p className="text-sm text-neutral-500">
                              Sent {new Date(invite.invitedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteInvite(invite.id)}
                        className="px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all duration-200 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-neutral-400 text-center py-4">No pending invites</p>
              )
            ) : joinRequest.length > 0 ? (
              joinRequest.map((request) => (
                <div
                  key={request.id}
                  className="group bg-neutral-700/30 p-5 rounded-xl hover:bg-neutral-700/40 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://ui-avatars.com/api/?name=${request.name}&background=7c3aed&color=fff`}
                        alt={request.name}
                        className="h-12 w-12 rounded-full ring-2 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all duration-200"
                      />
                      <div>
                        <h3 className="text-white font-medium">{request.name}</h3>
                        <p className="text-sm text-neutral-400">{request.email}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => approveRequest(request.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg transition-all duration-200 text-sm font-medium"
                      >
                        <Check className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => declineRequest(request.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-700/50 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 rounded-lg transition-all duration-200 text-sm font-medium"
                      >
                        <X className="w-4 h-4" />
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-neutral-400 text-center py-4">No pending requests</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingInvites;