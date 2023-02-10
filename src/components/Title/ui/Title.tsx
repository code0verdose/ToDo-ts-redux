import React from "react";
import s from "./Title.module.sass";

const Title = ({ text }) => {
  return <h1 className={s.Title}>{text}</h1>;
};

export { Title };
