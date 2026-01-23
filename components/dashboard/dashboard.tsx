"use client";

import React, { ReactNode } from "react";
import { Plus } from "lucide-react";
import DashboardCardPage from "./dashboard-card";
import Link from "next/link";

interface DashboardPageProps {
  sideNavBar: ReactNode;
}

const DashboardPage = ({ sideNavBar }: DashboardPageProps) => {
  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {sideNavBar}

      <div className="flex-1 ml-20 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-12 py-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                My Research Projects
              </h1>
              <p className="text-gray-500 font-medium mt-1">
                Review and manage applicants for your active research initiatives
              </p>
            </div>
            <Link href={"/faculty/create-post"}>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#3b71ca] hover:bg-[#2d5a9e] text-white text-sm font-semibold rounded-lg transition-all shadow-sm cursor-pointer">
                <Plus size={18} />
                Create Project
              </button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <DashboardCardPage 
                projectId="1"
                title="Quantum Computing Simulation"
                applicants={12}
                status="Active"
                owner="Aris Thorne"
                ownerInitials="AT"
              />
              <DashboardCardPage 
                projectId="2"
                title="Neural Network Optimization"
                applicants={8}
                status="Active"
                owner="Aris Thorne"
                ownerInitials="AT"
              />
              <DashboardCardPage 
                projectId="3"
                title="Climate Data Analysis"
                applicants={0}
                status="Inactive"
                owner="Aris Thorne"
                ownerInitials="AT"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;