import React from "react";

const ServicePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Services</h1>
        <p className="text-gray-600 text-center mb-12 leading-relaxed">
          We offer a range of high-quality services tailored to meet your needs.
          Discover how we can help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Web Development</h3>
            <p className="text-gray-600">
              Build modern, responsive, and user-friendly websites with our expert web development team.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Mobile App Development</h3>
            <p className="text-gray-600">
              Create intuitive and engaging mobile applications for iOS and Android platforms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">UI/UX Design</h3>
            <p className="text-gray-600">
              Enhance user experience with our creative and functional UI/UX design solutions.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 leading-relaxed">
            With years of experience and a customer-focused approach, we deliver exceptional services
            designed to exceed your expectations. Let us bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
