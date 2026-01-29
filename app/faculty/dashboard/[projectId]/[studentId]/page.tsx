"use client";
import React, { useState } from "react";
import { use } from "react";
import FacultySideNavBar from "@/components/common/faculty-sidenavbar";
import { Mail, Calendar, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import StudentProfileHeader from "@/components/faculty/dashboard/student-profile-header";
import ProjectHistory from "@/components/faculty/dashboard/student-project-history";

interface Project {
  id: string;
  title: string;
  facultyName: string;
  duration: string;
  status: "completed" | "ongoing";
  description: string;
}

export default function StudentProfilePage({
  params,
}: {
  params: Promise<{ projectId: string; studentId: string }>;
}) {
  const { projectId, studentId } = use(params);
  const router = useRouter();

  // Mock student data will be fetched from API later
  const [studentData] = useState({
    name: "Arjun Mehta",
    regNumber: "24BCE2076",
    email: "arjun.mehta@example.com",
    level: "Intermediate",
    branch: "Computer Science Engineering",
    semester: "5th Semester",
    projectsCompleted: 5,
    projectsOngoing: 2,
    bio: "Passionate about machine learning and artificial intelligence. Currently exploring deep learning frameworks and their applications in real-world problems.",
    skills: ["Python", "Machine Learning", "TensorFlow", "React", "Node.js", "Data Analysis"],
    projects: [
      {
        id: "1",
        title: "Neural Network Optimization",
        facultyName: "Dr. Priya Sharma",
        duration: "Aug 2024 - Dec 2024",
        status: "completed" as const,
        description: "Developed optimization algorithms for neural networks to improve training efficiency.",
      },
      {
        id: "2",
        title: "Climate Data Analysis",
        facultyName: "Prof. Rajesh Kumar",
        duration: "Jan 2024 - Present",
        status: "ongoing" as const,
        description: "Analyzing climate data patterns using machine learning techniques.",
      },
      {
        id: "3",
        title: "Web Application Development",
        facultyName: "Dr. Ananya Desai",
        duration: "Mar 2024 - Jun 2024",
        status: "completed" as const,
        description: "Built a full-stack web application for student management system.",
      },
    ],
  });

  const handleReject = () => {
    console.log("Rejecting application...");
  };

  const handleAccept = () => {
    console.log("Accepting application...");
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <FacultySideNavBar />

      <div className="flex-1 ml-20 flex flex-col overflow-hidden">
        <StudentProfileHeader
          studentName={studentData.name}
          regNumber={studentData.regNumber}
          branch={studentData.branch}
          onBack={() => router.back()}
          onReject={handleReject}
          onAccept={handleAccept}
        />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-12">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Briefcase size={18} />
                  <span className="text-sm font-medium">Completed</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{studentData.projectsCompleted}</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Briefcase size={18} />
                  <span className="text-sm font-medium">Ongoing</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{studentData.projectsOngoing}</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">Level</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{studentData.level}</p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-gray-400" />
                      <span className="text-gray-600">{studentData.email}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Academic Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Semester</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{studentData.semester}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {studentData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-[#3b71ca] text-xs font-semibold rounded-md border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects & Bio */}
              <div className="col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">{studentData.bio}</p>
                </div>

                <ProjectHistory projects={studentData.projects} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}