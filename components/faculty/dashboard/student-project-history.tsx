"use client";
import React from "react";
import { Calendar } from "lucide-react";

interface Project {
  id: string;
  title: string;
  facultyName: string;
  duration: string;
  status: "completed" | "ongoing";
  description: string;
}

interface ProjectHistoryProps {
  projects: Project[];
}

export default function ProjectHistory({ projects }: ProjectHistoryProps) {
  const getStatusBadge = (status: Project["status"]) => {
    const styles = {
      completed: "bg-emerald-50 text-emerald-600 border-emerald-100",
      ongoing: "bg-blue-50 text-[#3b71ca] border-blue-100",
    };
    return (
      <span className={`px-3 py-1 text-[11px] font-semibold rounded-md uppercase tracking-wider border ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Project History</h3>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#3b71ca]/30 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Guided by {project.facultyName}
                </p>
              </div>
              {getStatusBadge(project.status)}
            </div>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
              <Calendar size={14} />
              <span>{project.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}