import React from "react";
import clsx from "clsx";
import s from "./Button.module.sass";

const Button = ({ text, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={clsx(s.Button, className)}>
      {text}
    </button>
  );
};

export { Button };
