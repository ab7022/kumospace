import React, { useState } from 'react';
import { Video, PenLine, ChevronRight, MessageSquare, Users, Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TeamMember } from '../types';
import axios from 'axios';

interface QuickActionButtonProps {
  icon: React.ElementType;
  title: string;
  color: string;
  bgColor: string;
  hoverBgColor: string;
  href: string;
  onClick?: () => void;
}

const QuickActionButton = ({ 
  icon: Icon, 
  title, 
  color, 
  bgColor, 
  hoverBgColor, 
  href,
  onClick 
}: QuickActionButtonProps) => {
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className="w-full group flex items-center justify-between bg-neutral-700/20 text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-neutral-800"
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${hoverBgColor}`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
          <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
            {title}
          </span>
        </div>
        <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
      </button>
    );
  }

  return (
    <Link 
      className="w-full group flex items-center justify-between bg-neutral-700/20 text-left px-4 py-3 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-neutral-800" 
      href={href}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${hoverBgColor}`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
          {title}
        </span>
      </div>
      <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

const TaskAssignmentDialog = ({ 
  isOpen, 
  onClose, 
  teamMembers 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  teamMembers: TeamMember[] 
}) => {
  const [selectedMembers, setSelectedMembers] = useState("");
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  async function handleSubmit () {
    console.log("called")
    
    const taskData = {
      title: taskTitle,
      description: taskDescription,
      assignee: selectedMembers
    };

    const assignTask = await axios.post('/api/dashboard/tasks', taskData);
    console.log(assignTask)
    if (assignTask.status !== 200) {
      return console.error('Something Went Wrong!');
    }
    
    console.log('Task Data:', taskData);
    
    // Reset form and close dialog
    setTaskTitle('');
    setTaskDescription('');
    setSelectedMembers("");
    onClose();
  };

  const toggleMember = (email: any) => {
    setSelectedMembers(email);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 border-neutral-700/50 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold tracking-tight">
            Assign New Task
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            
            <textarea
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
              required
            />
            
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-neutral-300">Assign To:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
              {teamMembers.map((member) => (
                <button
                  key={member?.email}
                  type="button"
                  onClick={() => toggleMember(member?.email)}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
                    selectedMembers.includes(member.email)
                      ? 'bg-purple-500/20 border-purple-500'
                      : 'bg-neutral-800 border-neutral-700'
                  } border`}
                >
                  <img
                    src={member.profileUrl}
                    alt={member.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">{member.name}</div>
                    <div className="text-xs text-neutral-400">{member.designation}</div>
                  </div>
                  {selectedMembers.includes(member.email) ? (
                    <Check className="w-5 h-5 text-purple-400" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors"
              disabled={!selectedMembers.length || !taskTitle || !taskDescription } onClick={handleSubmit}
            >
              Assign Task
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const QuickActions = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);

  const actions = [
    {
      icon: MessageSquare,
      title: "Quick Chat",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      hoverBgColor: "group-hover:bg-blue-400/20",
      href: "/Dashboard/Messages"
    },
    {
      icon: Video,
      title: "Start Video Call",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      hoverBgColor: "group-hover:bg-emerald-400/20",
      href: "/Dashboard"
    },
    {
      icon: Users,
      title: "Assign Task",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      hoverBgColor: "group-hover:bg-purple-400/20",
      href: "/Dashboard",
      onClick: () => setIsTaskDialogOpen(true)
    },
    {
      icon: PenLine,
      title: "Write Update",
      color: "text-rose-400",
      bgColor: "bg-rose-400/10",
      hoverBgColor: "group-hover:bg-rose-400/20",
      href: "/Dashboard"
    }
  ];

  return (
    <>
      <Card className="bg-neutral-800/50 backdrop-blur-xl shadow-xl border-neutral-700/50 mb-12">
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl font-semibold text-white tracking-tight">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="space-y-2">
            {actions.map((action, index) => (
              <QuickActionButton
                key={index}
                icon={action.icon}
                title={action.title}
                color={action.color}
                bgColor={action.bgColor}
                hoverBgColor={action.hoverBgColor}
                href={action.href}
                onClick={action.onClick}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <TaskAssignmentDialog
        isOpen={isTaskDialogOpen}
        onClose={() => setIsTaskDialogOpen(false)}
        teamMembers={teamMembers}
      />
    </>
  );
};

export default QuickActions;