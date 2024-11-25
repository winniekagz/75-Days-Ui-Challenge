import { forwardRef } from 'react';
import CustomTypography from '../../uiComponents/Typography';
import { InputProps } from '../../../types/profile.types';
import { useField } from 'formik';
import { InputErrorIcon, InputSuccessIcon } from '../../../assets/icons';
import ErrorMessage from '../ErrorMessage';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './form.css'

const PhoneField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, ...props }) => {
    const [field, meta, helpers] = useField(props.field.name); // Use Formik's `useField` hook
    const { setValue } = helpers;

    const hasError = Boolean(meta.touched && meta.error);
    const isSuccessful = Boolean(meta.touched && !meta.error);

    return (
      <div className="w-full">
        <label
          htmlFor={`id-${field.name}`}
          className={CustomTypography({
            fontSize: 'cardTitle',
          })}
        >
          {label}
        </label>
        <div className="relative">
          <PhoneInput
            id={`id-${field.name}`}
            defaultCountry="KE"
            placeholder={placeholder}
            name={field.name}
            value={field.value}
            
            
            className={`flex  w-full rounded-lg text-sm border border-secondary/10 ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : isSuccessful ? 'border-teal-500 focus:ring-teal-500' : ''}`}
            onChange={(value) => setValue(value || '')}
            aria-describedby={`id-${field.name}-error-helper`}
            style={{ border:'none' }}  // Apply height to the input element
          />
          <div className="absolute inset-y-0 end-0 flex items-center pe-3">
            <div className="pointer-events-none cursor-none">
              {hasError ? <InputErrorIcon /> : isSuccessful ? <InputSuccessIcon /> : null}
            </div>
          </div>
        </div>
        {hasError && <ErrorMessage errorMessage={meta.error || ''} />}
      </div>
    );
  }
);

export default PhoneField;
