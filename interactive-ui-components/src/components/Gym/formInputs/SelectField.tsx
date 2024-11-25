import { forwardRef, useEffect, useState } from "react";
import { useField } from "formik";
import Select from "react-tailwindcss-select";
import { InputErrorIcon, InputSuccessIcon } from "../../../assets/icons";
import ErrorMessage from "../ErrorMessage";
import CustomTypography from "../../uiComponents/Typography";
import { InputProps } from "../../../types/profile.types";

interface SelectFieldProps extends InputProps {
  options: { value: string; label: string }[] | undefined;
}

const SelectField = forwardRef<HTMLDivElement, SelectFieldProps>(({
  type,
  placeholder,
  label,
  options,
  index,
  ...props
}) => {
  const [field, meta] = useField(props.field.name); // use useField hook to access field and meta
  const hasError = Boolean(meta.touched && meta.error);
  const isSuccessful = Boolean(meta.touched && !meta.error);
  const [selectedValues, setSelectedValues] = useState<any>([]);

  const handleChange = (value: any) => {
    // Destructure the value to get the selected value(s)
    const { value: selectValue } = value;

    if (type === 'multi-select') {
      setSelectedValues((prev: any) => {
        return [...prev, ...value?.map((val: any) => val.value)];
      });
    } else {
      field.onChange({
        target: {
          name: field.name,
          value: selectValue ? selectValue : "", // Update the field value
        },
      });
    }
  };
  const selectValue:any = type === 'dropdown'
  ? options?.find(option => option.value === field.value) || {}as { value: string; label: string }[] // Fall back to empty string if not found
  : Array.isArray(selectedValues) 
    ? options?.filter((option) => selectedValues.includes(option.value)) || [] // Fall back to empty array if not found
    : {}as { value: string; label: string }[];

  console.log('se;e', selectedValues, selectValue);
  const shouldShowPlaceholder = !meta.touched || (Array.isArray(selectValue) && selectValue.length === 0);
  return (
    <div className="w-full">
      <label htmlFor={`id-${field.name}`} className={CustomTypography({ fontSize: 'cardTitle' })}>
        {label}
      </label>
      <div className="relative">
        <Select
          {...props}
          primaryColor="red"
          value={shouldShowPlaceholder ? '' : selectValue}
          onChange={handleChange}
          options={options ?? []}
          
          placeholder={placeholder}
          isMultiple={type === 'multi-select'}
          classNames={{
            menuButton: () => (` flex border h-[52] bg-white py-auto px-4 block w-full rounded-lg text-sm border border-secondary/10 placeholder:text-gray-500 ${
              hasError
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : isSuccessful
                ? "border-teal-500 focus:ring-teal-500"
                : "border-secondary/10"
            } `),
            menu: "bg-white border rounded shadow-lg",
          }}
        />
        {hasError ? (
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
            <InputErrorIcon />
          </div>
        ) : isSuccessful ? (
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
            <InputSuccessIcon />
          </div>
        ) : null}
      </div>
      {hasError && <ErrorMessage errorMessage={meta.error || ""} />}
    </div>
  );
});

export default SelectField;
