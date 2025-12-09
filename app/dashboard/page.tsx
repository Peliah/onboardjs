'use client';

import React, { useState } from 'react';
import {
  Plus,
  Zap,
  BarChart3,
  Code,
  Play,
  Home,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  HelpCircle,
  Layers,
  Cog,
  Users,
} from 'lucide-react';
import StatCard from '@/components/dashboard/stat-card';
import { Tour } from '@/types/dashboard/tour';
import TourItem from '@/components/dashboard/tour-item';
import StepBuilder from '@/components/dashboard/step-builder';
import AnalyticsDashboard from '@/components/dashboard/analytics-dashboard';
import EmbedSection from '@/components/dashboard/embed-section';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState('tours');

  const [tours, setTours] = useState([
    {
      id: 1,
      name: 'Welcome Flow',
      description: 'Initial user greeting and product introduction',
      status: 'live',
      steps: 5,
      created: '2024-11-15',
      views: 2847,
      completions: 2142,
      color: 'from-cyan-400 via-blue-500 to-purple-600',
    },
    {
      id: 2,
      name: 'Payment Setup',
      description: 'Guide through billing configuration',
      status: 'live',
      steps: 5,
      created: '2024-11-08',
      views: 1523,
      completions: 987,
      color: 'from-orange-400 via-red-500 to-pink-600',
    },
    {
      id: 3,
      name: 'Team Collaboration',
      description: 'Invite and manage team members',
      status: 'paused',
      steps: 5,
      created: '2024-10-22',
      views: 456,
      completions: 234,
      color: 'from-green-400 via-emerald-500 to-teal-600',
    },
  ]);

  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleDeleteTour = (id: number) => {
    setTours(tours.filter((t) => t.id !== id));
    setSelectedTour(null);
  };

  const SidebarNav = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'tours', label: 'Tours', icon: Layers, badge: tours.length },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'integrations', label: 'Integrations', icon: Code },
    { id: 'team', label: 'Team', icon: Users },
  ];

  const SidebarSettings = [
    { id: 'settings', label: 'Settings', icon: Cog },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col fixed h-screen z-40`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h1 className="text-2xl font-black tracking-tight">TOURS</h1>
              <p className="text-gray-500 text-xs mt-1">Dashboard</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {SidebarNav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setExpandedMenu(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group relative"
              >
                <Icon size={20} className="shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto text-xs font-bold px-2 py-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Bottom */}
        <div className="border-t border-gray-800 p-4 space-y-2">
          {SidebarSettings.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
              >
                <Icon size={20} className="shrink-0" />
                {sidebarOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200">
            <LogOut size={20} className="shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`${sidebarOpen ? 'ml-64' : 'ml-20'} flex-1 transition-all duration-300`}
      >
        {/* Header */}
        <header className="border-b border-gray-800 sticky top-0 z-30 bg-black/50 backdrop-blur-sm">
          <div className="px-8 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black tracking-tight">
                {selectedTour ? selectedTour.name : 'TOURS'}
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                {selectedTour
                  ? selectedTour.description
                  : 'Manage your user onboarding experiences'}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search tours..."
                  className="bg-transparent border-0 ml-2 text-sm text-white placeholder-gray-500 focus:outline-none w-48"
                />
              </div>
              <button
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors relative"
                aria-label="alerts"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-pink-400 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"></div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {!selectedTour ? (
            <>
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard
                  label="Total Tours"
                  value={tours.length.toString()}
                  icon={Zap}
                  color="bg-linear-to-br from-cyan-500 to-blue-600"
                />
                <StatCard
                  label="Live Tours"
                  value={tours
                    .filter((t) => t.status === 'live')
                    .length.toString()}
                  icon={Play}
                  color="bg-linear-to-br from-green-500 to-emerald-600"
                />
                <StatCard
                  label="Total Views"
                  value={tours
                    .reduce((acc, t) => acc + t.views, 0)
                    .toLocaleString()}
                  icon={BarChart3}
                  color="bg-linear-to-br from-orange-500 to-red-600"
                />
                <StatCard
                  label="Avg Completion"
                  value={
                    Math.round(
                      tours.reduce(
                        (acc, t) => acc + (t.completions / t.views) * 100,
                        0
                      ) / tours.length
                    ) + '%'
                  }
                  icon={Zap}
                  color="bg-linear-to-br from-purple-500 to-pink-600"
                />
              </div>

              {/* Tours Grid */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black uppercase tracking-wider">
                    Your Tours
                  </h2>
                  <button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center gap-2 uppercase tracking-wider text-sm">
                    <Plus size={20} />
                    New Tour
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tours.map((tour) => (
                    <TourItem
                      key={tour.id}
                      tour={tour}
                      isSelected={false}
                      setSelectedTour={setSelectedTour}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Tour Detail */}
              <div className="mb-12">
                <button
                  onClick={() => setSelectedTour(null)}
                  className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 text-sm uppercase tracking-wider font-bold"
                >
                  ← Back
                </button>

                <div className="flex items-start justify-between gap-8 mb-8">
                  <div className="flex-1">
                    <h2 className="text-5xl font-black mb-3 uppercase tracking-tighter">
                      {selectedTour.name}
                    </h2>
                    <p className="text-gray-400 text-lg">
                      {selectedTour.description}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-200 ${
                        selectedTour.status === 'live'
                          ? 'bg-red-600/20 text-red-400 border border-red-600/50 hover:bg-red-600/30'
                          : 'bg-green-600/20 text-green-400 border border-green-600/50 hover:bg-green-600/30'
                      }`}
                    >
                      {selectedTour.status === 'live' ? 'Pause' : 'Go Live'}
                    </button>
                    <button
                      onClick={() => handleDeleteTour(selectedTour.id)}
                      className="bg-red-600/20 text-red-400 border border-red-600/50 hover:bg-red-600/30 px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-8 border-b border-gray-800 mb-12 overflow-x-auto">
                  {['overview', 'steps', 'analytics', 'embed'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 font-bold uppercase tracking-wider text-sm border-b-2 transition-all duration-200 whitespace-nowrap ${
                        activeTab === tab
                          ? 'border-purple-500 text-white'
                          : 'border-transparent text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {tab === 'overview'
                        ? 'Overview'
                        : tab === 'steps'
                          ? 'Steps'
                          : tab === 'analytics'
                            ? 'Analytics'
                            : 'Embed'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                      Created
                    </p>
                    <p className="text-2xl font-black text-white">
                      {selectedTour.created}
                    </p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                      Steps
                    </p>
                    <p className="text-2xl font-black text-white">
                      {selectedTour.steps}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'steps' && <StepBuilder tour={selectedTour} />}
              {activeTab === 'analytics' && (
                <AnalyticsDashboard tour={selectedTour} />
              )}
              {activeTab === 'embed' && <EmbedSection tour={selectedTour} />}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
