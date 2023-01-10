import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";

const Navbar = (props) => {
  const [country, setCountry] = useState("in");
  const [navToggle, setNavToggle] = useState("flex");

  const toggleFunc = () => {
    if (navToggle === "none") setNavToggle("flex");
    if (navToggle !== "none") setNavToggle("none");
  };

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
    ["au", "Australia"],
    ["it", "italy"],
  ];
  const chooseCountry = (e) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <header className="w-full sticky top-0 z-[1000] text-current backdrop-blur-md bg-gradient-to-b from-gray-900 to-gray-600/10">
        <div className="sm:hidden bars w-full flex flex-wrap justify-end px-2">
          <button className="text-2xl py-2" onClick={toggleFunc}>
            <FiAlignRight />
          </button>
        </div>
        <nav>
          <ul
            className="flex sm:flex-row flex-wrap sm:gap-3 gap-1 w-full capitalize px-3 py-4 w-full justify-center flex-col sm:items-center items:end"
            style={{ display: navToggle }}
          >
            {props.categories.map((elem, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "navItem relative text-teal-400"
                        : "inactive relative navItem  text-gray-400"
                    }
                    to={`/${elem}`}
                  >
                    {elem}
                  </NavLink>
                </li>
              );
            })}
            <select
              name="country"
              className="outline-0 bg-transparent capitalize rounded sm:px-2 sm:ml-2 text-center mt-2 border border-gray-500/30"
              id="country"
              onChange={chooseCountry}
            >
              {countries.map(([countryCode, countryName]) => {
                return (
                  <option
                    value={countryCode}
                    key={countryCode}
                    className="bg-gray-900"
                  >
                    {countryName}
                  </option>
                );
              })}
            </select>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
