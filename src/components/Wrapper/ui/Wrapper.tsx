import React from "react";
import s from "./Wrapper.module.sass";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={s.Wrapper}>{children}</div>;
};

export { Wrapper };
