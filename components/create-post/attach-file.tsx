import { Upload } from "lucide-react";
import { PostFormData } from "@/app/create-post/page";

type Props = {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
};

const AttachFilePage = ({ formData, setFormData }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <label className="group relative w-full max-w-lg border-4 border-dashed border-gray-100 rounded-[32px] p-16 flex flex-col items-center gap-6 cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-all">
        <div className="bg-blue-100 p-6 rounded-3xl text-blue-600 group-hover:scale-110 transition-transform">
          <Upload size={40} />
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900">
            {formData.file ? formData.file.name : "Upload Project Brief"}
          </p>
          <p className="text-gray-400 mt-1">PDF, DOCX or Images up to 10MB</p>
        </div>
        {formData.file && (
          <button 
            onClick={(e) => { e.preventDefault(); setFormData({...formData, file: null}); }}
            className="text-red-500 font-bold text-sm hover:underline"
          >
            Remove file
          </button>
        )}
        <input
          type="file"
          hidden
          onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
        />
      </label>
    </div>
  );
};

export default AttachFilePage