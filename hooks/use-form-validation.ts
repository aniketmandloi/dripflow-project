import { useState } from "react";
import { toast } from "sonner";

export const useFormValidation = (initialState: any) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values: any) => {
    const errors: any = {};

    if (!values.url && values.type === "url") {
      errors.url = "URL is required";
    } else if (values.url && !/^https?:\/\/.+/.test(values.url)) {
      errors.url = "Please enter a valid URL";
    }

    // Add more validation rules

    return errors;
  };

  const handleSubmit = async (callback: (values: any) => Promise<void>) => {
    setIsSubmitting(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await callback(values);
        toast.success("Success!");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    }
    setIsSubmitting(false);
  };

  return { values, setValues, errors, isSubmitting, handleSubmit };
};
