import React from "react";
import s from "./Title.module.sass";

interface TitleProp {
  text: string;
}

const Title: React.FC<TitleProp> = ({ text }) => {
  return <h1 className={s.Title}>{text}</h1>;
};

export { Title };
