import React from "react";
const experiences = [
  {
    icon: "/icons/one.svg",
    title: "Curated Collection",
    description:
      "Escape to luxury with our handpicked villas, each selected for comfort and character.",
  },
  {
    icon: "/icons/two.svg",
    title: "Remarkable Locations",
    description:
      "Discover hidden gems across the Caribbean in our exclusive destinations.",
  },
  {
    icon: "/icons/three.svg",
    title: "Confidentiality",
    description:
      "Your privacy is our priority — enjoy discreet, personalized service.",
  },
  {
    icon: "/icons/four.svg",
    title: "Luxury Amenities",
    description:
      "Indulge in world-class comforts, from infinity pools to private chefs.",
  },
  {
    icon: "/icons/five.svg",
    title: "Trip Designers",
    description:
      "Let our travel experts craft a journey tailored entirely to your dreams.",
  },
  {
    icon: "/icons/six.svg",
    title: "Local Expertise",
    description:
      "Explore like a local with guidance from seasoned Caribbean specialists.",
  },
];

const Why_us = () => {
  return (
    <section className="py-20 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-emerald-600 font-MeowScript"> Zolaz?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Zolaz delivers elevated Caribbean experiences through expert planning,
          hidden destinations, and personalized luxury services tailored to you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition h-full hover:translate-0.5"
            >
              <div className="p-4 mb-4 flex items-center justify-center">
                <img
                  src={exp.icon}
                  alt={exp.title}
                  className="w-12 h-12 object-contain text-emerald-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why_us;
