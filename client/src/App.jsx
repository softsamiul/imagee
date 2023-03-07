import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {logo} from "./assets/index"
import {Home, CreatePosts} from "./pages"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <header className=" header-wrap w-full max-w-7xl mx-auto flex justify-between items-center bg-white py-4 border-b border-b[#e6ebf4]">
        <Link to="/">
          {/* <img src={logo} alt="logo" className="object-contain w-36"/> */}
          <h2 className="branding__text">Imagee</h2>
          <span className="hero__tagline">Craft Your Dreams with Imagee</span>
        </Link>
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePosts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
