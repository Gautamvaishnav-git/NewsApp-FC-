import { useState, useEffect } from "react";
import "./Css/App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const categories = [
    "general",
    "business",
    "technology",
    "entertainment",
    "health",
    "science",
    "sports",
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar categories={categories} />
        <Routes>
          <Route path="/" element={<News category={"general"} />} />
          {categories.map((category) => {
            return (
              <>
                <Route
                  path={category}
                  element={<News category={category} API_KEY={API_KEY} />}
                />
              </>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
