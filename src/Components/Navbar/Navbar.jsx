import { useContext } from "react";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { CartContext } from "../Context/CartContext";

export default function Navbar({ toggleCart }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const { cart } = useContext(CartContext);
  const nav = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

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
          {nav.map((item) => (
            <li className="relative group" key={item.name}>
              <a
                href={item.href}
                className="cursor-pointer text-2xl text-amber-400 hover:text-yellow-300 duration-200"
              >
                {item.name}
              </a>
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-yellow-300 transition-all duration-150 group-hover:w-full"></span>
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
        <ul>
          <li className="w-[50px] h-[50px] ml-3  flex items-center justify-evenly">
            <PiShoppingCart
              className="text-4xl cursor-pointer text-amber-400 hover:scale-110 transition-transform duration-300"
              onClick={toggleCart}
            />
            {cart.length > 0 && (
              <span className="absolute -top-1 left-5 bg-red-600 text-white text-xs w-2 h-2 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </li>
        </ul>
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
            <ul>
          <li className="w-[50px] h-[50px] ml-3  flex items-center justify-evenly">
            <PiShoppingCart
              className="text-3xl cursor-pointer text-amber-400 hover:scale-110 transition-transform duration-300"
              onClick={toggleCart}
            />
            {cart.length > 0 && (
              <span className="absolute -top-1 left-5 bg-red-600 text-white text-xs w-2 h-2 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </li>
        </ul>

            {nav.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:underline hover:opacity-90 cursor-pointer hover:text-yellow-300 text-xl text-amber-400 duration-100"
                >
                  {item.name}
                </a>
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
