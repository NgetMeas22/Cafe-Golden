import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // ==== PRODUCT LIST ====
  const products = [
    {
      id: 1,
      img: Cafe1,
      name: "Espresso",
      aboutcafe: "Intense single shot of pure espresso.",
      price: 2,
    },
    {
      id: 2,
      img: Cafe2,
      name: "Americano",
      aboutcafe: "Espresso diluted with hot water.",
      price: 2.5,
    },
    {
      id: 3,
      img: Cafe3,
      name: "Latte",
      aboutcafe: "Smooth espresso with steamed milk.",
      price: 3.5,
    },
    {
      id: 4,
      img: Cafe4,
      name: "Cappuccino",
      aboutcafe: "Equal parts espresso, steamed milk and foam.",
      price: 3.5,
    },
    {
      id: 5,
      img: Cafe5,
      name: "Flat White",
      aboutcafe: "Velvety microfoam over espresso.",
      price: 3.75,
    },
    {
      id: 6,
      img: Cafe6,
      name: "Mocha",
      aboutcafe: "Chocolate and espresso with steamed milk.",
      price: 4,
    },
    {
      id: 7,
      img: Cafe7,
      name: "Macchiato",
      aboutcafe: "Espresso 'marked' with a dash of foam.",
      price: 2.75,
    },
    {
      id: 8,
      img: Cafe8,
      name: "Iced Coffee",
      aboutcafe: "Chilled brewed coffee over ice.",
      price: 2.5,
    },
  ];

  // =============== SEARCH FILTER (BY ID OR NAME) ===============
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.id.toString().includes(search)
  );

  return (
    <div>
      {/* ============ Large Screen Navigation ============ */}
      <nav className="hidden lg:flex w-full h-[100px] bg-amber-900/70 shadow-md items-center px-5">
        <div className="w-full h-full">
          <p className=" text-5xl font-medium text-amber-400">
            Café Golden Léaf
          </p>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by name or ID…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-white px-3 py-2 rounded-xl w-[220px] text-white outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </nav>

      {/* ============ Mobile Navigation ============ */}
      <div className="lg:hidden flex items-center justify-between h-[60px] px-5 bg-amber-900/70 shadow-md">
        <p className=" text-2xl font-medium text-amber-400">
          Café Golden Léaf
        </p>

        <button onClick={() => setOpen(!open)} className="text-3xl text-white">
          {open ? <MdOutlineClose /> : <MdOutlineMenu />}
        </button>

        {/* Slide Menu */}
        <div
          className={`fixed top-0 left-0 w-2/3 h-screen bg-white text-amber-600 shadow-md transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4">
            <input
              type="text"
              placeholder="Search by name or ID…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 p-2 text-[15px] rounded-lg w-full outline-none"
            />

            {/* SHOW SEARCH RESULTS (ONLY LIST, NO CARD UI) */}
            <div className="mt-4 space-y-2">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <p
                    key={item.id}
                    className="p-2 border-b text-lg font-medium"
                  >
                    {item.id}. {item.name}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 mt-2">No product found…</p>
              )}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed top-0 left-0 w-full h-screen bg-black/20"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
