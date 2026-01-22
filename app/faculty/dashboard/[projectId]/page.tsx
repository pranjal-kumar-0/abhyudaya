"use client";
import React, { useState } from "react";
import { use } from "react";
import FacultySideNavBar from "@/components/common/faculty-sidenavbar";
import { ArrowLeft, Mail, Calendar, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

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

  const getStatusBadge = (status: Student["status"]) => {
    const styles = {
      pending: "bg-amber-50 text-amber-600 border-amber-100",
      accepted: "bg-blue-50 text-[#3b71ca] border-blue-100",
      rejected: "bg-rose-50 text-rose-600 border-rose-100",
    };
    return (
      <span className={`px-3 py-1 text-[11px] font-semibold rounded-md uppercase tracking-wider border ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <FacultySideNavBar />

      <div className="flex-1 ml-20 flex flex-col overflow-hidden">
        {/* Wider, Cleaner Header */}
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

        {/* List Content - Expanded width */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              {applicants.map((student) => (
                <div
                  key={student.id}
                  onClick={() => router.push(`/faculty/students/${student.id}`)}
                  className="group flex items-center justify-between p-7 cursor-pointer hover:bg-[#3b71ca]/[0.02] transition-all border-b border-gray-100 last:border-0 border-l-4 border-l-transparent hover:border-l-[#3b71ca]"
                >
                  <div className="flex-1 grid grid-cols-3 items-center gap-8">
                    {/* Column 1: Identity */}
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#3b71ca] transition-colors leading-tight">
                        {student.name}
                      </h3>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                        {student.regNumber}
                      </p>
                    </div>

                    {/* Column 2: Contact (Middle space filled) */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <Mail size={15} className="text-gray-300" />
                      {student.email}
                    </div>

                    {/* Column 3: Timeline & Status */}
                    <div className="flex items-center justify-end gap-10">
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <Calendar size={15} />
                        {student.appliedDate}
                      </div>
                      <div className="w-24 flex justify-end">
                        {getStatusBadge(student.status)}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="ml-10">
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-[#3b71ca] transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {applicants.length === 0 && (
              <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-24 text-center">
                <p className="font-medium text-gray-400 text-lg">
                  No students have applied to this project yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}