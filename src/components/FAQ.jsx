import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-gray-800 text-white py-20">
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
              className="bg-gray-700 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-bold">{question}</h3>
              {activeIndex === index && (
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
