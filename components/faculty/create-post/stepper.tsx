type Props = {
  steps: string[];
  currentStep: number;
};

const StepperPage = ({ steps, currentStep }: Props) => {
  return (
    <div className="relative flex justify-between items-center w-full max-w-3xl mx-auto px-2">
      {/* Background Line - adjusted top position responsively */}
      <div className="absolute top-4 md:top-5 left-0 w-full h-0.5 bg-gray-200 -z-10" />
      
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={step} className="flex flex-col items-center gap-2 md:gap-3">
            {/* Circle: h-8 on mobile, h-10 on desktop */}
            <div
              className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ring-2 md:ring-4 ${
                isActive 
                  ? "bg-blue-600 text-white ring-blue-100 shadow-md" 
                  : isCompleted 
                    ? "bg-green-500 text-white ring-green-50" 
                    : "bg-white text-gray-400 ring-transparent border border-gray-200"
              }`}
            >
              {isCompleted ? "✓" : index + 1}
            </div>

            {/* Label: text-[10px] on mobile, text-xs on desktop */}
            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-tight md:tracking-wider transition-colors text-center ${
              isActive ? "text-blue-600" : "text-gray-400"
            }`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StepperPage;