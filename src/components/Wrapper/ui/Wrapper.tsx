import React from "react";
import s from "./Wrapper.module.sass";

const Wrapper = ({ children }) => {
  return <div className={s.Wrapper}>{children}</div>;
};

export { Wrapper };
