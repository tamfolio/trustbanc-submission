import React from "react";

const Button = ({
  variant,
  onClick,
  type,
  disabled,
  className,
  children,
  ...rest
}) => {
  const variants = {
    "btn-white": "btn-white",
    "btn-primary": "btn-primary",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      {...rest}
      className={`btn ${className} ${variants[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
