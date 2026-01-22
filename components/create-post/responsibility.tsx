import { Layers, CheckCircle2 } from "lucide-react";
import { PostFormData } from "@/app/create-post/page";

type Props = {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
};

const ResponsibilityPage = ({ formData, setFormData }: Props) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
          <Layers size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Student Responsibilities</h3>
          <p className="text-gray-500 mt-1">
            Define the specific tasks and expectations for the research assistant.
          </p>
        </div>
      </div>

      {/* Input Area */}
      <div className="relative group">
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
          Expectations & Deliverables
        </label>
        <textarea
          placeholder="Example:
• Conduct weekly literature reviews
• Maintain the project's Python codebase
• Assist in drafting the final research paper"
          className="w-full min-h-[300px] p-6 bg-gray-50 border-2 border-gray-100 rounded-[24px] 
                     focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 
                     outline-none transition-all text-lg leading-relaxed text-gray-700 
                     placeholder:text-gray-300 resize-none"
          value={formData.responsibilities}
          onChange={(e) =>
            setFormData({
              ...formData,
              responsibilities: e.target.value,
            })
          }
        />
        
        {/* Helper Tip */}
        <div className="absolute bottom-4 right-6 flex items-center gap-2 text-gray-400 text-sm pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
          <CheckCircle2 size={14} className="text-green-500" />
          <span>Bullet points work best for clarity</span>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityPage;