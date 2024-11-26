import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Company Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Top Leads Advertising
          </h3>
          <p>Empowering businesses with AI-driven lead generation solutions.</p>
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
  );
};

export default Footer;
