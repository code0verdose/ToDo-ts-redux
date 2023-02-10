import React from "react";
import s from "./Wrapper.module.sass";

interface WrapperProp {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProp> = ({ children }) => {
  return <div className={s.Wrapper}>{children}</div>;
};

export { Wrapper };
