import { 
  Star, 
  MoreVertical, 
  FlaskConical 
} from "lucide-react";

const DashboardCardPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-slate-300 items-center py-4 sm:py-5 px-4 gap-2 sm:gap-6 md:gap-8 hover:bg-gray-200 transition-all duration-200 group cursor-pointer rounded-2xl mx-2 mb-2 hover:shadow-md md:border-none">
        {/* Project Info */}
        <div className="col-span-1 md:col-span-6 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm border border-emerald-200/50">
                <FlaskConical size={20} />
            </div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 group-hover:text-blue-900 transition-colors">Quantum Computing Simulation</h3>
        </div>

        {/* Applicants - Mobile: Inline | Desktop: Column */}
        <div className="col-span-1 md:col-span-2 mt-2 sm:mt-3 md:mt-0">
            <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
            <span className="md:hidden text-xs sm:text-sm text-gray-600">Applicants:</span>
            <span className="text-sm sm:text-base font-semibold text-gray-900">12 Students</span>
            </div>
        </div>

        {/* Date - Desktop Only */}
          <div className="hidden md:block col-span-2">
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wide shadow-sm">Active</span>
          </div>

        {/* Owner & Actions */}
        <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-4 sm:gap-6 mt-3 sm:mt-4 md:mt-0">
            <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xs text-white font-bold shadow-sm">AT</div>
                <span className="text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">Aris Thorne</span>
            </div>
            
            <div className="flex items-center gap-1">
                <button className="p-1.5 sm:p-2 hover:bg-amber-50 rounded-lg text-gray-500 hover:text-amber-500 transition-colors">
                <Star size={16} />
                </button>
                <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700 transition-colors">
                <MoreVertical size={16} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashboardCardPage