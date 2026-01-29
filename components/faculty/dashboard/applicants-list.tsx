"use client";
import React from "react";
import Link from "next/link";
import { Mail, Calendar, ChevronRight } from "lucide-react";

interface Student {
  id: string;
  name: string;
  regNumber: string;
  email: string;
  appliedDate: string;
  status: "pending" | "accepted" | "rejected";
}

interface ApplicantsListProps {
  applicants: Student[];
  projectId: string;
}

export default function ApplicantsList({ applicants, projectId }: ApplicantsListProps) {
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
    <div className="flex-1 overflow-y-auto custom-scrollbar p-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {applicants.map((student) => (
            <Link
              key={student.id}
              href={`/faculty/dashboard/${projectId}/${student.id}`}
            >
              <div
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

                  {/* Column 2: Contact */}
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

                <div className="ml-10">
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-[#3b71ca] transition-all transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {applicants.length === 0 && (
          <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-24 text-center">
            <p className="font-medium text-gray-400 text-lg">
              No students have applied to this project yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}