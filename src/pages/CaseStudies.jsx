import React from "react";

const CaseStudies = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Healthcare Sector Case Studies</h1>
        <p className="text-gray-600 text-center mb-12 leading-relaxed">
          Here are examples of how <span className="font-semibold">Top Leads Advertising</span> has successfully helped clients in the healthcare industry achieve remarkable results:
        </p>

        <div className="space-y-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Study 1: Attracting New Patients for a Dental Clinic</h2>
            <ul className="text-gray-600 leading-relaxed list-disc pl-6">
              <li><span className="font-semibold">Client:</span> A local dental practice.</li>
              <li><span className="font-semibold">Challenge:</span> Struggling to fill appointment slots and increase patient retention.</li>
              <li><span className="font-semibold">Solution:</span>
                <ul className="list-disc pl-6">
                  <li>Developed a content calendar featuring educational posts on oral hygiene and treatments.</li>
                  <li>Created video ads showcasing the clinic’s state-of-the-art equipment and patient testimonials.</li>
                  <li>Launched a “Free First Consultation” campaign targeting families in the area.</li>
                </ul>
              </li>
              <li><span className="font-semibold">Results:</span>
                <ul className="list-disc pl-6">
                  <li>200% increase in new patient inquiries in three months.</li>
                  <li>80% of new patients booked follow-up appointments.</li>
                  <li>Social media engagement grew by 150%.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Study 2: Scaling an Online Therapy Platform</h2>
            <ul className="text-gray-600 leading-relaxed list-disc pl-6">
              <li><span className="font-semibold">Client:</span> A startup offering virtual therapy sessions.</li>
              <li><span className="font-semibold">Challenge:</span> Limited brand awareness and difficulty reaching potential clients.</li>
              <li><span className="font-semibold">Solution:</span>
                <ul className="list-disc pl-6">
                  <li>Designed a user-friendly landing page emphasizing convenience and confidentiality.</li>
                  <li>Launched targeted Google Ads focusing on mental health keywords.</li>
                  <li>Created an AI chatbot to assist users in finding the right therapist.</li>
                </ul>
              </li>
              <li><span className="font-semibold">Results:</span>
                <ul className="list-disc pl-6">
                  <li>Monthly sign-ups increased by 400%.</li>
                  <li>Cost-per-acquisition (CPA) dropped by 30%.</li>
                  <li>Achieved a 4.8-star average rating from satisfied clients.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Study 3: Boosting Revenue for a Dermatology Practice</h2>
            <ul className="text-gray-600 leading-relaxed list-disc pl-6">
              <li><span className="font-semibold">Client:</span> A dermatology clinic specializing in aesthetic treatments.</li>
              <li><span className="font-semibold">Challenge:</span> Underutilized high-ticket treatments like laser therapy.</li>
              <li><span className="font-semibold">Solution:</span>
                <ul className="list-disc pl-6">
                  <li>Designed a landing page showcasing before-and-after results.</li>
                  <li>Ran social media ad campaigns targeting beauty-conscious individuals.</li>
                  <li>Published a blog series on skin health and advanced treatment options.</li>
                </ul>
              </li>
              <li><span className="font-semibold">Results:</span>
                <ul className="list-disc pl-6">
                  <li>Bookings for laser therapy tripled in two months.</li>
                  <li>Website traffic increased by 60%.</li>
                  <li>Generated $100,000 in additional revenue from aesthetic services.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
