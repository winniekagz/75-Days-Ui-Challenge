import TextField from "../../components/Gym/formInputs/ TextField";
import DatePicker from "../../components/Gym/formInputs/DatePicker";
import PasswordField from "../../components/Gym/formInputs/PaswordField";
import PhoneField from "../../components/Gym/formInputs/PhoneField";
import SelectField from "../../components/Gym/formInputs/SelectField";
import TextArea from "../../components/Gym/formInputs/TextArea";
import { userOnboarding } from "../../data/gym/userOnboarding";

export const getStep = () => {};
export const renderForm = () => {};

export const getStepTitleandDescription = () => {};

export const updateActiveAndComplete = (currentStep: string) => {
  return userOnboarding.map((step) => {
    // Mark the previous steps as complete, keep the current step as active, and future steps as not completed.
    const isCurrentStep = step.title === currentStep;
    const isPreviousStep =
      userOnboarding.indexOf(step) <
      userOnboarding.findIndex((s) => s.title === currentStep);

    return {
      ...step,
      isComplete: isPreviousStep || (isCurrentStep && step.isComplete), // Mark all previous steps as complete
      activeStep: isCurrentStep, // Set active only for the current step
    };
  });
};

/**
 * Renders the appropriate input component based on the field type.
 *
 * @param type - The type of the input field (e.g., 'text', 'password')
 * @param customType - Whether the input is for a phone number
 * @returns The corresponding input component
 */
export const RenderInput = (
  type: string,
  customType?: string | undefined | null
) => {
  if (
    (type === "text" && customType == "phone") ||
    (type == "text" && customType == "phoneNumber")
  ) {
    return PhoneField;
  } else if (type == "group" && customType == "date") {
    return DatePicker;
  }

  switch (type) {
    case "text":
      return TextField;
    case "password":
      return PasswordField;
    case "date":
      return DatePicker;
    case "dropdown":
    case "multi-select":
      return SelectField;
    case "textarea":
      return TextArea;
    default:
      return TextField;
  }
};
