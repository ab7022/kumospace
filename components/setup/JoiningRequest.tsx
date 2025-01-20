"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Check, X, Loader2, Building2 } from "lucide-react";

interface JoinRequest {
  id: string;
  role: string;
  spaceName: string;
}

const JoiningRequest = () => {
  const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [spaceName, setSpaceName] = useState("");
  const [actionInProgress, setActionInProgress] = useState<string | null>(null);
  const router = useRouter();
  const url = "/api/setup/checkExistingInvites";

  useEffect(() => {
    const fetchJoinRequests = async () => {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          const { invites, name } = response.data;
          setSpaceName(name);
          setJoinRequests(invites);
        }
      } catch (error) {
        console.error("Error fetching join requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoinRequests();
  }, []);

  async function acceptInvitation(invitationId: string) {
    setActionInProgress(invitationId);
    try {
      const res = await axios.post(url, { requestId: invitationId });
      if (res.status === 200) {
        setJoinRequests((prevRequests) =>
          prevRequests.filter((request) => request.id !== invitationId)
        );
        router.push(`/Dashboard`);
      }
    } catch (error) {
      console.error("Error accepting invitation:", error);
    } finally {
      setActionInProgress(null);
    }
  }

  async function declineInvitation(invitationId: string) {
    setActionInProgress(invitationId);
    try {
      const res = await axios.put(url, { requestId: invitationId });
      if (res.status === 200) {
        setJoinRequests((prevRequests) =>
          prevRequests.filter((request) => request.id !== invitationId)
        );
      }
    } catch (error) {
      console.error("Error declining invitation:", error);
    } finally {
      setActionInProgress(null);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-900/50 rounded-xl backdrop-blur-sm">
        <div className="flex items-center gap-3 text-gray-400">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading join requests...</span>
        </div>
      </div>
    );
  }

  if (joinRequests.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800/50 backdrop-blur-sm overflow-hidden">
        <div className="p-6 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10">
              <Building2 className="h-4 w-4 text-yellow-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">
              Pending Workspace Invitations
            </h2>
          </div>
        </div>

        <div className="divide-y divide-gray-800/50">
          {joinRequests.map((request) => (
            <div
              key={request.id}
              className="p-6 transition-colors hover:bg-gray-800/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white">
                    {spaceName}
                  </h3>
                  <p className="text-sm text-gray-400">
                    You've been invited to join as a{" "}
                    <span className="text-yellow-400 font-medium">
                      {request.role}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => declineInvitation(request.id)}
                    disabled={actionInProgress === request.id}
                  >
                    {actionInProgress === request.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <X className="h-4 w-4" />
                    )}
                    <span>Decline</span>
                  </button>
                  
                  <button
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => acceptInvitation(request.id)}
                    disabled={actionInProgress === request.id}
                  >
                    {actionInProgress === request.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Check className="h-4 w-4" />
                    )}
                    <span>Accept</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoiningRequest;