import React from "react";
// import { Input } from "@chakra-ui/react";

import { Field } from "formik";

const Input = ({
  className,
  disabled,
  value,
  touched,
  type,
  name,
  placeholder,
  error,
  label,
  headText,
  ...rest
}) => {
  return (
    <>
      <Field
        value={value}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`${className} ${
          touched && touched[name] && error
            ? "border-red"
            : touched && touched[name] && ""
        } w-full`}
      />

      {error && touched && <p className='input-error'>{error}</p>}
    </>
  );
};

export default Input;
