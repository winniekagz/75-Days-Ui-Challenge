import Container from '../../../components/Gym/layout/container';
import CustomTypography from '../../../components/uiComponents/Typography';
import { Field, Form, Formik } from 'formik';
import { BMI_CALCULATOR } from '../../../constants/gym';
import { FieldType, FormValues } from '../../../types/profile.types';
import { getValidationSchema } from '../../../utils/getValidation';
import { RenderInput } from '../../../utils/gym/gym';
import { Button } from '../../../components/uiComponents/button';

import { useState } from 'react';
import Gauge from '../../../components/charts/GuageChart';

export default function BMICalculator() {
  const [bmi, setBMI] = useState<number | null>(null);

  return (
    <div className="mt-8 flex-1 w-screen place-items-center">
      <Formik
        initialValues={BMI_CALCULATOR.reduce(
          (acc: FormValues, field: FieldType) => {
            acc[field.name] = '';
            return acc;
          },
          {} as FormValues
        )}
        validationSchema={getValidationSchema(BMI_CALCULATOR)}
        onSubmit={(values) => {
          const height = parseFloat(values.height);
          const weight = parseFloat(values.weight);

          if (!height || !weight || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values.');
            return;
          }

          const heightInMeters = height;
          const bmiValue = weight / (heightInMeters * heightInMeters);
          const roundedBmi = Math.round(bmiValue * 100) / 100;

          setBMI(roundedBmi);
        }}
      >
        <Form className="space-y-4 px-4 md:px-8 lg:px-20 gap-4 flex-1 flex flex-col justify-center items-center py-20 w-full bg-Accent/70">
          {/* Render Input Fields */}
          <div className="grid flex-1 grid-cols-1 md:grid-cols-3 gap-4">
            {BMI_CALCULATOR.map((field: FieldType, index: number) => (
              <div key={index} className="w-full">
                <Field
                  name={field.name}
                  label={field.label}
                  type={field.type || 'text'}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  component={RenderInput(
                    field.type ?? '',
                    field.validation === 'phoneNumber'
                      ? 'phone'
                      : field?.fields?.[0]?.type || ''
                  )}
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className={Button({ color: 'primary' })}
            >
              Calculate your BMI
            </button>
          </div>

          {/* Display Gauge if BMI is calculated */}
          {bmi !== null && (
            <div className="mt-4 w-full">
              <p  className="text-center">
                Your BMI is: {bmi}
              </p>
              <Gauge value={bmi} min={10} max={40} />
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
}
