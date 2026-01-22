"use client"
import React, { useState, ReactNode } from 'react';
import { Clock, Tag } from 'lucide-react';
import FeedDetail from '@/components/student/feed/feed-detail';

interface Attachment {
  type: 'image' | 'pdf' | 'file';
  url: string;
  name: string;
  size: string;
}

interface FeedItem {
  id: string;
  facultyName: string;
  tags: string[];
  title: string;
  text: string;
  timestamp: string;
  attachments?: Attachment[];
}

const SidebarCard = ({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: FeedItem; 
  isActive: boolean; 
  onClick: () => void 
}) => (
  <div 
    onClick={onClick}
    className={`p-6 cursor-pointer border-b transition-all duration-200 ${
      isActive 
      ? 'bg-blue-50/50 border-l-4 border-l-[#3b71ca] border-b-gray-100' 
      : 'bg-white border-l-4 border-l-transparent hover:bg-gray-50/50 border-b-gray-100'
    }`}
  >
    {/* Title */}
    <h3 className={`font-bold text-base mb-3 line-clamp-2 leading-snug ${
      isActive ? 'text-[#3b71ca]' : 'text-gray-900'
    }`}>
      {item.title}
    </h3>
    
    {/* Faculty Name */}
    <p className="text-sm text-gray-600 font-medium mb-4">{item.facultyName}</p>
    
    {/* Tags - Show first 2 */}
    {item.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.slice(0, 2).map(tag => (
          <span 
            key={tag}
            className={`px-3 py-1 text-xs font-semibold rounded-md ${
              isActive 
              ? 'bg-blue-100 text-[#3b71ca]' 
              : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tag}
          </span>
        ))}
        {item.tags.length > 2 && (
          <span className="px-3 py-1 text-xs font-semibold rounded-md bg-gray-100 text-gray-500">
            +{item.tags.length - 2}
          </span>
        )}
      </div>
    )}
    
    {/* Bottom Meta Info */}
    <div className="flex items-center justify-between text-xs text-gray-400">
      <span className="flex items-center gap-1.5">
        <Clock size={14} strokeWidth={2.5} />
        {item.timestamp}
      </span>
      {item.attachments && item.attachments.length > 0 && (
        <span className="flex items-center gap-1.5 text-gray-500">
          <Tag size={14} />
          {item.attachments.length} attachment{item.attachments.length > 1 ? 's' : ''}
        </span>
      )}
    </div>
  </div>
);

interface FeedPageProps {
  sideNavBar: ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
}

const FeedPage = ({ 
  sideNavBar, 
  headerTitle = "Faculty Feed",
  headerSubtitle = "Latest updates from your professors"
}: FeedPageProps) => {
  const [items] = useState<FeedItem[]>([
    {
      id: '1',
      facultyName: "Dr. Priya Sharma",
      tags: ["Computer Science", "Important"],
      title: "Assignment 3 Deadline Extended",
      text: "Dear Students,\n\nDue to the upcoming festival holidays, the deadline for Assignment 3 (Data Structures) has been extended to November 15th, 2024.\n\nPlease ensure you submit your work on time. No further extensions will be granted.",
      timestamp: "2 hours ago",
      attachments: [
        {
          type: 'pdf',
          url: '/assignment.pdf',
          name: 'Assignment_3_Requirements.pdf',
          size: '245 KB'
        }
      ]
    },
    {
      id: '2',
      facultyName: "Prof. Rajesh Kumar",
      tags: ["Mathematics", "Lecture Notes"],
      title: "Linear Algebra - Week 5 Notes",
      text: "Hello everyone,\n\nAttached are the notes from today's lecture on Eigenvalues and Eigenvectors. Please review them before our next class.\n\nPractice problems are included at the end.",
      timestamp: "5 hours ago",
      attachments: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
          name: 'lecture_notes.jpg',
          size: '1.2 MB'
        },
        {
          type: 'pdf',
          url: '/notes.pdf',
          name: 'Week_5_Linear_Algebra_Notes.pdf',
          size: '892 KB'
        }
      ]
    },
    {
      id: '3',
      facultyName: "Dr. Ananya Desai",
      tags: ["Physics", "Announcement"],
      title: "Lab Schedule Change",
      text: "Important Notice:\n\nThe physics lab scheduled for Thursday has been moved to Friday, 2:00 PM - 5:00 PM in Lab Room 204.\n\nPlease bring your lab manuals and safety equipment.",
      timestamp: "1 day ago"
    },
    {
      id: '4',
      facultyName: "Prof. Vikram Singh",
      tags: ["English", "Literature", "Assignment"],
      title: "Shakespeare Essay Guidelines",
      text: "Students,\n\nYour final essay on Shakespearean tragedies is due next month. I've attached the complete guidelines and rubric.\n\nWord limit: 2000-2500 words\nCitation style: MLA 9th edition\n\nFeel free to reach out during office hours if you have questions.",
      timestamp: "2 days ago",
      attachments: [
        {
          type: 'file',
          url: '/guidelines.docx',
          name: 'Essay_Guidelines_Shakespeare.docx',
          size: '156 KB'
        },
        {
          type: 'pdf',
          url: '/rubric.pdf',
          name: 'Grading_Rubric.pdf',
          size: '89 KB'
        }
      ]
    },
    {
      id: '5',
      facultyName: "Dr. Meera Patel",
      tags: ["Chemistry", "Exam"],
      title: "Mid-term Exam Pattern",
      text: "Dear Class,\n\nThe mid-term examination will cover chapters 1-6. The exam pattern will be:\n\n• 40% - Multiple Choice Questions\n• 30% - Short Answer Questions\n• 30% - Numerical Problems\n\nDuration: 2 hours\nDate: November 20th, 2024",
      timestamp: "3 days ago",
      attachments: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
          name: 'exam_schedule.jpg',
          size: '654 KB'
        }
      ]
    }
  ]);

  const [selectedId, setSelectedId] = useState(items[0].id);
  const activeItem = items.find(i => i.id === selectedId) || items[0];

  return (
    <div className="flex h-screen bg-[#f0f2f5] overflow-hidden">
      {sideNavBar}
      
      {/* Left Sidebar */}
      <div className="w-87.5 flex flex-col bg-white border-r border-gray-200 overflow-hidden ml-20">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-100 bg-white">
          <h2 className="font-bold text-gray-900 text-2xl mb-1">{headerTitle}</h2>
          <p className="text-sm text-gray-500">{headerSubtitle}</p>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {items.map(item => (
            <SidebarCard 
              key={item.id} 
              item={item} 
              isActive={selectedId === item.id} 
              onClick={() => setSelectedId(item.id)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
        <FeedDetail {...activeItem} />
      </div>
    </div>
  );
};

export default FeedPage;
