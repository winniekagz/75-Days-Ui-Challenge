
import { userOnboarding } from '../../../data/gym/userOnboarding';
import CustomTypography from '../../../components/uiComponents/Typography';
import Container from '../../../components/Gym/layout/container';
import { FieldType, FormValues } from '../../../types/profile.types';
import { USER_ONBOARDING_FORM, USER_ONBOARDING_STEPS } from '../../../constants/gym';
import { Field, Form, Formik } from 'formik';
import { getValidationSchema } from '../../../utils/getValidation';
import { Button } from '../../../components/uiComponents/button';
import { CreateFormProps } from '../../../types/gym.types';
import { RenderInput } from '../../../utils/gym/gym';



export default function CreateForm({ currentStep, handleNext }: CreateFormProps) {
  const formFields: any= USER_ONBOARDING_FORM[currentStep] || [];



  return (
    <div
      className={Container({
        rounded: true,
        display: 'centerItems',
      })}
    >
      <div className="flex justify-center gap-0 flex-col">
        <p
          className={CustomTypography({
            fontSize: 'title',
            color: 'Secondary',
          })}
        >
          Step 1 : {userOnboarding[0]?.title || ''}
        </p>
        <p
          className={CustomTypography({
            fontSize: 'subTitle',
            color: 'Text',
          })}
        >
          {userOnboarding[0]?.description || ''}
        </p>
      </div>

      <div className="mt-8 w-[100%] md:w-3/4 lg:w-2/3">
        <Formik
          initialValues={formFields.reduce((acc:FormValues, field:FieldType) => {
            acc[field.name] = '';
            return acc;
          }, {} as FormValues)}
          validationSchema={getValidationSchema(formFields)}
          onSubmit={(values) => {
            console.log("create Account",values);
            handleNext(USER_ONBOARDING_STEPS.PERSONAL_INFO);
          }}
        >
          <Form className="space-y-4 flex-1 w-[100%]">
            {formFields.map((field:FieldType, index:any) => (
              <div key={index} className="w-full">
                <Field
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  component={RenderInput(field.type??'',field.validation=='phoneNumber'?'phone': field?.fields?.[0]?.type)}
                />
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className={Button({ color: 'primary' })}>
                Create Account
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
