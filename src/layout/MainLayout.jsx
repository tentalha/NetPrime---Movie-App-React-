import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Home from "../Icons/Home.ico";
import About from "../Icons/About.png";
import Menu from "../Icons/Menu.png";
import Contact from "../Icons/Contact.ico";
import Price from "../Icons/Price.png";
import { Routes, Route } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div className="font-mochi">
      <TopBar />
      <div className="flex flex-col fixed left-0 w-32 min-h-screen bg-slate-100">
        <SideBar item="Home" icon={Home} />
        <SideBar item="About" icon={About} />
        <SideBar item="Menu" icon={Menu} />
        <SideBar item="Contact" icon={Contact} />
        <SideBar item="Pricing" icon={Price} />
      </div>
      <div
        style={{ width: "calc(100% - 150px)", height: "calc(100vh - 3rem)" }}
        className=" relative ml-[150px] mt-12"
      >
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
