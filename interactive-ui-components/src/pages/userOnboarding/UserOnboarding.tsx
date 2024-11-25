import { Check, MoveRight } from "lucide-react";
import CustomTypography from "../../components/uiComponents/Typography";
import CreateForm from "./forms/CreateForm";
import PersonalInfo from "./forms/PersonalInfoForm";
import MembershipAndHealthInfo from "./forms/Membership";
import WorkoutPreference from "./forms/WorkoutPreference";
import { useState } from "react";
import { USER_ONBOARDING_STEPS } from "../../constants/gym";
import { updateActiveAndComplete } from "../../utils/gym/gym";

export default function UserOnboarding() {
  const [currentStep, setCurrentStep] = useState(USER_ONBOARDING_STEPS.CREATE_ACCOUNT);
  const [steps, setSteps] = useState(updateActiveAndComplete(currentStep));

  const handleNextStep = (nextStep:string) => {
    setCurrentStep(nextStep);
    setSteps(updateActiveAndComplete(nextStep));
  };
  const handlePrevStep = (prevStep: string) => {
    setCurrentStep(prevStep);
    setSteps(updateActiveAndComplete(prevStep));
  };

  return (
    <div className="h-[100vh] bg-Background">
      <div className="grid md:grid-cols-11 gap-2 h-full">
        {/* Sidebar */}
        <div className="hidden md:block md:col-span-4 bg-white px-4 md:px-12 py-12 lg:px-12 xl:p-32">
          <div className="flex mb-8 flex-col">
            <p className={CustomTypography({ background: "logo", fontSize: "logo" })}>
              FitSphere
            </p>
            <div className="mt-4">
              <p className={CustomTypography({ fontSize: "title" })}>Welcome onBoard</p>
              <p className={CustomTypography({ fontSize: "subTitle" })}>
                Fill in the form to create an account
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-wrap">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-secondary p-4 rounded-[12px] border max-w-[300px]
                  ${
                    step.activeStep
                      ? "bg-primary/20 border-Primary/5 hover:bg-primary/40"
                      : step.isComplete
                      ? "bg-secondary/10 text-Text border-secondary/10"
                      : "shadow-none border-Accent/50"
                  }`}
              >
                <p className={CustomTypography({ fontSize: "cardTitle",color:'Secondary' })}>
                  Step: {step.title}
                </p>
                <p className={CustomTypography({ fontSize: "cardSubTitle" })}>
                  {step.description}
                </p>
                <div className={`my-2 flex gap-4 items-center ${step.isComplete ? "text-green-700 " : step.activeStep ? "text-Primary/80" : "text-secondary/40}"}`}>
                  <div className={`flex gap-2 items-center  font-bold text-xs font-sans ${
                        step.isComplete ? "text-green-700" : step.activeStep ? "text-Primary" : "text-Secondary/40"
                      }`}>
                    {step.isComplete && <Check className="h-[14px]" />}
                  
                      <p >Step</p>
                      <p>{index + 1}</p>
                    
                  </div>
                  <MoveRight
                    className={`${
                      step.isComplete
                        ? "hidden"
                        : step?.activeStep
                        ? "text-primary"
                        : "text-secondary/40"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="md:col-span-7">
          {/* Render form based on current step */}
          {currentStep === USER_ONBOARDING_STEPS.CREATE_ACCOUNT && <CreateForm 
        
          currentStep={currentStep} 
          handleNext={handleNextStep}/>}
          {currentStep === USER_ONBOARDING_STEPS.PERSONAL_INFO && <PersonalInfo
          handlePrevStep={handlePrevStep}
           currentStep={currentStep} handleNext={handleNextStep} />}
          {currentStep === USER_ONBOARDING_STEPS.MEMBERSHIP_AND_HEALTH_INFO && (
           
            <MembershipAndHealthInfo  handlePrevStep={handlePrevStep} currentStep={currentStep}
             handleNext={handleNextStep}/>
          )}
          {currentStep === USER_ONBOARDING_STEPS.WORKOUT_AND_PROGRESS_PREFERENCE && (
            <WorkoutPreference handlePrevStep={handlePrevStep} currentStep={currentStep} handleNext={handleNextStep} />
          )}
          {/* Next Button Example */}
          <button
            onClick={() =>
              handleNextStep(USER_ONBOARDING_STEPS.PERSONAL_INFO) // Replace with logic for the next step
            }
          >
            
          </button>
        </div>
      </div>
    </div>
  );
}
