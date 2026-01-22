import { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";
import { PostFormData } from "@/app/create-post/page";

type Props = {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
};

const SkillsetPage = ({ formData, setFormData }: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-0">
      <label className="block text-lg md:text-xl font-bold text-gray-900 uppercase md:tracking-widest mb-3">
        What skills are needed?
      </label>

      <div className="w-full py-3 px-4 md:py-4 md:px-6 bg-gray-50 border-2 border-gray-400 rounded-xl md:rounded-2xl focus-within:bg-white transition-all min-h-60 md:min-h-70 flex flex-wrap gap-2 md:gap-3 items-start leading-relaxed">
        {formData.skills.map((skill) => (
          <span 
            key={skill} 
            className="bg-blue-50 text-blue-700 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl flex items-center gap-2 text-sm md:text-base font-bold"
          >
            {skill}
            <button 
              onClick={() => setFormData({...formData, skills: formData.skills.filter(s => s !== skill)})}
              className="hover:text-red-500 transition-colors"
            >
              ✕
            </button>
          </span>
        ))}
        <input
          placeholder={formData.skills.length === 0 ? "Type and press Enter" : "Add more..."}
          className="flex-1 min-w-[120px] sm:min-w-[180px] py-2 outline-none text-base md:text-lg bg-transparent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const val = input.trim();
              if (val && !formData.skills.includes(val)) {
                setFormData({ ...formData, skills: [...formData.skills, val] });
                setInput("");
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default SkillsetPage