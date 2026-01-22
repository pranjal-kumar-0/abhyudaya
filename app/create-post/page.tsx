"use client";
import React, { useState } from "react";
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
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="p-2 rounded-xl hover:bg-gray-100 disabled:opacity-20 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Create Research Post</h2>
            <p className="text-[10px] text-blue-600 uppercase tracking-widest font-bold">
              Faculty Portal &bull; Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </div>

        {currentStep === steps.length - 1 && (
          <button
            onClick={() => console.log(formData)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
          >
            <Send size={16} />
            Publish Post
          </button>
        )}
      </nav>

      <main className="max-w-4xl mx-auto mt-12 px-4">
        <StepperPage steps={steps} currentStep={currentStep} />
        {/* Top Progress Bar */}
      <div className="mt-10 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>

        <div className="mt-10 bg-white rounded-3xl shadow-sm border border-gray-100 p-12 min-h-[60vh] transition-all">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {currentStep === 0 && <OverviewPage formData={formData} setFormData={setFormData} />}
            {currentStep === 1 && <SkillsetPage formData={formData} setFormData={setFormData} />}
            {currentStep === 2 && <ResponsibilityPage formData={formData} setFormData={setFormData} />}
            {currentStep === 3 && <AttachFilePage formData={formData} setFormData={setFormData} />}
          </div>

          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-50">
            <button
              onClick={prevStep}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                currentStep === 0 ? "invisible" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft size={20} /> Back
            </button>
            
            {currentStep < steps.length - 1 && (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md"
              >
                Next Step <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePostPage