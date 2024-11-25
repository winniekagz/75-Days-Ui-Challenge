
import { Formik, Form, Field } from "formik";

import TextField from "../../../components/Gym/formInputs/ TextField";
import { useState } from "react";
import { FieldType, FormValues } from "../../../types/profile.types";
import { getValidationSchema } from "../../../utils/getValidation";



const MyForm = () => {

    const [formFields, setFormFields] = useState<any>([
        { name: "name", label: "Name", type: "text", validation: "required" },
        { name: "email", label: "Email", type: "email", validation: "email" },
        { name: "message", label: "Message", type: "text", validation: "minLength" },
      ]);
    
      // Handler to add a new field to the form
      const addField = () => {
        const name = prompt("Enter the name for the new field:");
        const label = prompt("Enter the label for the new field:");
        const type = prompt("Enter the type for the new field (e.g., text, email):", "text");
        const validation = prompt("Enter validation type (required, email, minLength):", "required");
    
        if (name && label && validation) {
        //   setFormFields([...formFields, { name, label, type, validation  }]);
        setFormFields([
            ...formFields,
            { name, label, type, validation: validation as FieldType["validation"] },
          ]);
        }
      };
  return (
    <Formik
    initialValues={formFields.reduce((acc:FormValues, field:FieldType) => {
        acc[field.name] = "";
        return acc;
      }, {} as FormValues)}
      validationSchema={getValidationSchema(formFields)}
    //   initialValues={{
    //     name: "",
    //     email: "",
    //     message: "", // For textarea
    //   }}
    //   validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="space-y-4">
          
             {formFields.map((field:FieldType, index:number) => (
            <Field
              key={index}
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={`Enter your ${field.label.toLowerCase()}`}
              component={TextField}
            />
          ))}

          {/* Button to add a new field */}
          <button
            type="button"
            onClick={addField}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg mt-4"
          >
            Add Field
          </button>

          <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded-lg">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
