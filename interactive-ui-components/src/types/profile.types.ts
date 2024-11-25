export type ModalProps={
    isOpen:boolean,
    handleOpen:()=>{}
    title:string;
    subTitle:string;
    submitText:string;
    cancelText:string;
    children:React.ReactNode

}

export type FieldTypes = {
  name: string;
  label: string;
  type: string | null; 
  validation: string;
  fields?: FieldType[]; 
  options?: string[]; 
};
export type FieldType = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "dropdown" | "multi-select" | "group" | "date" | "number" | "log" | null; // Defining acceptable types
  validation: string;  
  options?: string[]; 
  fields?: FieldType[];  
  additionalInfo?: string;  
  isOptional?:boolean
};


  
 export type FormValues = {
    [key: string]: string;
  };

  export  type InputProps = {
    label: string;
    type: string;
    placeholder: string;
    index: number; 
    field:FieldType
  };

  export interface DatePickerProps extends InputProps{
    isSingle:boolean
  }