import React from "react";

export const Contact = () => {
  return (
    
    <div className="min-h-screen w-full flex items-center justify-center">

     <div className=" grid grid-cols-1 lg:grid-cols-2 shadow-lg">

     <div
        className="w-[400px]  h-[220px] lg:h-[480px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.pinimg.com/1200x/1b/52/65/1b526527bc9fad50790c2c6773bbec42.jpg')" }}>
          <h1 className=" text-center lg:pt-53 pt-20 text-2xl lg:text-3xl font-medium text-amber-900/70 "> Contact form </h1>
          <p className=" lg:p-8 p-3 text-center text-1xl text-amber-900/70 "> We'd love to hear from you. Fill out the form so we can connect with you and make your visits to Cafe Golden Leaf even better.</p>
      </div>

       <div
        className="w-[400px] h-[480px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('#')" }}>
          <form className="space-y-5 px-5 py-3">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-500 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-medium transition"
            >
              Send Message

            </button>
            <p className=" ml-50 text-1xl hover:underline">Forget Password ?</p>
          </form>
      </div>

     </div>
    </div>
  );
};
