import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-gradient-to-mid min-h-[100vh] w-[100vw]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
