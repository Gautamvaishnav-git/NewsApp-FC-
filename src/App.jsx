import { useState, useEffect } from "react";
import "./Css/App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const country = "in";
  const apikey = import.meta.env.VITE_API_KEY;
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
          <Route
            path=""
            element={
              <News
                key={"speacial"}
                apikey={apikey}
                category={"general"}
                country={country}
              />
            }
          />
          {categories.map((category, index) => {
            return (
              <>
                <Route
                  key={category}
                  path={category}
                  element={
                    <News
                      key={index}
                      category={category}
                      apikey={apikey}
                      country={country}
                    />
                  }
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
