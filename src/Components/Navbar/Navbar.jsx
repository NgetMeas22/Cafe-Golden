import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const links = ["Home", "Menu", "About", "Contact"];

  return (
    <div>
      {/* Large screen */}
      <nav className="hidden lg:flex w-full h-[100px] bg-amber-900/70 shadow-md items-center px-5">
        <div className="w-full h-full">
          <p className=" text-5xl font-medium py-5.5 text-amber-400">
            Café Golden Léaf
          </p>
        </div>
        <ul className="w-[60%] flex justify-evenly text-xl font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-yellow-600 text-2xl text-amber-400 duration-100"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-white px-3 py-2 rounded-xl w-[220px] text-white outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </nav>

      {/* Mobile screen */}
      <div className="lg:hidden flex items-center  justify-between h-[60px] px-5 bg-amber-900/70 shadow-md">
        <p className=" text-2xl font-medium py-5.5 text-amber-400">
          Café Golden Léaf
        </p>

        <button onClick={() => setOpen(!open)} className="text-3xl">
          {open ? <MdOutlineClose /> : <MdOutlineMenu />}
        </button>

        {/* Slide Menu */}
        <div
          className={`fixed top-0 left-0 w-1/2 h-screen bg-white text-amber-600 shadow-md transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className="pt-5 pl-4 space-y-4 text-xl font-medium">
            {/* Search inside slide menu */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 p-2 text-[15px] rounded-lg w-[90%] outline-none"
            />
            {links.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-yellow-500 duration-100"
                onClick={() => setOpen(false)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        {/* Overlay */}
        {open && (
          <div
            className="fixed top-0 right-0 w-1/2 h-screen bg-black/20"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
