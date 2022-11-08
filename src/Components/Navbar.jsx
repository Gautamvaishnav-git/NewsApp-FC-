const Navbar = () => {
  return (
    <>
      <header className="primaryBg w-full">
        <nav className="">
          <ul className="flex gap-3 w-full capitalize primaryBg px-3 py-2 w-full">
            {[
              ["home", "/home", "key1"],
              ["about", "/about", "key2"],
              ["contact", "/contact", "key3"],
              ["services", "/services", "key4"],
            ].map(([title, path, key]) => {
              return (
                <li key={key}>
                  <a href={path}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <form className="flex flex-col gap-5 bg-slate-100 rounded-l-lg px-3 py-4 w-fit justify-center fixed top-6 right-0 color-picker">
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
