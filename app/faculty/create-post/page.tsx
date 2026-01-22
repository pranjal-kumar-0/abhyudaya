"use client";
import React, { useState } from "react";
import FacultySideNavBar from "@/components/common/faculty-sidenavbar";
import CreatePostLayout from "@/components/faculty/create-post/create-post-layout";
import OverviewPage from "@/components/faculty/create-post/overview";
import SkillsetPage from "@/components/faculty/create-post/skillset";
import ResponsibilityPage from "@/components/faculty/create-post/responsibility";
import AttachFilePage from "@/components/faculty/create-post/attach-file";

export type PostFormData = {
  title: string;
  description: string;
  difficulty: string;
  responsibilities: string;
  skills: string[];
  file: File | null;
};

const steps = ["Overview", "Skillset", "Responsibilities", "Attach File"];

const FacultyCreatePostPage = () => {
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

  const handlePublish = () => {
    console.log("Publishing post:", formData);
  };

  return (
    <CreatePostLayout
      sideNavBar={<FacultySideNavBar />}
      currentStep={currentStep}
      steps={steps}
      onNext={nextStep}
      onPrev={prevStep}
      onPublish={handlePublish}
    >
      {currentStep === 0 && <OverviewPage formData={formData} setFormData={setFormData} />}
      {currentStep === 1 && <SkillsetPage formData={formData} setFormData={setFormData} />}
      {currentStep === 2 && <ResponsibilityPage formData={formData} setFormData={setFormData} />}
      {currentStep === 3 && <AttachFilePage formData={formData} setFormData={setFormData} />}
    </CreatePostLayout>
  );
};

export default FacultyCreatePostPage;