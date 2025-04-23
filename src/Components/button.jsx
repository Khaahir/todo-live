import React from "react";

const Button = ({ onClick, children, classname }) => {
  return (
    <button onClick={onClick} className={`${classname}`}>
      {children}
    </button>
  );
};

export default Button;
