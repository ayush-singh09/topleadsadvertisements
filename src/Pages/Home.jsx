import React from "react";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />

      <div className="w-full flex py-[150px] px-[300px] pt-0 gap-[100px]">
        <div className="w-[65%] h-[350px] bg-black relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1598719830762-055a6665a463?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute w-full opacity-30"
            alt=""
          />
          <div className="w-full h-full absolute z-10 p-10 flex flex-col justify-between">
            <h1 className="font-bold text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quam
            </h1>
            <h1 className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, accusamus!
            </h1>
            <button className="btn gradient rounded-full border-none font-bold text-lg w-fit">
              Call Now
            </button>
          </div>
        </div>

        <div className="w-[35%] h-[350px] bg-gradient-to-r from-[#4cadf7] to-[#138ce8] rounded-lg p-5 flex flex-col justify-between py-10 text-black">
          <h1 className=" text-2xl font-bold">Our Vision</h1>
          <h1 className=" text-4xl font-bold">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
          </h1>
          <h1 className=" text-2xl">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
          </h1>
        </div>
      </div>

      <div className="px-20">
        <div className="w-full h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg"></div>
      </div>

      <div className=" text-white p-10">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold">
            Why Choose Our Solar Lead Services?
          </h2>
          <h1 className="text-4xl font-bold mt-4">
            Qualified Leads, Appointments and Sits to Solar Companies across
          </h1>
          <h1 className="text-5xl font-bold mt-2">INDIA</h1>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="absolute -left-24 top-10">
            <div className="w-56 h-56 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
          </div>

          <div className="bg-zinc-700 border border-zinc-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">
              Lead Generation for Doctors
            </h3>
            <p className="mt-4">
              We specialize in generating high-quality, targeted leads for
              doctors using multi-channel content marketing, social media ads,
              and custom content calendars.
            </p>
          </div>

          <div className="bg-zinc-700 border border-zinc-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">AI Automation Solution</h3>
            <p className="mt-4">
              Streamline your practice management, patient communication, and
              marketing efforts using our automation services for healthcare
              providers.
            </p>
          </div>

          <div className="bg-zinc-700 border border-zinc-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Customized Campaigns</h3>
            <p className="mt-4">
              Tailored lead generation campaigns based on the specific needs of
              healthcare practices, ensuring maximum ROI.
            </p>
          </div>

          <div className="bg-zinc-700 border border-zinc-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Analytics & Reporting</h3>
            <p className="mt-4">
              Detailed analytics to track the effectiveness of lead generation
              and automation, allowing for continuous improvement.
            </p>
          </div>

          <div className="bg-zinc-700 border border-zinc-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Industry Expertise</h3>
            <p className="mt-4">
              Years of experience in healthcare and lead generation allow us to
              offer specialized solutions designed for those needs.
            </p>
          </div>

          <div className="bg-zinc-700 border border-zinc-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Scalability</h3>
            <p className="mt-4">
              Our solutions grow with your practice. Whether you’re a small
              clinic or a large enterprise, we provide scalable solutions that
              meet your needs.
            </p>
          </div>

          <div className="absolute -right-24 bottom-10">
            <div className="w-56 h-56 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400">
              COMMON QUESTION
            </h3>
            <h2 className="text-4xl font-bold mt-2">Most Popular Question</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Have questions about our lead generation services? Our FAQ section
              provides answers to common inquiries, from lead quality and types
              to our comprehensive CRM system and virtual assistant service.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <div className="space-y-4">
              {/* Repeated Question Component */}
              <a
                href="#"
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                How do you ensure the quality of your solar and home improvement
                leads?
              </a>
              <a
                href="#"
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                How do you ensure the quality of your solar and home improvement
                leads?
              </a>
              <a
                href="#"
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                How do you ensure the quality of your solar and home improvement
                leads?
              </a>
              <a
                href="#"
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                How do you ensure the quality of your solar and home improvement
                leads?
              </a>
              <a
                href="#"
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                How do you ensure the quality of your solar and home improvement
                leads?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
