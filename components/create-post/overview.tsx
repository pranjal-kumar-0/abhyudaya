import { PostFormData } from "@/app/create-post/page";

type Props = {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
};

const OverviewPage = ({ formData, setFormData }: Props) => {
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Project Title</label>
        <input
          placeholder="e.g. Quantum Computing Simulation"
          className="w-full text-4xl font-black outline-none border-b-2 border-transparent focus:border-blue-600 transition-all pb-2 placeholder:text-gray-200"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-gray-500">Complexity Level</label>
        <div className="flex gap-3">
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <button
              key={level}
              onClick={() => setFormData({ ...formData, difficulty: level })}
              className={`px-6 py-2 rounded-full border-2 transition-all font-semibold ${
                formData.difficulty === level 
                ? "border-blue-600 bg-blue-50 text-blue-700" 
                : "border-gray-100 text-gray-400 hover:border-gray-200"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-500 mb-2">Description</label>
        <textarea
          placeholder="Tell students what this project is about..."
          className="w-full min-h-[250px] p-6 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-200 outline-none transition-all text-lg leading-relaxed"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
    </div>
  );
};

export default OverviewPage