import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../Data";
import { CartContext } from "../../Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [productObj, setProductObj] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["S", "M", "L"];

  useEffect(() => {
    const productItem = products.find(
      (item) => item.id.toString() === id
    );
    setProductObj(productItem);
  }, [id]);

  if (!productObj) {
    return <div className="container">Product not found...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...productObj,
      quantity: 1,
      size: selectedSize,
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center p-6">
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* Image */}
        <div className="bg-gray-100 flex justify-center items-center p-6">
          <img
            className="w-full h-96 object-contain"
            src={productObj.img}
            alt={productObj.name}
          />
        </div>

        {/* Details */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{productObj.name}</h1>
          <p className="text-gray-600 mb-4">{productObj.aboutcafe}</p>
          <p className="text-2xl font-semibold text-amber-600 mb-4">
            $ {productObj.price}
          </p>

          {/* Size */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Select Size</h2>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded border
                    ${
                      selectedSize === size
                        ? "bg-amber-500 text-white"
                        : "bg-white"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
