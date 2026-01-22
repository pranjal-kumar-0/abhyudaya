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
    <div className="space-y-6">
      <div className="bg-blue-600 p-8 rounded-2xl text-white mb-8">
        <h3 className="text-xl font-bold">What skills are needed?</h3>
        <p className="opacity-80">Add keywords that help students find your post.</p>
      </div>

      <div className="p-4 border-2 border-gray-100 rounded-2xl focus-within:border-blue-400 transition-all min-h-[120px] flex flex-wrap gap-3 items-start">
        {formData.skills.map((skill) => (
          <span key={skill} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl flex items-center gap-2 font-bold animate-in zoom-in-95">
            {skill}
            <button onClick={() => setFormData({...formData, skills: formData.skills.filter(s => s !== skill)})}>
              <X size={16} className="hover:text-red-500 transition-colors" />
            </button>
          </span>
        ))}
        <input
          placeholder={formData.skills.length === 0 ? "Type a skill and press Enter..." : "Add more..."}
          className="flex-1 min-w-[200px] py-2 outline-none text-lg"
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