"use client";
import React, { useState } from "react";
import { use } from "react";
import FacultySideNavBar from "@/components/common/faculty-sidenavbar";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ApplicantsList from "@/components/faculty/dashboard/applicants-list";

interface Student {
  id: string;
  name: string;
  regNumber: string;
  email: string;
  appliedDate: string;
  status: "pending" | "accepted" | "rejected";
}

export default function ProjectApplicantsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = use(params);
  const router = useRouter();

  const [projectData] = useState({
    title: "Machine Learning Research Project",
    totalApplicants: 12,
  });

  const [applicants] = useState<Student[]>([
    { id: "1", name: "Arjun Mehta", regNumber: "24BCE2076", email: "arjun.mehta@example.com", appliedDate: "15 Jan 2024", status: "pending" },
    { id: "2", name: "Priya Sharma", regNumber: "24BCE2145", email: "priya.sharma@example.com", appliedDate: "14 Jan 2024", status: "accepted" },
    { id: "3", name: "Rahul Kumar", regNumber: "24BCE2098", email: "rahul.kumar@example.com", appliedDate: "13 Jan 2024", status: "pending" },
    { id: "4", name: "Sneha Patel", regNumber: "24BCE2187", email: "sneha.patel@example.com", appliedDate: "12 Jan 2024", status: "rejected" },
  ]);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <FacultySideNavBar />

      <div className="flex-1 ml-20 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-12 py-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="space-y-1">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-gray-400 hover:text-[#3b71ca] transition-all mb-2 text-xs font-bold uppercase tracking-widest"
              >
                <ArrowLeft size={14} />
                Back
              </button>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Project Applicants
              </h1>
              <p className="text-gray-500 font-medium">
                {projectData.title}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 px-6 py-3 rounded-xl">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block text-right">Applicants</span>
              <span className="text-3xl font-bold text-[#3b71ca]">{projectData.totalApplicants}</span>
            </div>
          </div>
        </div>

        {/* Applicants List */}
        <ApplicantsList applicants={applicants} projectId={projectId} />
      </div>
    </div>
  );
}