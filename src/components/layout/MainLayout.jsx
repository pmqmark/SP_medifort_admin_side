import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <nav className="border-b-2">
        <Navbar />
      </nav>
      <section className="flex w-full">
        <div className="border-r-2 h-screen p-5 lg:w-1/4">
          <Sidebar />
        </div>
        <div className="p-3 lg:p-5 w-full bg-[#DFE3E7] flex flex-col items-start">
          {children}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default MainLayout;