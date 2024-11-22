export type StepperProps={
    activeStep:number
    title:string
    description:string
}
export type CreateFormProps= {
    currentStep: string;
    handleNext: (nextStep:string) => void;
    handlePrevStep?:(prevStep:string)=>void
  }