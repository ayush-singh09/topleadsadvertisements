import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome To{" "}
          <span className="text-blue-500">Top Leads Advertising</span>
        </h1>
        <p className="text-xl mb-6">
          Empowering Healthcare with Quality Leads and AI Automation
        </p>
        <a
          href="#get-started"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full hover:opacity-90 transition"
        >
          Get Started
        </a>

        {/* Floating Cards */}
        <div className="mt-10 flex justify-center space-x-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">Qualified Leads</h3>
            <p>Get leads that convert faster and efficiently.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">AI Automation</h3>
            <p>Boost efficiency with AI-driven marketing solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
