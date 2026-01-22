import { Layers, CheckCircle2 } from "lucide-react";
import { PostFormData } from "@/app/create-post/page";

type Props = {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
};

const ResponsibilityPage = ({ formData, setFormData }: Props) => {
  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-0">
      <label className="block text-lg md:text-xl font-bold text-gray-900 uppercase md:tracking-widest mb-3">
        Student Responsibilities
      </label>

      <div className="relative group">
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">
          Expectations & Deliverables
        </label>
        <textarea
          placeholder="Example:
          • Maintain the codebase
          • Draft research paper"
          className="w-full min-h-60 md:min-h-70 p-4 md:p-6 bg-gray-50 border-2 border-gray-400 rounded-xl md:rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all text-base md:text-lg leading-relaxed placeholder:text-gray-400 resize-none"
          value={formData.responsibilities}
          onChange={(e) =>
            setFormData({
              ...formData,
              responsibilities: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default ResponsibilityPage;