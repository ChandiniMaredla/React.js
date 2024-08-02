import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children} {/* This will render the content of the current route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
