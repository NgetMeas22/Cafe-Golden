import React from "react";

const OurStory = () => {
  return (
    <div className=" min-h-screen w-full ">
      
      <h1 className=" text-center text-4xl font-medium text-amber-500 m-5">Our Story</h1>
      <p className=" text-center mb-10 text-gray-400">Cafe Golden Leaf began with a dream to share quality Khmer-inspired coffee with everyone.</p>
      <div className=" grid-cols-1 lg:grid-cols-2 lg:flex md:flex items-center justify-center mb-5  ">
        <div className=" w-full lg:w-[430px]  h-90 lg:h-[450px] ">
          <p className=" text-1xlz lg:text-lg text-amber-900/70 font-semibold p-5">
            The story began with three Cambodian coffee-loving youths who
            dreamed of building a coffee brand that truly represents the Khmer
            spirit. That dream came to life in 2017 with the opening of the very
            first store — a simple but inviting Cafe Golden Leaf Kdan Two. With
            strong focus on fast service, affordable prices, and high-quality
            products, Cafe Golden Leaf has grown dramatically, transforming into
            one of the favorite coffee and food chains among Khmer people.
            Today, the brand continues to expand, reaching 43 stores across the
            country, including 8 premium Cafe Golden Leaf+ locations.
          </p>
        </div>
        <div className=" lg:w-[700px] h-[400px] lg:h-[450px] bg-amber-900 bg-cover bg-center  bg-no-repeat"
         style={{ backgroundImage: "url('https://about.starbucks.com/uploads/2025/05/SBX20250508-Impact-Report-TOC-Coffee-scaled.jpg')" }}>
          
        </div>
      </div>
    </div>
  );
};

export default OurStory;
