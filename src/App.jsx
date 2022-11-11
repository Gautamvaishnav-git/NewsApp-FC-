import "./Css/App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const categories = [
    "business",
    "general",
    "sports",
    "technology",
    "entertainment",
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
                <Route path={category} element={<News category={category} />} />
              </>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
