export const USER_ONBOARDING_STEPS={
    'CREATE_ACCOUNT':'Create account',
    'PERSONAL_INFO':'Personal info',
    'MEMBERSHIP_AND_HEALTH_INFO':'Membership and Health info',
    "WORKOUT_AND_PROGRESS_PREFERENCE":"Workout and Progress Preferences"

}

export const USER_ONBOARDING_FORM={
   [USER_ONBOARDING_STEPS.CREATE_ACCOUNT]: [
        { name: "name", label: "Name", type: "text", validation: "required" },
        { name: "email", label: "Email", type: "email", validation: "email" },
        { name: "phone_number", label: "Phone Number", type: "text", validation: "phoneNumber" },
        { name: "password", label: "Password", type: "password", validation: "password" },
      ],

      [USER_ONBOARDING_STEPS.PERSONAL_INFO]:[

        { name: "dateOfBirth", label: "Date of Birth", type: "date", validation: "required" },
     
        { 
          name: "gender", 
          label: "Gender", 
          type: "dropdown", 
          options: ["Male", "Female", "Other"], 
          validation: "Optional" 
        },
     
        { 
          name: "emergencyContact", 
          label: "Emergency Contact", 
          type: "group", 
          fields: [
            { name: "contactName", label: "Name", type: "text", validation: "required" },
            { name: "contactPhone", label: "Phone", type: "text", validation: "required" },
          ],
          validation:'optional'
        },
        { 
          name: "address", 
          label: "Address (Optional)", 
          type: "text", 
          validation:'optional'
          
        },
      ],
      [USER_ONBOARDING_STEPS.MEMBERSHIP_AND_HEALTH_INFO]: {
        // Membership Details
        membership:[{
          name: "membershipType",
          label: "Membership Type",
          type: "dropdown",
          options: ["Monthly", "Annual", "Class Packs"],
          validation: "required",
        },
        {
          name: "membershipStartEnd",
          label: "Membership Period",
          type: "group",
          fields: [
            { name: "startDate", label: "Start Date", type: "date", validation: "required" },
            { name: "endDate", label: "End Date", type: "date", validation: "required" },
          ],
          validation: "required",
        },    
        // Payment Information
        {
          name: "billingCycle",
          label: "Billing Cycle",
          type: "dropdown",
          options: ["Monthly", "Quarterly", "Annually"],
          validation: "required",
        },
        {
          name: "paymentMethod",
          label: "Payment Method",
          type: "dropdown",
          options: ["Credit/Debit Card", "PayPal", "Bank Transfer"],
          validation: "required",
        },],
    
        // Health & Fitness Information
        health:[{
          name: "currentFitnessLevel",
          label: "Current Fitness Level",
          type: "dropdown",
          options: ["Beginner", "Intermediate", "Advanced"],
          validation: "required",
        },
        {
          name: "fitnessGoals",
          label: "Fitness Goals",
          type: "multi-select",
          options: ["Weight Loss", "Muscle Gain", "Endurance", "Flexibility"],
          validation: "optional",
        },
        {
          name: "medicalConditions",
          label: "Medical Conditions",
          type: "multi-select",
          options: ["Heart Condition", "Diabetes"],
          validation: "optional",
        },
        {
          name: "physicalLimitations",
          label: "Physical Limitations",
          type: "text",
          validation: "optional",
        },
        {
          name: "currentMedications",
          label: "Current Medications",
          type: "text",
          validation: "optional",
        },
        {
          name: "heightWeight",
          label: "Height & Weight",
          type: "group",
          fields: [
            { name: "height", label: "Height (cm)", type: "number", validation: "required" },
            { name: "weight", label: "Weight (kg)", type: "number", validation: "required" },
          ],
          validation: "required",
          additionalInfo: "BMI will be calculated automatically",
        },],},

        [USER_ONBOARDING_STEPS.WORKOUT_AND_PROGRESS_PREFERENCE]:[{
              name: "workoutTypes",
              label: "Workout Types",
              type: "multi-select",
              options: ["Cardio", "Weightlifting", "HIIT", "Yoga"],
              validation: "optional"
            },
            {
              name: "preferredTimeSlots",
              label: "Preferred Time Slots",
              type: "multi-select",
              options: ["Morning", "Afternoon", "Evening"],
              validation: "optional",
            },
            {
              name: "personalTrainerOption",
              label: "Personal Trainer Option",
              type: "dropdown",
              options: ["Assigned Trainer", "Self-Guided"],
              validation: "optional",
            },
            {
              name: "startingMeasurements",
              label: "Starting Measurements",
              type: "group",
              fields: [
                { name: "weight", label: "Weight (kg)", type: "number", validation: "required" },
                { name: "bodyFatPercentage", label: "Body Fat %", type: "number", validation: "optional" },
                { name: "muscleMass", label: "Muscle Mass (kg)", type: "number", validation: "optional" },
              ],
              validation: "optional",
            },
            {
              name: "goalMetrics",
              label: "Goal Metrics",
              type: "group",
              fields: [
                { name: "targetWeight", label: "Target Weight (kg)", type: "number", validation: "optional" },
                { name: "strengthTargets", label: "Strength Targets", type: "text", validation: "optional" },
                { name: "otherGoals", label: "Other Goals", type: "text", validation: "optional" },
              ],
              validation: "optional",
            },
            {
              name: "regularProgressUpdates",
              label: "Regular Progress Updates",
              type: "log",
              fields: [
                { name: "date", label: "Date", type: "date", validation: "required" },
                { name: "measurements", label: "Measurements", type: "group", fields: [
                  { name: "weight", label: "Weight (kg)", type: "number", validation: "optional" },
                  { name: "bodyFatPercentage", label: "Body Fat %", type: "number", validation: "optional" },
                  { name: "muscleMass", label: "Muscle Mass (kg)", type: "number", validation: "optional" },
                ]},
                { name: "milestones", label: "Milestones", type: "text", validation: "optional" },
              ],
              validation: "optional",
            },
        ], 
   }