import React, { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const nav = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  // refs for each footer block
  const blocksRef = useRef([]);
  useEffect(() => {
    blocksRef.current = blocksRef.current.slice(0, 6); // number of blocks we will observe
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target); // only animate once
          }
        });
      },
      { threshold: 0.12 }
    );
    blocksRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-slate-700 text-slate-100 ">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + short */}
          <div
            ref={(el) => (blocksRef.current[0] = el)}
            className="space-y-4 footer-elem"
            style={{ transitionDelay: "0ms" }}
          >
            <h3 className="text-3xl font-semibold">Café Golden Léaf</h3>
            <p className="text-lg opacity-80">
              Warm coffee, tasty treats, and a comfy seat — your little escape
              in the city.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Facebook"
                href="https://web.facebook.com/nget.meas.2025"
                className="p-2 rounded-full bg-slate-500 hover:bg-slate-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="p-2 rounded-full bg-slate-500 hover:bg-slate-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="p-2 rounded-full bg-slate-500 hover:bg-slate-600 transition"
              >
                <FaTwitter />
              </a>
           
            </div>
          </div>

          {/* Navigation */}
          <div
            ref={(el) => (blocksRef.current[1] = el)}
            className="footer-elem"
            style={{ transitionDelay: "80ms" }}
          >
            <h4 className="text-2xl font-medium">Explore</h4>
            <ul className="mt-3 space-y-2 text-lg">
              {nav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:underline hover:opacity-90"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Hours */}
          <div
            ref={(el) => (blocksRef.current[2] = el)}
            className="footer-elem"
            style={{ transitionDelay: "160ms" }}
          >
            <h4 className="text-2xl font-medium">Contact & Hours</h4>
            <div className="mt-3 text-lg space-y-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span> St 217 , Phnom Penh</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href="tel:+855966698074" className="hover:underline">
                  +855 966 698 074
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <a
                  href="mailto:measm2519@gmail.com"
                  className="hover:underline"
                >
                  measm2519@gmail.com
                </a>
              </div>

              <div className="pt-3">
                <p className="font-fw-medium text-2xl pb-5">Opening Hours</p>
                <p className="text-sm opacity-90">Mon — Fri: 7:00 — 20:00</p>
                <p className="text-sm opacity-90">Sat — Sun: 8:00 — 18:00</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div
            ref={(el) => (blocksRef.current[3] = el)}
            className="footer-elem"
            style={{ transitionDelay: "240ms" }}
          >
            <h4 className="text-2xl font-medium">Join our newsletter</h4>
            <p className="mt-2 text-lg opacity-80">
              Get special deals and seasonal menus — once or twice a month.
            </p>

            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="yourgmail.com"
                required
                className="flex-1 border rounded-md px-3 py-2 text-white"
              />
              <button className="px-4 py-2 rounded-md bg-blue-400 text-slate-900 font-medium hover:opacity-95">
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-sm opacity-60">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Creator Section — Now in the correct position */}
        <div
          ref={(el) => (blocksRef.current[4] = el)}
          className="mt-10 border-t border-slate-800 flex md:flex-row items-center gap-5 md:gap-10 text-center pt-7 footer-elem footer-bottom-elem"
          style={{ transitionDelay: "320ms" }}
        >
            <img
            src="./src/assets/image/profile.jpg"
            alt="Creator Profile"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border border-slate-700"
          />
          <p className="text-xs lg:text-xl opacity-900">
            Website created by <span className="font-medium">NGET MEAS</span>
          </p>
        </div>

        {/* Footer Bottom */}
        <div
          ref={(el) => (blocksRef.current[5] = el)}
          className="border-t border-slate-800 mt-10 pt-6 text-lg flex flex-col md:flex-row md:justify-between md:items-center gap-3 footer-elem"
          style={{ transitionDelay: "400ms" }}
        >
          <p className=" lg:text-1xl text-sm">
            © {new Date().getFullYear()} Café Golden Léaf — All rights reserved.
          </p>
          <div className="flex items-center gap-4 ">
            <a href="/privacy" className="hover:underline text-sm lg:text-1xl ">
              Privacy
            </a>
            <a href="/terms" className="hover:underline text-sm lg:text-1xl">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
