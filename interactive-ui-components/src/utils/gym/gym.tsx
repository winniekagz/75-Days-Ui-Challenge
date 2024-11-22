import { userOnboarding } from "../../data/gym/userOnboarding";

export const getStep=()=>{

}
export const renderForm=()=>{

}

export const getStepTitleandDescription=()=>{

}

export const updateActiveAndComplete = (currentStep: string) => {
    return userOnboarding.map((step) => {
      // Mark the previous steps as complete, keep the current step as active, and future steps as not completed.
      const isCurrentStep = step.title === currentStep;
      const isPreviousStep = userOnboarding.indexOf(step) < userOnboarding.findIndex((s) => s.title === currentStep);
  
      return {
        ...step,
        isComplete: isPreviousStep || (isCurrentStep && step.isComplete), // Mark all previous steps as complete
        activeStep: isCurrentStep, // Set active only for the current step
      };
    });
  };
  
  