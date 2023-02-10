import React from "react";
import { Header } from "../../components/Header/ui/Header";
import { Footer } from "../../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
