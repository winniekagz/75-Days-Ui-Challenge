import { forwardRef } from "react";
import { useField } from "formik";
import { InputErrorIcon, InputSuccessIcon } from "../../../assets/icons";
import ErrorMessage from "../ErrorMessage";
import { InputProps } from "../../../types/profile.types";
import CustomTypography from "../../uiComponents/Typography";
import Datepicker from "react-tailwindcss-datepicker";
import { COLORS } from "../../../constants/gym";


const SingleDatePicker = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, ...props }) => {
    const [field, meta, helpers] = useField(props.field.name); // Formik's useField hook
    const { setValue } = helpers;

    const hasError = Boolean(meta.touched && meta.error);
    const isSuccessful = Boolean(meta.touched && !meta.error);

    return (
      <div className="w-full">
        <label
          htmlFor={`id-${field.name}`}
          className={CustomTypography({
            fontSize: "cardTitle",
          })}
        > Test
          {label}
        </label>
        <div className="relative">
          <Datepicker
          useRange={false}
          asSingle={true}
          primaryColor={'red'}
            value={field.value || null}
            onChange={(newValue) => setValue(newValue)}
            placeholder={placeholder}
            inputClassName={`py-3 px-4 block w-full rounded-lg text-sm border border-secondary/10 
              ${hasError ? "border-red-500 focus:border-red-500 focus:ring-red-500" :
              isSuccessful ? "border-teal-500 focus:ring-teal-500" : ""}`}
            aria-describedby={`id-${field.name}-error-helper`}
         
          />
          <div className="absolute inset-y-0 end-0 flex items-center pe-3">
            {hasError ? <InputErrorIcon /> : isSuccessful ? <InputSuccessIcon /> : null}
          </div>
        </div>
        {hasError && <ErrorMessage errorMessage={meta.error || ""} />}
      </div>
    );
  }
);

export default SingleDatePicker;
