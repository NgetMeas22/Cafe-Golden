import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../Data";

const ProductDetail = () => {
  const { id } = useParams();
  const [productObj, setProductObj] = useState(null);

  useEffect(() => {
    if (id) {
      const productItem = products.find((item) => item.id.toString() === id);
      setProductObj(productItem);
    }
  }, [id]);

  if (!productObj) {
    return <div className="container">Product not found...</div>;
  }

  return (
  <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center p-6">
    <div className="bg-white max-w-4xl w-full rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

      {/* Image Section */}
      <div className="bg-gray-100 flex justify-center items-center p-6">
        <img
          className="w-full h-96 object-contain rounded-lg"
          src={productObj.img}
          alt={productObj.name}
        />
      </div>

      {/* Details Section */}
      <div className="p-8 flex flex-col justify-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {productObj.name}
        </h1>

        <p className="text-gray-600 text-lg mb-4">
          {productObj.aboutcafe}
        </p>

        <span className="text-3xl font-semibold text-amber-600 mb-6">
          ${productObj.price}
        </span>

        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl shadow-lg transition-all duration-200">
          Add To Cart
        </button>
        
      </div>

    </div>
  </div>
);

};  

export default ProductDetail;
