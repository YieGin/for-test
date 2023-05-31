import React, { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef(({ className, children, ...rest }, ref) => {
  return (
    <button className={`button ${className}`} {...rest} ref={ref}>
      {children}
    </button>
  );
});

export default Button;