import { Upload } from "lucide-react";
import { PostFormData } from "@/app/faculty/create-post/page";

type Props = {
  formData: PostFormData;
  setFormData: React.Dispatch<React.SetStateAction<PostFormData>>;
};

const AttachFilePage = ({ formData, setFormData }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-10 px-4">
      <label className="group relative w-full max-w-lg border-2 md:border-4 border-dashed border-gray-400 rounded-2xl md:rounded-4xl p-8 md:p-16 flex flex-col items-center gap-4 md:gap-6 cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-all">
        <div className="bg-blue-100 p-4 md:p-6 rounded-2xl md:rounded-3xl text-blue-600 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-base md:text-xl font-bold text-gray-900 break-words px-2">
            {formData.file ? formData.file.name : "Upload Project Brief"}
          </p>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            PDF, DOCX or Images up to 10MB
          </p>
        </div>
        {formData.file && (
          <button 
            onClick={(e) => { e.preventDefault(); setFormData({...formData, file: null}); }}
            className="text-red-500 font-bold text-xs md:text-sm hover:underline"
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