
import  { forwardRef } from 'react'
import CustomTypography from '../../uiComponents/Typography';
import { useField } from 'formik';
import { InputProps } from '../../../types/profile.types';
import { InputErrorIcon, InputSuccessIcon } from '../../../assets/icons';
import ErrorMessage from '../ErrorMessage';

const TextArea= forwardRef<HTMLInputElement, InputProps>(({
    label,
    type,
    placeholder,
    index,
    ...props
  }, ref) => {
  const [field, meta] = useField(props.field.name); // use useField hook to access field and meta
  const hasError = Boolean(meta.touched && meta.error);
  const isSuccessful = Boolean(meta.touched && !meta.error);

    return (
        <div className="w-full">
          <label htmlFor={`id-${field.name}`} className={CustomTypography({
            fontSize:'cardTitle'
          })}>
            {label}
          </label>
          <div className="relative">
            <textarea
              {...field} 
              rows={5}
              placeholder={placeholder}
              id={`id-${field.name}`}
              className={`py-3 px-4 block w-full rounded-lg text-sm  border border-secondary/10
                ${hasError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : 
                isSuccessful ? "border-teal-500 focus:ring-teal-500" : ""} 
                  `}
              aria-describedby={`id-${field.name}-error-helper`}
              
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
              {hasError ? <InputErrorIcon /> : isSuccessful ? <InputSuccessIcon /> : null}
            </div>
          </div>
          {hasError && <ErrorMessage errorMessage={meta.error || ""} />}
        </div>
      );
    
})

export default TextArea
