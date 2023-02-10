import React from "react";
import { Header } from "../../components/Header/ui/Header";
import { Footer } from "../../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
