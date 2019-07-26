import { useState, useEffect } from "react";

const useForm = ({ submit, validate, initialValues = {} }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (errorCount(errors) === 0 && isSubmitting) {
      submit(values);
    }
  }, [values, errors, submit, isSubmitting]);

  const errorCount = errors =>
    Object.values(errors).filter(error => !!error).length;

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      setIsSubmitting(true);
      setErrors(validate(values));
    }
  };

  const handleChange = event => {
    event.persist();

    const { name, value } = event.target;
    setValues(values => ({ ...values, [name]: value }));

    const fieldError = validate({ [name]: value });
    setErrors({ ...errors, [name]: fieldError[name] });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
