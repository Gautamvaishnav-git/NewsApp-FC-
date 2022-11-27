import { useState } from "react";
import "./Css/App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [countryName, setCountryName] = useState("in");
  const getCountry = (data) => {
    setCountryName(data);
  };
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
        <Navbar categories={categories} getCountry={getCountry} />
        <Routes>
          <Route
            path=""
            element={
              <News
                key={"speacial"}
                apikey={apikey}
                category={"general"}
                country={countryName}
              />
            }
          />
          {categories.map((category, index) => {
            return (
              <Route
                key={index}
                path={category}
                element={
                  <News
                    category={category}
                    apikey={apikey}
                    country={countryName}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
