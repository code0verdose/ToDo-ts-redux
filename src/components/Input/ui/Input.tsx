import React from "react";
import s from "./Input.module.sass";

interface InputProp {
  value: string;
  setValue: (str: string) => void;
}

const Input: React.FC<InputProp> = ({ value, setValue }) => {
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
