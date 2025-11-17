import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="w-full">
      {/* Heading */}
      <h1 className="text-amber-500 text-center font-medium m-10 text-3xl md:text-4xl lg:text-5xl">
        Best Sellers
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {product.map((item) => (
          <Link
            key={item.id}
            to={`/product/detail/${item.id}`}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="w-full h-40 lg:h-70 md:h-50 flex justify-center items-center p-3">
              <img
                className="w-full h-full object-contain"
                src={item.img}
                alt={item.name}
              />
            </div>  
            {/* Text */}
            <div className="p-4">
              <p className="text-xl font-semibold lg:text-2xl">{item.name}</p>

              <p className="text-gray-500 text-sm lg:text-base mt-1">
                {item.aboutcafe}
              </p>

              <p className="text-lg font-bold text-amber-600 mt-2">
                ${item.price}
              </p>

              {/* Button */}
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
