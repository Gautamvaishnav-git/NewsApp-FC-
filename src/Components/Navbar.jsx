import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";

const Navbar = (props) => {
  const [country, setCountry] = useState("in");
  const [navToggle, setNavToggle] = useState("flex");

  useEffect(() => {
    props.getCountry(country);
  });
  const countries = [
    ["in", "india"],
    ["us", "usa"],
    ["ru", "russia"],
    ["jp", "japan"],
    ["ch", "Switzerland"],
    ["gb", "United Kingdom"],
    ["au", "Austrilla"],
    ["it", "italy"],
  ];
  const chooeseCountry = (e) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <header className="primaryBg w-full sticky top-0 shadow-md">
        <div className="sm:hidden bars w-full flex justify-end px-2">
          <button
            className="text-2xl py-2"
            onClick={() => {
              if (navToggle === "none") setNavToggle("flex");
              if (navToggle !== "none") setNavToggle("none");
            }}
          >
            <FiAlignRight />
          </button>
        </div>
        <nav>
          <ul
            className="flex sm:flex-row sm:gap-3 gap-1 w-full capitalize primaryBg px-3 py-2 w-full justify-center flex-col sm:items-center items:end"
            style={{ display: navToggle }}
          >
            {props.categories.map((elem, index) => {
              return (
                <li key={index}>
                  <Link to={`/${elem}`}>{elem}</Link>
                </li>
              );
            })}
            <select
              name="country"
              className="outline-0 primaryBg capitalize border border-current rounded sm:px-2 sm:ml-2 text-center mt-2"
              id="country"
              onChange={chooeseCountry}
            >
              {countries.map(([countryCode, countryName]) => {
                return (
                  <option value={countryCode} key={countryCode}>
                    {countryName}
                  </option>
                );
              })}
            </select>
          </ul>
        </nav>
        <form className="flex sm:flex-col rounded-l-lg px-3 sm:py-4 justify-center fixed z-10 sm:top-6 sm:right-0 top-3 color-picker flex-row shadow-md gap-5">
          <input type="radio" name="theme" id="Light" className="Light" />
          <input type="radio" name="theme" id="Middle" className="Middle" />
          <input
            type="radio"
            name="theme"
            id="Blue"
            className="Blue"
            defaultChecked
          />
        </form>
      </header>
    </>
  );
};

export default Navbar;
