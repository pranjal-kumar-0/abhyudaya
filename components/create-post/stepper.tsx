type Props = {
  steps: string[];
  currentStep: number;
};

const StepperPage = ({ steps, currentStep }: Props) => {
  return (
    <div className="relative flex justify-between items-center max-w-2xl mx-auto">
      {/* Background Line */}
      <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-100 -z-10" />
      
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={step} className="flex flex-col items-center gap-3">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ring-4 ${
                isActive 
                  ? "bg-blue-600 text-white ring-blue-50 shadow-lg" 
                  : isCompleted 
                    ? "bg-green-500 text-white ring-green-50" 
                    : "bg-white border-2 border-gray-200 text-gray-400 ring-transparent"
              }`}
            >
              {isCompleted ? "✓" : index + 1}
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${
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

export default StepperPage