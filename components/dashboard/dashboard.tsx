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
    <div className="min-h-screen bg-slate-50 font-sans p-6 space-y-6">

      {/* Top Header */}
      <div className="rounded-3xl bg-blue-600 p-10 text-white flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">My Research Projects</h1>
          <p className="text-xl font-bold">Review applicants for your Research Projects</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-bold text-blue-600 bg-white hover:scale-105 rounded-lg shadow-sm transition-all grow md:grow-0">
          <Plus className="size-8" />
          Create new
        </button>
      </div>


      {/* Filter Bar */}
      <div className="px-4 md:px-6 py-2 flex flex-wrap items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 min-w-50">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search projects..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <span className="text-md font-medium text-gray-600">Status:</span>
          <select
            // value={statusFilter}
            // onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Project List Table */}
      <main className="px-4 md:px-6">
        {/* Table Header - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-12 py-4 text-md font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 px-2">
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