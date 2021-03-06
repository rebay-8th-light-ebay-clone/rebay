import { useState, useEffect } from "react";

const useForm = ({ submit, validate, initialValues = {}, minimum_price }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValidate = (values) => {
    return minimum_price ? validate(values, minimum_price) : validate(values);
  }

  useEffect(() => {
    if (errorCount(errors) === 0 && isSubmitting) {
      submit(values);
    }
    setIsSubmitting(false)
  }, [values, errors, submit, isSubmitting]);

  const errorCount = errors =>
    Object.values(errors).filter(error => !!error).length;

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      setIsSubmitting(true);
      setErrors(setValidate(values));
    }
  };

  const handleChange = event => {
    event.persist();

    const { name, value } = event.target;
    setValues(values => ({ ...values, [name]: value }));

    const fieldError = setValidate({ [name]: value });
    setErrors({ ...errors, [name]: fieldError[name] });
  };

  const formHasErrors = (errors) => {
    if (Object.keys(errors).length === 0) {
      return false;
    }
    const hasErrors = Object.values(errors).some(value => {
      return value !== "";
    })
    return hasErrors
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    formHasErrors
  };
};

export default useForm;
