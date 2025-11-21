import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ product }) => {
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, product.length);

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // add class once
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // stop observing so it won't re-trigger on drag/scroll
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [product]);

  return (
    <div className="w-full ">
      <div className=" w-full  py-7">
        <h1 className="text-amber-300 text-center mb-2 font-medium text-xl md:text-xl lg:text-xl">
          Our Selection
        </h1>
        <h1 className="text-amber-500 text-center mb-3 font-medium text-3xl md:text-4xl lg:text-5xl">
          Best Sellers
        </h1>

        <hr className="my-6 w-[150px] lg:w-[200px] mx-auto border-0 h-0.5 bg-linear-to-r from-transparent via-amber-800 to-transparent" />

        <h1 className="text-gray-400 text-center  m-5 text-1xl md:text-xl lg:text-lg">
          Each batch of our coffee beans is carefully roasted to bring out their
          unique flavors and aromas.
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {product.map((item, index) => (
          <Link
            key={item.id}
            to={`/product/detail/${item.id}`}
            ref={(el) => (refs.current[index] = el)}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl 
                       transition-all duration-300 card"
            // stagger via inline style (optional)
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="w-full h-40 lg:h-70 md:h-50 flex justify-center items-center p-3">
              <img
                className="w-full h-full object-contain"
                src={item.img}
                alt={item.name}
              />
            </div>

            <div className="p-4">
              <p className="text-xl font-semibold lg:text-2xl">{item.name}</p>

              <p className="text-gray-500 text-sm lg:text-base mt-1">
                {item.aboutcafe}
              </p>

              <p className="text-lg font-bold text-amber-600 mt-2">
                ${item.price}
              </p>

              <button className="mt-3 bg-blue-500 w-full text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-all">
                Add To Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
