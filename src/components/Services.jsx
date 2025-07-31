"use client";
import {
  Clock,
  ArrowRight,
  CheckCircle,
  Plane,
  MapPinned,
  Gift,
  HandHelping,
  TentTree,
  Baby,
  Sparkles
} from "lucide-react";

const services = [
  {
    title: "Child Equipment Rental",
    description:
      "Premium baby gear delivered to your destination for stress-free family travel",
    icon: Baby,
    features: ["Cribs & High Chairs", "Strollers & Car Seats", "Toys & Games"],
  },
  {
    title: "Airport Transfers",
    description:
      "Reliable door-to-door transportation with professional, punctual drivers",
    icon: Plane,
    features: ["24/7 Availability", "Luxury Vehicles", "Flight Tracking"],
  },
  {
    title: "Curated Experiences",
    description:
      "Thoughtfully planned adventures and cultural experiences tailored to your interests",
    icon: MapPinned,
    features: ["Private Tours", "Local Guides", "Skip-the-Line Access"],
  },
  {
    title: "Special Occasions",
    description:
      "Professional event planning for memorable celebrations during your travels",
    icon: Gift,
    features: ["Anniversary Dinners", "Birthday Surprises", "Romantic Getaways"],
  },
  {
    title: "Professional Childcare",
    description:
      "Vetted caregivers providing peace of mind for parents seeking quality time",
    icon: HandHelping,
    features: ["Vetted Caregivers", "Flexible Hours", "Multiple Languages"],
  },
  {
    title: "Adventure Equipment",
    description:
      "Quality sports and outdoor gear rental for your active travel adventures",
    icon: TentTree,
    features: ["Ski & Snowboard", "Water Sports", "Hiking Essentials"],
  },
];

const Services = () => {
  return (
    <section className="py-10 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Indulge in the <span className="text-emerald-600">Extraordinary</span>
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            We redefine luxury vacations. Every moment is meticulously crafted, every detail thoughtfully attended to—setting the stage for experiences you’ll cherish forever.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Icon bubble */}
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition">
                  <Icon className="w-6 h-6 text-emerald-700" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-800">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-[2px]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer CTA */}
                <div className="flex justify-between items-center border-t pt-4 border-gray-100 text-sm">
                  <div className="flex items-center text-gray-500 gap-2">
                    <Clock className="w-4 h-4" />
                    <span>24/7 Support</span>
                  </div>
                  <button className="flex items-center gap-1 text-emerald-600 font-medium hover:text-emerald-700 transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
