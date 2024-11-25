import { userOnboarding } from "../../../data/gym/userOnboarding";
import CustomTypography from "../../../components/uiComponents/Typography";
import Container from "../../../components/Gym/layout/container";
import { FieldType, FormValues } from "../../../types/profile.types";
import {
  USER_ONBOARDING_FORM,
  USER_ONBOARDING_STEPS,
} from "../../../constants/gym";
import { Field, Form, Formik } from "formik";
import { getValidationSchema } from "../../../utils/getValidation";
import { Button } from "../../../components/uiComponents/button";
import { CreateFormProps } from "../../../types/gym.types";
import { RenderInput } from "../../../utils/gym/gym";

export default function PersonalInfo({
  currentStep,
  handleNext,
  handlePrevStep,
}: CreateFormProps) {
  const formFields: any = USER_ONBOARDING_FORM[currentStep] || [];

  return (
    <div
      className={Container({
        rounded: true,
        display: "centerItems",
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
          Step 2 :{userOnboarding[1].title}
        </p>
        <p
          className={CustomTypography({ fontSize: "subTitle", color: "Text" })}
        >
          {userOnboarding[1].description}
        </p>
      </div>

      <div className="mt-8 w-[100%] md:w-3/4 lg:w-2/3">
        <Formik
          initialValues={formFields.reduce(
            (acc: FormValues, field: FormValues) => {
              acc[field.name] = field.type === "date" ? "" : "";
              return acc;
            },
            {} as FormValues
          )}
          validationSchema={getValidationSchema(formFields)}
          onSubmit={(values) => {
            handleNext(USER_ONBOARDING_STEPS.MEMBERSHIP_AND_HEALTH_INFO);
            console.log(values);
          }}
        >
          {(props) => (
            <Form className="space-y-4 flex-1 w-[100%]">
              {formFields.map((field: FieldType, index: number) => (
                <div key={index} className="w-full">
                  <Field
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    handleChange={props.handleChange}
                    options={field?.options}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    component={RenderInput(
                      field.type ?? "",
                      field.validation == "phoneNumber"
                        ? "phone"
                        : field?.fields?.[0]?.type ?? ""
                    )}
                  />
                </div>
              ))}

              {/* Button to add a new field */}

              <div className="flex  justify-between">
                <button
                  onClick={() =>
                    handlePrevStep?.(USER_ONBOARDING_STEPS.CREATE_ACCOUNT)
                  }
                  type="submit"
                  className={Button({
                    color: "secondary",
                  })}
                >
                  Back
                </button>
                <button
                  className={Button({
                    color: "primary",
                  })}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
