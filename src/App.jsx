import React, { useState } from "react";

const App = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="py-4">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src="/path-to-logo" alt="Logo" className="h-10" />
          </div>

          {/* Navigation */}
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#case-studies" className="hover:text-gray-300">
                Case Studies
              </a>
            </li>
          </ul>

          {/* Call Now Button */}
          <a
            href="#call-now"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full hover:opacity-90"
          >
            Call Now
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-24 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Welcome To{" "}
            <span className="text-blue-500">Top Leads Advertising</span>
          </h1>
          <p className="text-xl mb-6">
            Empowering Healthcare with Quality Leads and AI Automation
          </p>
          <a
            href="#get-started"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full hover:opacity-90"
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

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Our Solar Lead Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg">
              <h3 className="font-bold text-lg">Lead Generation for Doctors</h3>
              <p>Generate targeted leads to help grow your practice.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
              <h3 className="font-bold text-lg">AI Automation Solutions</h3>
              <p>Automate your lead flow with AI-driven tools.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
              <h3 className="font-bold text-lg">Customized Campaigns</h3>
              <p>Design marketing campaigns tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Most Popular Questions
          </h2>
          <div className="space-y-6">
            {[
              "How do you ensure the quality of your leads?",
              "How does your AI system improve lead generation?",
              "What industries do you specialize in?",
              "How do you integrate automation with leads?",
            ].map((question, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-bold">{question}</h3>
                {activeFAQ === index && (
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus luctus urna sed urna ultricies ac tempor dui
                    sagittis.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Top Leads Advertising
            </h3>
            <p>
              Empowering businesses with AI-driven lead generation solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 md:mt-0">
            <h4 className="text-white font-bold">Services</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Marketing Campaigns
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
