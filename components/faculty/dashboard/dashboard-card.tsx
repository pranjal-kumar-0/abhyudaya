"use client";
import { MoreVertical, Users, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  projectId: string;
  title: string;
  applicants: number;
  status: "Active" | "Inactive";
  owner: string;
  ownerInitials: string;
}

const DashboardCardPage = ({ projectId, title, applicants, status, owner, ownerInitials }: CardProps) => {
  const isActive = status === "Active";

  return (
    <Link href={`/faculty/dashboard/${projectId}`}>
      <div
        className="group flex items-center justify-between p-7 cursor-pointer hover:bg-[#3b71ca]/[0.02] transition-all 
                   border-b border-gray-100 last:border-0 border-l-4 border-l-transparent hover:border-l-[#3b71ca]"
      >
        <div className="flex-1 grid grid-cols-3 items-center gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#3b71ca] transition-colors">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Users size={16} className="text-gray-300" />
            {applicants} Students Applied
          </div>

          <div className="flex items-center justify-end gap-10">
            <span
              className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md border ${
                isActive
                  ? "bg-blue-50 text-[#3b71ca] border-blue-100"
                  : "bg-gray-50 text-gray-500 border-gray-100"
              }`}
            >
              {status}
            </span>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-bold">
                {ownerInitials}
              </div>
              <span className="text-sm font-medium text-gray-600">{owner}</span>
            </div>
          </div>
        </div>

        <div className="ml-10 flex items-center gap-3">
          <button 
            onClick={(e) => e.preventDefault()}
            className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
          >
            <MoreVertical size={18} />
          </button>

          <ChevronRight
            size={18}
            className="text-gray-300 group-hover:text-[#3b71ca] transition-all transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default DashboardCardPage;