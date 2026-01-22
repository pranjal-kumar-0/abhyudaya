import { 
  Star, 
  MoreVertical, 
  FlaskConical 
} from "lucide-react";

const DashboardCardPage = () => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-12 items-center py-5 px-4 gap-8 hover:bg-gray-200 transition-all duration-200 group cursor-pointer rounded-lg mx-2 mb-2 hover:shadow-md">
        {/* Project Info */}
        <div className="col-span-1 md:col-span-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm border border-emerald-200/50">
                <FlaskConical size={24} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-blue-900 transition-colors">Quantum Computing Simulation</h3>
        </div>

        {/* Applicants - Mobile: Inline | Desktop: Column */}
        <div className="col-span-1 md:col-span-2 mt-3 md:mt-0 pl-16 md:pl-0">
            <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
            <span className="md:hidden text-sm text-gray-600">Applicants:</span>
            <span className="text-base font-semibold text-gray-900">12 Students</span>
            </div>
        </div>

        {/* Date - Desktop Only */}
          <div className="hidden md:block col-span-2">
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wide shadow-sm">Active</span>
          </div>

        {/* Owner & Actions */}
        <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-3 md:pr-4 pl-16 md:pl-0">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xs text-white font-bold shadow-sm">AT</div>
                <span className="text-sm font-medium text-gray-900 whitespace-nowrap">Aris Thorne</span>
            </div>
            
            <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-amber-50 rounded-lg text-gray-500 hover:text-amber-500 transition-colors">
                <Star size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700 transition-colors">
                <MoreVertical size={18} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashboardCardPage