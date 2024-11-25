import { forwardRef, useState } from "react";
import { useField } from "formik";
import { InputErrorIcon, InputSuccessIcon } from "../../../assets/icons";
import ErrorMessage from "../ErrorMessage";
import { DatePickerProps } from "../../../types/profile.types";
import CustomTypography from "../../uiComponents/Typography";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ type, label, placeholder, ...props }, ref) => {
    const [field, meta, helpers] = useField(props.field.name); // Formik's useField hook
    const { setValue } = helpers;
const [selectedDate,setSelectedDate]=useState(
  { 
    startDate: null, 
    endDate: null
}
)
    const hasError = Boolean(meta.touched && meta.error);
    const isSuccessful = Boolean(meta.touched && !meta.error);
    const isSingle=Boolean(type &&type==='date')
 
    const handleDateChange = (newValue: any) => {
      setSelectedDate(newValue)
      if (isSingle) {
        const dateString = newValue?.startDate ? newValue.startDate.toString() : '';
       
        field.onChange({ 
          target: { 
            name: field.name, 
            value: dateString 
          } 
        });
    
      } else {
    
        field.onChange({
          target: {
            name: field.name,
            value: {
              startDate: newValue?.startDate || '',
              endDate: newValue?.endDate || '',
            },
          },
        });
    
        setValue(newValue);
      }
    };
    

    return (
      <div className="w-full">
        <label
          htmlFor={`id-${field.name}`}
          className={CustomTypography({
            fontSize: "cardTitle",
          })}
        >
          {label}
        </label>
        <div className="relative">
          <Datepicker
            useRange={!isSingle}
            asSingle={isSingle}
            primaryColor={"red"}
            value={selectedDate}
            // value={isSingle ? field.value : { startDate: null, endDate: null }}
            onChange={(newValue)=>handleDateChange(newValue)}
            // placeholder={placeholder}
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

export default DatePicker;
