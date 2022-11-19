import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [country, setCountry] = useState();
  return (
    <>
      <header className="primaryBg w-full sticky top-0 shadow-md">
        <nav>
          <ul className="flex gap-3 w-full capitalize primaryBg px-3 py-2 w-full justify-center ">
            {props.categories.map((elem) => {
              return (
                <li key={elem}>
                  <Link to={`/${elem}`}>{elem}</Link>
                </li>
              );
            })}
            <select
              name="country"
              className="outline-0 primaryBg capitalize border border-current rounded px-2 ml-2 text-center"
              id="country"
              onChange={(e) => {
                setCountry(e.target.value);
                console.log(country);
              }}
            >
              <option value="in">india</option>
              <option value="us">usa</option>
              <option value="jp">japan</option>
            </select>
          </ul>
        </nav>
        <form className="flex flex-col gap-5 bg-slate-100 rounded-l-lg px-3 py-4 w-fit justify-center fixed z-10 top-6 right-0 color-picker">
          <input type="radio" name="theme" id="Light" className="Light" />
          <input type="radio" name="theme" id="Green" className="Green" />
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
