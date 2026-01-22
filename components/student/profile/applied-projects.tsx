import React from 'react';
import {
  User,
  Calendar,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';

interface AppliedProject {
  id: string;
  title: string;
  facultyName: string;
  appliedDate: string;
  status: 'pending' | 'accepted' | 'rejected';
}

interface AppliedProjectsListProps {
  projects: AppliedProject[];
}

const AppliedProjectsList: React.FC<AppliedProjectsListProps> = ({ projects }) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'accepted':
        return {
          bg: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-200',
          icon: <CheckCircle2 size={14} className="mr-1.5" />
        };
      case 'rejected':
        return {
          bg: 'bg-red-50',
          text: 'text-red-700',
          border: 'border-red-200',
          icon: <XCircle size={14} className="mr-1.5" />
        };
      default:
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200',
          icon: <Clock size={14} className="mr-1.5" />
        };
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
        <h3 className="font-semibold text-gray-900">Applied Projects</h3>
      </div>

      <div className="divide-y divide-gray-100">
        {projects.length > 0 ? (
          projects.map((project) => {
            const style = getStatusStyle(project.status);
            return (
              <div key={project.id} className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                  {/* Left Side: Info */}
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{project.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <User size={14} className="text-gray-400" />
                        {project.facultyName}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-gray-400" />
                        {project.appliedDate}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Status Badge */}
                  <div className="flex items-center">
                    <span className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}>
                      {style.icon}
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>

                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center text-gray-500">
            No applications found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedProjectsList;