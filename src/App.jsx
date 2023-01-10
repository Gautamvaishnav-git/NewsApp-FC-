import { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [countryName, setCountryName] = useState("in");
  const getCountry = (data) => {
    setCountryName(data);
  };
  const apiKey = import.meta.env.VITE_API_KEY;
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
                key={"special"}
                apiKey={apiKey}
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
                    apiKey={apiKey}
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
