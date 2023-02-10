import React from "react";
import clsx from "clsx";
import s from "./Button.module.sass";

interface ButtonProp {
  text: string;
  handleClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProp> = ({ text, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={clsx(s.Button, className)}>
      {text}
    </button>
  );
};

export { Button };
