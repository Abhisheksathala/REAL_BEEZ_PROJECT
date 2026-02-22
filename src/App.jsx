import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="cal-[100vw-3rem] mx-auto">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
