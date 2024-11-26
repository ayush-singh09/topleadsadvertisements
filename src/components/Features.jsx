import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Choose Our Solar Lead Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="font-bold text-lg">Lead Generation for Doctors</h3>
            <p>Generate targeted leads to help grow your practice.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="font-bold text-lg">AI Automation Solutions</h3>
            <p>Automate your lead flow with AI-driven tools.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="font-bold text-lg">Customized Campaigns</h3>
            <p>Design marketing campaigns tailored to your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
