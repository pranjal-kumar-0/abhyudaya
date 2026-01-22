"use client"
import React, { useState } from 'react';
import SideNavBar from '@/components/common/sidenavbar';
import { LogOut, Briefcase } from 'lucide-react';
import AppliedProjectsList from '@/components/student/profile/applied-projects';

const ProfilePage = () => {
  const [studentData] = useState({
    name: "Arjun Mehta",
    regNumber: "24BCE2076",
    level: "Intermediate",
    projectsWorked: 7,
    appliedProjects: [
      {
        id: '1',
        title: 'Machine Learning Research Project',
        facultyName: 'Dr. Priya Sharma',
        appliedDate: '15 Jan 2024',
        status: 'accepted' as const,
      },
      {
        id: '2',
        title: 'Web Development Project',
        facultyName: 'Prof. Rajesh Kumar',
        appliedDate: '18 Jan 2024',
        status: 'pending' as const,
      },
      {
        id: '3',
        title: 'Data Structures Project',
        facultyName: 'Dr. Ananya Desai',
        appliedDate: '10 Jan 2024',
        status: 'rejected' as const,
      }
    ]
  });

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      <SideNavBar />
      
      <div className="flex-1 ml-20 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Area */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">My Profile</h1>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-gray-500 transition-colors flex items-center gap-2"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>

          {/* Main Profile Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Identity Card */}
            <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md shrink-0">
                {studentData.name.charAt(0)}
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{studentData.name}</h2>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm font-mono tracking-wide border border-gray-200">
                    {studentData.regNumber}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-gray-600 font-medium">
                    Level: <span className="text-gray-900">{studentData.level}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Stat Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Briefcase size={18} />
                <span className="text-sm font-medium">Projects Worked</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">{studentData.projectsWorked}</p>
            </div>
          </div>

          <AppliedProjectsList projects={studentData.appliedProjects} />

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;