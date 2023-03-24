import React from "react";
import logo from "./assets/logo.svg";
import { Link, Routes, Route } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./toastify.css";

const App = () => {
  return (
    <>
      <header className="w-full flex justify-between bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-28 object-contain" />
        </Link>
        <Link
          to={"/create-post"}
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <ToastContainer position="top-right" toastClassName="my-toast" />
    </>
  );
};

export default App;
