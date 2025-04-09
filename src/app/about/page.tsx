import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900 py-12 px-6 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About SustainaNews</h1>
        <p className="text-xl text-gray-600 mx-auto max-w-3xl">
          SustainaNews is a multilingual platform designed to make news summaries accessible and aligned with the United Nations Sustainable Development Goals (SDGs).
        </p>
      </div>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At SustainaNews, our mission is to make global challenges accessible and understandable. We aim to empower individuals with concise, reliable news summaries to raise awareness about critical issues aligned with the SDGs. By providing content in multiple languages and through audio formats, we ensure inclusivity and broad reach.
        </p>
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700">
          We envision a world where everyone has access to accurate, understandable, and impactful information regarding the SDGs. We aim to bridge the information gap and inspire global action through informed citizens.
        </p>
      </section>

      {/* Values Section */}
      <section className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Values</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">1. Inclusivity</h3>
            <p className="text-lg text-gray-700">
              We prioritize accessibility and inclusivity, ensuring that people of all backgrounds can access the news and information related to the SDGs.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">2. Education</h3>
            <p className="text-lg text-gray-700">
              Our platform aims to educate individuals and communities, empowering them to understand the importance of global challenges and act toward solutions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">3. Innovation</h3>
            <p className="text-lg text-gray-700">
              We believe in leveraging the latest technologies, including AI and TTS (Text-to-Speech), to transform how news is consumed, making it more accessible and engaging.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">4. Social Impact</h3>
            <p className="text-lg text-gray-700">
              Our platform is dedicated to making a positive social impact by spreading awareness and encouraging actions that contribute to sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-12">
          Our team consists of individuals from diverse backgrounds, all united by a common mission: to make the world’s critical challenges accessible to everyone.
        </p>
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-gray-300 mb-4"></div>
            <p className="font-semibold text-lg">Darshana Pagrut</p>
            <p className="text-gray-600">Team Lead</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-gray-300 mb-4"></div>
            <p className="font-semibold text-lg">Sejal Kagdelwar</p>
            <p className="text-gray-600">Team Member</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-gray-300 mb-4"></div>
            <p className="font-semibold text-lg">Harshal Chinchole</p>
            <p className="text-gray-600"> Team Member</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-gray-300 mb-4"></div>
            <p className="font-semibold text-lg">Girish Sonune</p>
            <p className="text-gray-600"> Team Member</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or would like to collaborate with us, feel free to reach out to us. We are always happy to connect with like-minded individuals and organizations.
        </p>
        <p className="text-lg text-gray-700">Email: <a href="mailto:contact@sustainanews.com" className="text-blue-600">contact@sustainanews.com</a></p>
        <p className="text-lg text-gray-700">Phone: +1 123 456 7890</p>
      </section>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700">
          SustainaNews is a platform designed to bring the world's most critical challenges into focus, fostering global awareness and driving positive change.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
