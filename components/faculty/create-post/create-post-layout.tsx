"use client";
import React, { ReactNode } from "react";
import { ArrowLeft, Send, ChevronRight, ChevronLeft } from "lucide-react";
import StepperPage from "@/components/faculty/create-post/stepper";

interface CreatePostLayoutProps {
  sideNavBar: ReactNode;
  currentStep: number;
  steps: string[];
  onNext?: () => void;
  onPrev?: () => void;
  onPublish?: () => void;
  children: ReactNode;
}

const CreatePostLayout = ({
  sideNavBar,
  currentStep,
  steps,
  onNext,
  onPrev,
  onPublish,
  children,
}: CreatePostLayoutProps) => {
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="flex h-screen bg-[#f0f2f5] overflow-hidden">
      {sideNavBar}

      <div className="flex-1 ml-20 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => window.history.back()}
              className="p-2 rounded-xl hover:bg-gray-100 transition-all"
              aria-label="Go back"
            >
              <ArrowLeft className="text-gray-600 size-5 md:size-6" />
            </button>
            <div>
              <h2 className="text-base md:text-xl font-bold text-gray-900 tracking-tight leading-tight">
                Create Post
              </h2>
              <p className="text-[10px] md:text-xs text-[#3b71ca] uppercase tracking-tighter md:tracking-widest font-bold">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>
          </div>

          {currentStep === steps.length - 1 && (
            <button
              onClick={onPublish}
              className="flex items-center gap-2 bg-[#3b71ca] hover:bg-[#2c56a0] text-white px-4 py-2 md:px-8 md:py-2.5 rounded-full text-sm md:text-base font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              <Send className="size-4 md:size-5" />
              <span className="hidden sm:inline">Publish Post</span>
              <span className="sm:hidden">Publish</span>
            </button>
          )}
        </nav>

        {/* Main Container */}
        <main className="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-6 lg:px-8 py-4 md:py-10">
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto md:pb-4 scrollbar-hide">
              <div className="md:min-w-full">
                <StepperPage steps={steps} currentStep={currentStep} />
              </div>
            </div>

            <div className="mt-4 w-full h-1 md:h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3b71ca] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 md:mt-10 bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-200 py-4 px-2 md:p-12 min-h-[50vh] flex flex-col justify-between transition-all">
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                {children}
              </div>

              <div className="flex justify-between items-center md:mt-16 pt-6 md:pt-8 border-t border-gray-50">
                <button
                  onClick={onPrev}
                  className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold transition-all text-sm md:text-base ${
                    currentStep === 0
                      ? "invisible"
                      : "text-gray-500 bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <ChevronLeft className="size-4 md:size-5" /> Back
                </button>

                {currentStep < steps.length - 1 && (
                  <button
                    onClick={onNext}
                    className="flex items-center gap-2 bg-[#3b71ca] hover:bg-[#2c56a0] text-white px-5 py-2 md:px-8 md:py-3 rounded-xl font-bold transition-all shadow-md text-sm md:text-base active:scale-95"
                  >
                    Next <span className="hidden sm:inline">Step</span>{" "}
                    <ChevronRight className="size-4 md:size-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreatePostLayout;