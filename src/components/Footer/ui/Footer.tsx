import React from "react";
import s from "./Footer.module.sass";

const Footer = () => {
  return (
    <footer className={s.Footer}>
      <p>
        Made by{" "}
        <a
          title="GitHub - Profile"
          target="_blank"
          href="https://github.com/code0verdose"
        >
          code0verdose
        </a>
      </p>
    </footer>
  );
};

export { Footer };
