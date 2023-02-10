import React from "react";
import s from "./Title.module.sass";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className={s.Title}>{text}</h1>;
};

export { Title };
