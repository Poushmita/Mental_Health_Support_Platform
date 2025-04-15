import React from "react";
import teamMember1 from "../assets/tm1.jpg";
import teamMember2 from "../assets/tm2.jpg";
import teamMember3 from "../assets/tm3.jpg";


export default function About () {
  return (
    // <div className="bg-beige-100 text-gray-900 p-8">
    <div className="bg-[#EDF6F9] text-[#5C4033] p-8">
      <div className="text-center mb-8">
      <img
          src="src/assets/about_banner.png"
          alt="Contact Us Banner"
          className="w-full h-auto max-w-[1600px] max-h-[400px] object-cover rounded-lg"
        />
        {/*<h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-teal-700  font-semibold mt-2">Helping You Prioritize Mental Well-being</p>*/}
        <button className="mt-4 px-6 py-2 bg-rose-400 text-white rounded-full shadow-lg hover:bg-rose-500">
          Meet Our Team
        </button>
      </div>

      <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold flex justify-center items-center">
          <span className="mr-2">✨</span> Our Mission
        </h2>
        <p className="mt-2 max-w-2xl mx-auto">
          We are dedicated to creating a safe space for mental health awareness, self-care, and emotional support. Our mission
          is to provide evidence-based tools and resources for emotional well-being.
        </p>
        <div className="md:ml-72 mt-6 text-left">
          <h5 className="font-semibold flex items-center">
            <span className="mr-2">📌</span> What We Offer:
          </h5>
          <div className="mt-2 pl-6">
            <ul className="list-disc text-md">
              <li>Guided Meditations</li>
              <li>Personalized Mood Tracking</li>
              <li>Expert-Curated Mental Health Resources</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold">Our Team</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "Dr. Sarah Reynolds", role: "Clinical Psychologist", image:teamMember1 },
            { name: "James Carter", role: "Mindfulness Coach", image: teamMember3 },
            { name: "Emma Thompson", role: "Community Support Lead", image: teamMember2 },
          ].map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover" />
              ) : (
                <div className="text-6xl">🖼️</div>
              )}
              <h3 className="mt-2 font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-yellow-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold flex items-center justify-center">
          <span className="mr-2">💡</span> Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-700">
          A science-backed approach to mental well-being, available at your fingertips.
        </p>
      </div>
    </div>
  );
};



