import React, { forwardRef, useState } from "react";
import "./Input.css";

const Input = forwardRef(({ className, placeholder, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const displayPlaceholder = isFocused ? "" : placeholder;

  return (
    <input
      className={`input ${className}`}
      placeholder={displayPlaceholder}
      {...rest}
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
});

export default Input;