import { USER_ONBOARDING_STEPS } from "../../constants/gym";

export const userOnboarding = [
    {
      title: USER_ONBOARDING_STEPS.CREATE_ACCOUNT,
      description: 'Set up your account with an email and password.',
      isComplete:false,
      activeStep: true,
      icon: 'heroicons-user-circle',
    },
    {
      title: USER_ONBOARDING_STEPS.PERSONAL_INFO,
      description: 'Provide your personal information such as name and contact details.',
      isComplete:false,
      activeStep: false,
      icon: 'heroicons-identification',
    },
    {
      title:USER_ONBOARDING_STEPS.MEMBERSHIP_AND_HEALTH_INFO,
      description: 'Choose a membership plan or skip for now.',
      isComplete:false,
      activeStep: true,
      icon: 'heroicons-credit-card',
    },
    // {
    //   title: 'Health Info (Optional)',
    //   description: 'Share your health details to personalize your experience.',
    //   isComplete:false,
    //   activeStep: false,
    //   icon: 'heroicons-heart',
    // },
    {
      title: USER_ONBOARDING_STEPS.WORKOUT_AND_PROGRESS_PREFERENCE,
      description: 'Select your workout preferences and enable progress tracking.',
      isComplete:false,
      activeStep: false,
      icon: 'heroicons-chart-bar',
    },
  ];
  