import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://via.placeholder.com/500"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Welcome to *Top Leads Advertising*, where innovation meets expertise in lead generation and business growth.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We specialize in delivering tailored lead-generation solutions that empower businesses across industries to thrive. From content calendars and engaging social media campaigns to cutting-edge video ads and AI automation, we leverage the latest tools and strategies to connect you with your ideal audienceˀ
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            Our expertise extends beyond traditional services. We understand that every business is unique, which is why we also offer specialized services, including targeted campaigns for professionals like doctors and astrology-based business insights, blending traditional knowledge with modern strategies for exceptional results.
              </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We maintain transparency and honesty in all our dealings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We strive to bring creativity and innovation to everything we do.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We are committed to delivering the best quality in our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
