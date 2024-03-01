import React from "react";

const Button = ({ variant = "primary", className, children, ...rest }) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "btn btn--primary";
      break;
    case "border":
      variantClass = "btn btn--border --black";
      break;
    default:
      return "";
  }

  return (
    <button className={`${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
