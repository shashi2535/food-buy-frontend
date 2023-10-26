import React from "react";

export const FormButton = ({ children, text, ...rest }) => {
  return (
    <button
      className={`btn ${
        rest.className
          ? rest.className
          : "border form-buttons text-secondary fs-5 fw-light"
      } ${children && "text-md-start"}`}
      type="button"
      {...rest}
    >
      {children}
      {text}
    </button>
  );
};
