"use client"
import React from 'react';
import { 
  FileText, 
  Share2, 
  Bookmark, 
  Download, 
  Calendar, 
  UserCircle,
  Image as ImageIcon,
  File,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface Attachment {
  type: 'image' | 'pdf' | 'file';
  url: string;
  name: string;
  size: string;
}

interface FeedDetailProps {
  id: string;
  facultyName: string;
  tags: string[];
  title: string;
  text: string;
  timestamp: string;
  attachments?: Attachment[];
  onApply?: () => void;
}

const FeedDetail: React.FC<FeedDetailProps> = ({ 
  id,
  facultyName,
  tags,
  title,
  text,
  timestamp,
  attachments,
  onApply
}) => {
  return (
    <div
      key={id}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm"
    >
      {/* 1. Header Section */}
      <div className="p-8 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight max-w-2xl">
            {title}
          </h1>
          <div className="flex gap-1">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all">
              <Share2 size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all">
              <Bookmark size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-2">
            <UserCircle size={18} className="text-[#3b71ca]" />
            <span className="font-medium text-gray-700">{facultyName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} strokeWidth={1.5} />
            <span>{timestamp}</span>
          </div>
        </div>

        <button
          onClick={onApply}
          className="px-8 py-3 bg-[#3b71ca] hover:bg-[#2c56a0] text-white font-bold rounded-lg shadow-md shadow-blue-200 transition-all flex items-center gap-2 w-fit cursor-pointer "
        >
          Apply Now
        </button>
      </div>

      {/* 2. Body Section */}
      <div className="p-8 space-y-12">
        <section>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Notice Overview</h3>
          <div className="text-gray-600 leading-relaxed text-[15px] space-y-4">
            {text.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {tags.length > 0 && (
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Qualifications & Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {attachments && attachments.length > 0 && (
          <section className="pb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Document Attachments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {attachments.map((file, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-4 border border-gray-100 bg-[#fcfdfe] rounded-xl hover:border-[#3b71ca]/30 hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm text-[#3b71ca]">
                      {file.type === 'pdf' ? <FileText size={20} className="text-red-500" /> : <File size={20} />}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-gray-800 truncate">{file.name}</p>
                      <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{file.size}</p>
                    </div>
                  </div>
                  <Download size={18} className="text-gray-300 group-hover:text-[#3b71ca] flex-shrink-0 transition-colors" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default FeedDetail;