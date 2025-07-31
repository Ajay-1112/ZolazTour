import React from "react";
import {
  Layers,
  Map,
  KeyRound,
  Gem,
  WandSparkles,
  Globe,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    icon: Layers,
    title: "Curated Collection",
    description: "Handpicked luxury villas selected for comfort and character.",
  },
  {
    icon: Map,
    title: "Remarkable Locations",
    description: "Hidden gems across exclusive Caribbean destinations.",
  },
  {
    icon: KeyRound,
    title: "Confidentiality",
    description: "Discreet, personalized service with privacy guaranteed.",
  },
  {
    icon: Gem,
    title: "Luxury Amenities",
    description: "World-class comforts from infinity pools to private chefs.",
  },
  {
    icon: WandSparkles,
    title: "Trip Designers",
    description: "Expert travel planners crafting journeys tailored to you.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Insider guidance from seasoned Caribbean specialists.",
  },
];

const Why_us = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Why Choose Zolaz
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Premium Caribbean Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert planning, hidden destinations, and personalized luxury services tailored to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                  <exp.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why_us;