import { useEffect, useState } from "react";
import { userOnboarding } from "../../../data/gym/userOnboarding";
import CustomTypography from "../../../components/uiComponents/Typography";
import Container from "../../../components/Gym/layout/container";
import { FieldType, FormValues } from "../../../types/profile.types";
import {
  USER_ONBOARDING_FORM,
  USER_ONBOARDING_STEPS,
} from "../../../constants/gym";
import { Formik, Form, Field } from "formik";
import { getValidationSchema } from "../../../utils/getValidation";
import { Button } from "../../../components/uiComponents/button";
import TextField from "../../../components/Gym/formInputs/ TextField";
import { CreateFormProps } from "../../../types/gym.types";
import { RenderInput } from "../../../utils/gym/gym";

export default function MembershipAndHealthInfo({ currentStep, handleNext,handlePrevStep }: CreateFormProps) {
  const allFields:any= USER_ONBOARDING_FORM[currentStep] || [];

  const [formFields, setFormFields] = useState<FieldType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (allFields) {
      const combinedFields = [...allFields.health, ...allFields.membership];
      const uniqueFields = Array.from(
        new Set(combinedFields.map((field) => JSON.stringify(field)))
      ).map((field) => JSON.parse(field));

      setFormFields(uniqueFields);
      setIsLoading(false); 
    }
  }, [allFields]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      className={Container({
        rounded: true,
        display: "centerItems",
      })}
    >
      <div className=" px-2 md:px-8 lg:px-12">
        <div className="flex justify-center gap-0 flex-col">
          <p
            className={CustomTypography({
              fontSize: "title",
              color: "Secondary",
            })}
          >
            Step 3: {userOnboarding[2].title}
          </p>
          <p
            className={CustomTypography({
              fontSize: "subTitle",
              color: "Text",
            })}
          >
            {userOnboarding[2].description}
          </p>
        </div>

        <div className="mt-8 w-[100%]  ">
          <Formik
            initialValues={
              formFields &&
              formFields.reduce((acc, field) => {
                acc[field.name] = "";
                return acc;
              }, {} as FormValues)
            }
            validationSchema={getValidationSchema(formFields ?? [])}
            onSubmit={(values) => {
              handleNext(USER_ONBOARDING_STEPS.WORKOUT_AND_PROGRESS_PREFERENCE)
              console.log(values);
            }}
          >
            <Form className="space-y-4 lg:grid-cols-2 gap-2 w-[100%]">
              <div className="divide-y">
                <p
                  className={CustomTypography({
                    fontSize: "sectionSubTitle",
                  })}
                >
                  Membership Details
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                  {allFields.membership.length > 0 &&
                    allFields.membership.map(
                      (field: FieldType, index: number) => {
                        console.log(
                          "field:",
                          field,
                          "index:",
                          index,
                          "allFields:",
                          allFields
                        );
                        return (
                          <div key={index} className="w-full ">
                            <Field
                              name={field.name}
                              label={field.label}
                              type={field.type}
                              placeholder={`Enter your ${field.label.toLowerCase()}`}
                              component={RenderInput(
                                field.type ?? "",
                                field.validation == "phoneNumber"
                                  ? "phone"
                                  : field?.fields?.[0]?.type ?? ""
                              )}
                              options={field.options}
                            />
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
              <div className="">
                <p
                  className={CustomTypography({
                    fontSize: "sectionSubTitle",
                  })}
                >
                  Health Details
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                  {allFields.health.length > 0 &&
                    allFields.health.map(
                      (field: FieldType, index: number) => {
                        return (
                          <div key={index} className="w-full">
                            <Field
                              name={field.name}
                              label={field.label}
                              type={field.type}
                              placeholder={`Enter your ${field.label.toLowerCase()}`}
                              options={field.options}
                              component={RenderInput(
                                field.type ?? "",
                                field.validation == "phoneNumber"
                                  ? "phone"
                                  : field?.fields?.[0]?.type ?? ""
                              )}
                            />
                          </div>
                        );
                      }
                    )}
                </div>
              </div>

              <div className="flex justify-between">
                <button onClick={()=>handlePrevStep?.(USER_ONBOARDING_STEPS.PERSONAL_INFO)
                }
                
                  className={Button({
                    color: "secondary",
                  })}
                >
                  Back
                </button>
                <button   type="submit"
                  className={Button({
                    color: "primary",
                  })}
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
