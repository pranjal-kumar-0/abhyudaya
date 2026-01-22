import { useState } from "react";
import { ArrowLeft, Send, ChevronRight, ChevronLeft } from "lucide-react";

import StepperPage from "@/components/create-post/stepper";
import OverviewPage from "@/components/create-post/overview";
import SkillsetPage from "@/components/create-post/skillset";
import ResponsibilityPage from "@/components/create-post/responsibility";
import AttachFilePage from "@/components/create-post/attach-file";

export type PostFormData = {
  title: string;
  description: string;
  difficulty: string;
  responsibilities: string;
  skills: string[];
  file: File | null;
};

const steps = ["Overview", "Skillset", "Responsibilities", "Attach File"];

const CreatePostPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<PostFormData>({
    title: "",
    description: "",
    difficulty: "Intermediate",
    responsibilities: "",
    skills: [],
    file: null,
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 pb-10 font-sans transition-colors duration-300">
      {/* Top Navigation - Sticky & Responsive */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => window.history.back()}
            className="p-2 rounded-xl hover:bg-gray-100 disabled:opacity-0 transition-all"
            aria-label="Go back"
          >
            <ArrowLeft className="text-gray-600 size-5 md:size-6" />
          </button>
          <div>
            <h2 className="text-base md:text-xl font-bold text-gray-900 tracking-tight leading-tight">
              Create Post
            </h2>
            <p className="text-[10px] md:text-xs text-blue-600 uppercase tracking-tighter md:tracking-widest font-bold">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </div>

        {currentStep === steps.length - 1 && (
          <button
            onClick={() => console.log(formData)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-8 md:py-2.5 rounded-full text-sm md:text-base font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            <Send className="size-4 md:size-5" />
            <span className="hidden sm:inline">Publish Post</span>
            <span className="sm:hidden">Publish</span>
          </button>
        )}
      </nav>

      {/* Main Container */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10">
        
        {/* Stepper - Needs to handle overflow on mobile */}
        <div className="overflow-x-auto md:pb-4 scrollbar-hide">
          <div className="md:min-w-full">
            <StepperPage steps={steps} currentStep={currentStep} />
          </div>
        </div>

        {/* Progress Bar - Thinner on mobile */}
        <div className="mt-4 w-full h-1 md:h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        {/* Form Content Card */}
        <div className="mt-4 md:mt-10 bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-200 py-4 px-2 md:p-12 min-h-[50vh] flex flex-col justify-between transition-all">
          
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {currentStep === 0 && <OverviewPage formData={formData} setFormData={setFormData} />}
            {currentStep === 1 && <SkillsetPage formData={formData} setFormData={setFormData} />}
            {currentStep === 2 && <ResponsibilityPage formData={formData} setFormData={setFormData} />}
            {currentStep === 3 && <AttachFilePage formData={formData} setFormData={setFormData} />}
          </div>

          {/* Footer Navigation */}
          <div className="flex justify-between items-center md:mt-16 pt-6 md:pt-8 border-t border-gray-50">
            <button
              onClick={prevStep}
              className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold transition-all text-sm md:text-base ${
                currentStep === 0 ? "invisible" : "text-gray-500 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <ChevronLeft className="size-4 md:size-5" /> Back
            </button>
            
            {currentStep < steps.length - 1 && (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-5 py-2 md:px-8 md:py-3 rounded-xl font-bold transition-all shadow-md text-sm md:text-base active:scale-95"
              >
                Next <span className="hidden sm:inline">Step</span> <ChevronRight className="size-4 md:size-5" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePostPage;