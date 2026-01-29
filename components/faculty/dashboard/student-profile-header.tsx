"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";

interface StudentProfileHeaderProps {
  studentName: string;
  regNumber: string;
  branch: string;
  onBack: () => void;
  onReject: () => void;
  onAccept: () => void;
}

export default function StudentProfileHeader({
  studentName,
  regNumber,
  branch,
  onBack,
  onReject,
  onAccept,
}: StudentProfileHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-[#3b71ca] transition-all mb-4 text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={14} />
          Back to Applicants
        </button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3b71ca] to-[#2d5a9e] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {studentName.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                {studentName}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm font-mono tracking-wide border border-gray-200">
                  {regNumber}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-600 font-medium">
                  {branch}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onReject}
              className="px-6 py-3 bg-white border-2 border-[#3b71ca] text-[#3b71ca] hover:bg-[#3b71ca] hover:text-white text-sm font-semibold rounded-lg transition-all"
            >
              Reject
            </button>
            <button
              onClick={onAccept}
              className="px-6 py-3 bg-[#3b71ca] hover:bg-[#2d5a9e] text-white text-sm font-semibold rounded-lg transition-all shadow-sm"
            >
              Accept Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}