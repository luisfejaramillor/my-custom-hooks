import { useState } from "react";

export const useSimpleForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);
  const reset = () => {
    setValues(initialValue);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  /* const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      name: "",
      email: "",
      password: "",
      description: "",
    });
  }; */

  return [values, handleInputChange, reset];
};
