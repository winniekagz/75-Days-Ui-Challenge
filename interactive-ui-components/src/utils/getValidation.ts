import { FieldType } from "../types/profile.types";
import * as Yup from "yup";


export const getValidationSchema = (fields: FieldType[]) => {
  const schemaFields = fields.reduce((acc, field) => {
    if (field.validation === "required") {
      acc[field.name] = Yup.string().required(`${field.label} is required`);
    } else if (field.validation === "email") {
      acc[field.name] = Yup.string().email("Invalid email").required(`${field.label} is required`);
    } else if (field.validation === "minLength") {
      acc[field.name] = Yup.string()
        .min(10, `${field.label} must be at least 10 characters`)
        .required(`${field.label} is required`);
    } else if (field.validation === "password") {
      acc[field.name] = Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must contain at least one letter and one number"
        )
        .required(`${field.label} is required`);
    } else if (field.validation === "confirmPassword") {
      acc[field.name] = Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm Password is required");
    } else if (field.validation === "phoneNumber") {
      acc[field.name] = Yup.string()
        .matches(
          /^\+?[1-9]\d{1,14}$/,
          "Invalid phone number. Must be in international format (e.g., +1234567890)"
        )
        .required(`${field.label} is required`);
    } else if (field.validation === "optional") {
      acc[field.name] = Yup.string(); // Optional fields can be empty or valid
    }
    // Add more validation types if needed
    return acc;
  }, {} as Record<string, Yup.AnySchema>);

  return Yup.object().shape(schemaFields);
};
