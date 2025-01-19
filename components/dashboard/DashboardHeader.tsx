import React, { useEffect, useState } from 'react';
import { Users, UserPlus, Activity, Clock, Moon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from 'axios';

const DashboardHeader = ({ userRole }: { userRole: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    total: "0",
    active: "0",
    away: "0",
    dnd: "0"
  });

  const handleInvite = async () => {
    if (!email || !role) {
      alert("Please fill out all fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/dashboard/invite", { email, role });
      if (response.status === 200) {
        setIsDialogOpen(false);
        setEmail("");
        setRole("");
      }
    } catch (error) {
      console.error("Error sending invite:", error);
      alert("An error occurred while sending the invitation.");
    } finally {
      setLoading(false);
    }
  };

  const getAllStatus = async () => {
    try {
      const response = await axios.get("/api/dashboard/getStatus");
      if (response.status === 200) {
        const { statusCount } = response.data;
        setStats({
          total: statusCount.total,
          active: statusCount.active,
          away: statusCount.away,
          dnd: statusCount.dnd
        });
      }
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  useEffect(() => {
    getAllStatus();
  }, []);

  const statsCards = [
    {
      title: "Total Members",
      value: stats.total,
      icon: <Users className="w-6 h-6 text-blue-400" />,
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      title: "Available",
      value: stats.active,
      icon: <Activity className="w-6 h-6 text-green-400" />,
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      title: "Do Not Disturb",
      value: stats.dnd,
      icon: <Moon className="w-6 h-6 text-red-400" />,
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20"
    },
    {
      title: "Away",
      value: stats.away,
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20"
    }
  ];

  return (
    <div className="space-y-8 mb-4">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-neutral-400 text-sm w-48 md:w-full md:text-lg">
            Welcome back! Here's your team's latest updates
          </p>
        </div>
        
        {(userRole === "ADMIN" || userRole === "MODERATOR") && (
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 rounded-xl transition-all duration-200"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Invite Member
          </Button>
        )}
      </div>

      {(userRole === "ADMIN" || userRole === "MODERATOR") && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 ">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${card.borderColor} ${card.bgColor} backdrop-blur-xl transition-all duration-200 hover:scale-105`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-300 font-medium">
                  {card.title}
                </span>
                {card.icon}
              </div>
              <p className="text-3xl font-bold text-white">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-neutral-800 border-neutral-700">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-white">
              Invite Member
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm text-neutral-400">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="bg-neutral-900 border-neutral-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-neutral-400">
                Role
              </label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="bg-neutral-900 border-neutral-700 text-white">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="MODERATOR">Moderator</SelectItem>
                  <SelectItem value="MEMBER">Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="bg-neutral-700 hover:bg-neutral-600 text-white border-neutral-600"
              >
                Cancel
              </Button>
              <Button
                onClick={handleInvite}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                {loading ? "Sending..." : "Send Invite"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardHeader;