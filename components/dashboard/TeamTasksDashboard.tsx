import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle, Search, CheckCircle2, Clock, Users, Calendar, ChevronDown } from 'lucide-react';
import axios from 'axios';

interface Task {
  id: string;
  taskTitle: string;
  taskDescription: string;
  userId: string;
  spaceId: string;
  assignedAt: string;
  status: 'PENDING' | 'COMPLETED';
  user?: {
    name: string;
    profileUrl: string;
    email: string;
  };
}

const TaskStatCard = ({ icon: Icon, label, value, color, bgColor }: { 
  icon: React.ElementType; 
  label: string; 
  value: number;
  color: string;
  bgColor: string;
}) => (
  <div className={`${bgColor} rounded-xl p-6 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 hover:scale-102`}>
    <div className="flex items-center gap-4">
      <div className={`rounded-xl p-3 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-neutral-400 mb-1">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  </div>
);


const TaskCard = ({ task, onComplete }: { task: Task; onComplete: (id: string) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${
        task.status === 'COMPLETED' ? 'bg-neutral-800/30' : 'bg-neutral-800/50'
      } rounded-xl p-6 hover:bg-neutral-800 transition-all duration-300 border border-neutral-700/50 hover:border-neutral-600/50 ${
        isHovered ? 'transform scale-[1.01]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className={`font-semibold text-xl ${task.status === 'COMPLETED' ? 'text-neutral-400' : 'text-white'}`}>
              {task.taskTitle}
            </h3>
            {task.status === 'COMPLETED' && (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            )}
          </div>
          <p className={`${task.status === 'COMPLETED' ? 'text-neutral-500' : 'text-neutral-400'} text-sm line-clamp-2 mb-4`}>
            {task.taskDescription}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {task.user && (
                <div className="flex items-center gap-2">
                  <img
                    src={task.user.profileUrl}
                    alt={task.user.name}
                    className="w-8 h-8 rounded-full ring-2 ring-neutral-700 hover:ring-purple-500 transition-all duration-300"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-neutral-300">
                      {task.user.name}
                    </span>
                    <span className="text-xs text-neutral-500">Assignee</span>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 text-neutral-500">
                <Calendar className="w-4 h-4" />
                <span className="text-xs">
                  {new Date(task.assignedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
            {task.status === 'PENDING' && (
              <button
                onClick={() => onComplete(task.id)}
                className="px-4 py-2 text-sm font-medium text-green-400 hover:text-green-300 bg-green-900/20 hover:bg-green-900/30 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Complete Task
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamTasksDashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'PENDING' | 'COMPLETED'>('ALL');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/dashboard/tasks');
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  const handleComplete = async (taskId: string) => {
    try {
      const response = await axios.put(`/api/dashboard/tasks`, {
        taskId
      });
      
      if (response.status !== 200) throw new Error('Failed to update task');
      
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId 
            ? { ...task, status: 'COMPLETED' as const }
            : task
        )
      );
    } catch (err) {
      console.error('Error completing task:', err);
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = 
      task.taskTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.taskDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.user?.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filter === 'ALL' || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  const taskStats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'PENDING').length,
    completed: tasks.filter(t => t.status === 'COMPLETED').length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-neutral-600 border-t-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-400 bg-red-900/20 rounded-xl p-6">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span className="text-lg font-medium">{error}</span>
      </div>
    );
  }

  return (
    <Card className="bg-neutral-900/50 backdrop-blur-xl shadow-2xl border-neutral-700/50">
      <CardHeader className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <CardTitle className="text-3xl font-bold text-white tracking-tight mb-2">
              Team Tasks
            </CardTitle>
            <p className="text-neutral-400">Manage and track your team's tasks</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TaskStatCard 
            icon={Users} 
            label="Total Tasks" 
            value={taskStats.total}
            color="bg-blue-900/30 text-blue-400"
            bgColor="bg-blue-900/10"
          />
          <TaskStatCard 
            icon={Clock} 
            label="Pending Tasks" 
            value={taskStats.pending}
            color="bg-yellow-900/30 text-yellow-400"
            bgColor="bg-yellow-900/10"
          />
          <TaskStatCard 
            icon={CheckCircle2} 
            label="Completed Tasks" 
            value={taskStats.completed}
            color="bg-green-900/30 text-green-400"
            bgColor="bg-green-900/10"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search tasks by title, description or assignee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-neutral-500"
            />
          </div>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'ALL' | 'PENDING' | 'COMPLETED')}
              className="appearance-none px-4 py-3 pr-10 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white cursor-pointer min-w-[140px]"
            >
              <option value="ALL">All Tasks</option>
              <option value="PENDING">Pending</option>
              <option value="COMPLETED">Completed</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-6">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12 bg-neutral-800/30 rounded-xl border border-neutral-700/50">
              <Users className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
              <p className="text-lg font-medium text-neutral-400 mb-2">No tasks found</p>
              <p className="text-sm text-neutral-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onComplete={handleComplete}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamTasksDashboard;