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

      [USER_ONBOARDING_STEPS.PERSONAL_INFO]: [
        { name: "dateOfBirth", label: "Date of Birth", type: "date", validation: "required" },
        
        { 
          name: "gender", 
          label: "Gender", 
          type: "dropdown", 
          options: [
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" }
          ], 
          validation: "Optional" 
        },
        
        { 
          name: "emergencyContact", 
          label: "Emergency Contact", 
          type: "text", 
        isOptional:true,
          validation: 'phoneNumber'
        },
        
        { 
          name: "address", 
          label: "Address (Optional)", 
          type: "text", 
          validation: 'optional'
        },
      ],
      
      [USER_ONBOARDING_STEPS.MEMBERSHIP_AND_HEALTH_INFO]: {
        // Membership Details
        membership: [
          {
            name: "membershipType",
            label: "Membership Type",
            type: "dropdown",
            options: [
              { value: "Monthly", label: "Monthly" },
              { value: "Annual", label: "Annual" },
              { value: "Class Packs", label: "Class Packs" }
            ],
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
            validation: "optional",
          },
          // Payment Information
          {
            name: "billingCycle",
            label: "Billing Cycle",
            type: "dropdown",
            options: [
              { value: "Monthly", label: "Monthly" },
              { value: "Quarterly", label: "Quarterly" },
              { value: "Annually", label: "Annually" }
            ],
            validation: "required",
          },
          {
            name: "paymentMethod",
            label: "Payment Method",
            type: "dropdown",
            options: [
              { value: "Credit/Debit Card", label: "Credit/Debit Card" },
              { value: "PayPal", label: "PayPal" },
              { value: "Bank Transfer", label: "Bank Transfer" }
            ],
            validation: "required",
          },
        ],
      
        // Health & Fitness Information
        health: [
          {
            name: "currentFitnessLevel",
            label: "Current Fitness Level",
            type: "dropdown",
            options: [
              { value: "Beginner", label: "Beginner" },
              { value: "Intermediate", label: "Intermediate" },
              { value: "Advanced", label: "Advanced" }
            ],
            validation: "required",
          },
          {
            name: "fitnessGoals",
            label: "Fitness Goals",
            type: "multi-select",
            options: [
              { value: "Weight Loss", label: "Weight Loss" },
              { value: "Muscle Gain", label: "Muscle Gain" },
              { value: "Endurance", label: "Endurance" },
              { value: "Flexibility", label: "Flexibility" }
            ],
            validation: "optional",
          },
          {
            name: "medicalConditions",
            label: "Medical Conditions",
            type: "multi-select",
            options: [
              { value: "Heart Condition", label: "Heart Condition" },
              { value: "Diabetes", label: "Diabetes" },
              { value: "Asthma", label: "Asthma" },
              { value: "High Blood Pressure", label: "High Blood Pressure" },
              { value: "Joint Problems", label: "Joint Problems" },
              { value: "Epilepsy", label: "Epilepsy" },
              { value: "Obesity", label: "Obesity" },
              { value: "Pregnancy", label: "Pregnancy" }
            ],
            validation: "optional",
          },
          
         
        
          {
            name: "height",
            label: "Current Height",
            type: "text",
            validation: "optional",
          },
          {
            name: "weight",
            label: "Current Weight",
            type: "text",
            validation: "optional",
          },
          {
            name: "physicalLimitations",
            label: "Physical Limitations",
            type: "textarea",
            validation: "optional",
          },
          // {
          //   name: "currentMedications",
          //   label: "Current Medications",
          //   type: "textarea",
          //   validation: "optional",
          // },
        
        ],
      },
      
      [USER_ONBOARDING_STEPS.WORKOUT_AND_PROGRESS_PREFERENCE]: [
        {
          name: "workoutTypes",
          label: "Workout Types",
          type: "multi-select",
          options: [
            { value: "Cardio", label: "Cardio" },
            { value: "Weightlifting", label: "Weightlifting" },
            { value: "HIIT", label: "HIIT" },
            { value: "Yoga", label: "Yoga" }
          ],
          validation: "optional"
        },
        {
          name: "preferredTimeSlots",
          label: "Preferred Time Slots",
          type: "multi-select",
          options: [
            { value: "Morning", label: "Morning" },
            { value: "Afternoon", label: "Afternoon" },
            { value: "Evening", label: "Evening" }
          ],
          validation: "optional",
        },
        {
          name: "personalTrainerOption",
          label: "Personal Trainer Option",
          type: "dropdown",
          options: [
            { value: "Assigned Trainer", label: "Assigned Trainer" },
            { value: "Self-Guided", label: "Self-Guided" }
          ],
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
            { name: "otherGoals", label: "Other Goals", type: "textarea", validation: "optional" },
          ],
          validation: "optional",
        },
        {
          name: "regularProgressUpdates",
          label: "Regular Progress Updates",
          type: "group",
          fields: [
            { name: "date", label: "Date", type: "date", validation: "required" },
            
              { name: "weight", label: "Weight (kg)", type: "number", validation: "optional" },
              { name: "bodyFatPercentage", label: "Body Fat %", type: "number", validation: "optional" },
              { name: "muscleMass", label: "Muscle Mass (kg)", type: "number", validation: "optional" },
            
            { name: "milestones", label: "Milestones", type: "text", validation: "optional" },
          ],
          validation: "optional",
        },
      ],
      
   }

   export  const COLORS={
    Primary: "#FF3B30",
    Secondary: "#121212",
    Accent: "#AAB2BD",
    Background: "#F2F2F7",
    Text: "#2C2C2E",
  }