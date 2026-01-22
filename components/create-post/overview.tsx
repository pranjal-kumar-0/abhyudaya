import { PostFormData } from "@/app/faculty/create-post/page";

type Props = {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
};

const OverviewPage = ({ formData, setFormData }: Props) => {
  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-0">
      <div>
        <label className="block text-lg md:text-xl font-bold text-gray-900 uppercase md:tracking-widest mb-2 md:mb-3">
          Project Title
        </label>
        <input
          placeholder="e.g. Quantum Computing"
          className="w-full text-xl sm:text-2xl md:text-4xl font-black outline-none border-b-2 border-gray-400 focus:border-blue-600 transition-all pb-2 placeholder:text-gray-300 break-words"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg md:text-xl font-bold text-gray-900 uppercase md:tracking-widest">
          Complexity Level
        </label>
        
        <div className="hidden md:flex gap-3">
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <button
              key={level}
              onClick={() => setFormData({ ...formData, difficulty: level })}
              className={`px-6 py-2 rounded-full border-2 transition-all font-semibold ${
                formData.difficulty === level 
                ? "border-blue-600 bg-blue-50 text-blue-700" 
                : "border-gray-400 text-gray-500 hover:border-gray-300"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <select
          className="md:hidden w-full px-4 py-3 border-2 border-gray-400 rounded-lg bg-white text-gray-900 font-semibold outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"
          value={formData.difficulty}
          onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
        >
          <option value="">Select difficulty level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block text-lg md:text-xl font-bold text-gray-900 uppercase md:tracking-widest mb-2 md:mb-3">
          Description
        </label>
        <textarea
          placeholder="Tell students what this project is about..."
          className="w-full min-h-60 md:min-h-70 p-4 md:p-6 bg-gray-50 border-2 border-gray-400 rounded-xl md:rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all text-base md:text-lg leading-relaxed"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
    </div>
  );
};

export default OverviewPage;