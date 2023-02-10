import React from "react";
import s from "./Input.module.sass";

interface InputProps {
  value: string;
  setValue: (str: string) => void;
}

const Input: React.FC<InputProps> = ({ value, setValue }) => {
  return (
    <input
      className={s.Input}
      type="text"
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
    />
  );
};

export { Input };
