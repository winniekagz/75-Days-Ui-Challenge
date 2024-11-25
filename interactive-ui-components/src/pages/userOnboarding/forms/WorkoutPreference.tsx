import {
  USER_ONBOARDING_FORM,
  USER_ONBOARDING_STEPS,
} from "../../../constants/gym";
import { FieldType, FormValues } from "../../../types/profile.types";
import Container from "../../../components/Gym/layout/container";
import CustomTypography from "../../../components/uiComponents/Typography";
import { userOnboarding } from "../../../data/gym/userOnboarding";
import { Field, Form, Formik } from "formik";
import { getValidationSchema } from "../../../utils/getValidation";
import { Button } from "../../../components/uiComponents/button";
import { CreateFormProps } from "../../../types/gym.types";
import { RenderInput } from "../../../utils/gym/gym";

export default function WorkoutPreference({
  currentStep,
  handlePrevStep,
}: CreateFormProps) {
  const formFields: any = USER_ONBOARDING_FORM[currentStep] || [];
  return (
    <div
      className={Container({
        rounded: true,
        display: "start",
      })}
    >
      <div className="flex justify-center gap-0 flex-col">
        <p
          className={CustomTypography({
            fontSize: "title",
            color: "Secondary",
          })}
        >
          {" "}
          Step 4 :{userOnboarding[3].title}
        </p>
        <p
          className={CustomTypography({ fontSize: "subTitle", color: "Text" })}
        >
          {userOnboarding[3].description}
        </p>
      </div>

      <div className="mt-8 w-[100%] md:w-3/4 lg:w-2/3">
        <Formik
          initialValues={formFields?.reduce(
            (acc: FormValues, field: FieldType) => {
              acc[field.name] = "";
              return acc;
            },
            {} as FormValues
          )}
          validationSchema={getValidationSchema(formFields)}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="space-y-4 flex-1 w-full">
            
            {formFields.map((field: FieldType, index: number) =>
              field.type !== "group" ? (
                <div key={index} className="w-full">
                  <Field
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    component={RenderInput(
                      field.type ?? "",
                      field.validation === "phoneNumber"
                        ? "phone"
                        : field?.fields?.[0]?.type ?? ""
                    )}
                    options={field.options}
                  />
                </div>
              ) : (
                <div key={index} className="my-6 4">
                   <p
                  className={CustomTypography({
                    fontSize: "sectionSubTitle",
                  })}
                >
                { field.label}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {field.fields?.map((subField, subIndex) => (
                    <Field
                      key={subIndex}
                      name={subField.name}
                      label={subField.label}
                      type={subField.type}
                      placeholder={`Enter your ${subField.label.toLowerCase()}`}
                      component={RenderInput(
                        subField.type ?? "",
                        subField.validation === "phoneNumber"
                          ? "phone"
                          : subField?.fields?.[0]?.type ?? ""
                      )}
                      options={subField.options}
                    />
                  ))}
                </div>
                </div>
              )
            )}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() =>
                  handlePrevStep?.(
                    USER_ONBOARDING_STEPS.MEMBERSHIP_AND_HEALTH_INFO
                  )
                }
                className={Button({ color: "secondary" })}
              >
                Back
              </button>

              <button type="submit" className={Button({ color: "primary" })}>
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
