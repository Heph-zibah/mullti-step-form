import React, {createContext, useContext, useState} from 'react'
import { LayoutProps, StepContextType, StepData } from "@/lib/type";

const StepContext = createContext<StepContextType>({
  onPrevStep: () => {},
  onNextStep: () => {},
  steps: 1,
  stepsData:{},
  updateStepsData: () => {},
});


export const StepProvider = ({children} : LayoutProps) => {
  const [steps, setSteps] = useState(1);
  const [stepsData, setStepsData] = useState<StepData>({});

  const onPrevStep = () => {
    setSteps((prev) => prev - 1);
  };
  const onNextStep = () => {
    setSteps((prev) => prev + 1);
  }
  const updateStepsData = (stepData: Partial<StepData>) => {
    setStepsData((prev) => ({ ...prev, ...stepData }));
  };
  return (
    <StepContext.Provider
      value={{ onPrevStep, onNextStep, steps, stepsData, updateStepsData }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}