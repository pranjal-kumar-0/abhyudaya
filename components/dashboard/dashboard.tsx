"use client";
import { 
  Plus, 
  ChevronDown,
  Search,
} from "lucide-react";
import DashboardCardPage from "./dashboard-card";

const DashboardPage = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [statusFilter, setStatusFilter] = useState("All");

  // const filteredProjects = projects.filter(project => {
  //   const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
  //   const matchesStatus = statusFilter === "All" || project.status === statusFilter;
  //   return matchesSearch && matchesStatus;
  // });

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-6 md:space-y-6">

      {/* Top Header */}
      <div className="rounded-3xl bg-blue-600 p-5 sm:p-8 md:p-10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
        <div className="md:space-y-2">
          <h1 className="text-xl md:text-4xl font-bold">My Research Projects</h1>
          <p className="text-sm sm:text-xl font-bold">Review applicants for your Research Projects</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base md:text-lg font-bold text-blue-600 bg-white hover:scale-105 rounded-lg shadow-sm transition-all grow sm:grow-0">
          <Plus className="size-6 sm:size-8" />
          Create new
        </button>
      </div>


      {/* Filter Bar */}
      <div className="px-2 md:px-6 py-4 flex items-start sm:items-center gap-4 bg-white rounded-lg md:shadow-sm border-none md:border-gray-200">
        {/* Search Bar */}
        <div className="relative flex-1 w-full sm:w-auto min-w-0 grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 md:w-full sm:w-auto">
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">Status:</span>
          <select
            className="flex-1 sm:flex-none px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Project List Table */}
      <main className="sm:px-6">
        {/* Table Header - Hidden on mobile */}
        <div className="hidden lg:grid grid-cols-12 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 px-2">
          <div className="col-span-6">Name</div>
          <div className="col-span-2">Applicants</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right pr-12">Researcher</div>
        </div>

        <DashboardCardPage/>

      </main>
    </div>
  );
}

export default DashboardPage