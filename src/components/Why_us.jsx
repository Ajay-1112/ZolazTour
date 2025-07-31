
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
    description: "Escape to luxury with our handpicked villas, each selected for comfort and character.",
  },
  {
    icon: Map,
    title: "Remarkable Locations",
    description: "Discover hidden gems across the Caribbean in our exclusive destinations.",
  },
  {
    icon: KeyRound,
    title: "Confidentiality",
    description: "Your privacy is our priority — enjoy discreet, personalized service.",
  },
  {
    icon: Gem,
    title: "Luxury Amenities",
    description: "Indulge in world-class comforts, from infinity pools to private chefs.",
  },
  {
    icon: WandSparkles,
    title: "Trip Designers",
    description: "Let our travel experts craft a journey tailored entirely to your dreams.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Explore like a local with guidance from seasoned Caribbean specialists.",
  },
];


const Why_us = () => {
  return (
    <section className="py-20 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-100/80 backdrop-blur-sm text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Premium Caribbean Experiences
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
          Why Choose Zolaz?
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
              <div className="p-2 mb-2 flex items-center justify-center">
                <exp.icon className="w-12 h-12 text-emerald-500" />
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
