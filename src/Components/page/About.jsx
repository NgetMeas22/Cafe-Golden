import React from 'react'

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-brown-700 mb-6">☕ About Our Café</h1>
      
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <span className="font-semibold">Café Golden Léaf</span>, your cozy corner for freshly
        roasted coffee, homemade pastries, and warm conversations.
      </p>
      
      <p className="text-lg text-gray-700 mb-8">
        Founded in 2020, our mission is simple: to bring people together over
        great coffee. We source our beans ethically from small farms and roast
        them locally to ensure every cup is rich, smooth, and unforgettable.
      </p>
      
      <h2 className="text-2xl font-semibold text-brown-600 mb-4">🌿 What Makes Us Special</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li>Organic, fair-trade coffee beans</li>
        <li>Freshly baked pastries every morning</li>
        <li>Relaxing atmosphere with free Wi-Fi</li>
        <li>Community events and live music nights</li>
      </ul>
      
      <p className="text-lg text-gray-700">
        Whether you’re here to work, catch up with friends, or simply enjoy a
        quiet moment, we’re delighted to serve you.
      </p>
    </section>
  )
}

export default About
