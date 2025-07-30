import React from "react";
import {
  Clock,
  ArrowRight,
  CheckCircle,
  Car,
  Theater,
  PartyPopper,
  Users,
  Mountain,
  UserCircle
} from "lucide-react";

const services = [
  {
    title: "Child Equipment Rental",
    description:
      "Premium baby gear delivered to your destination for stress-free family travel",
    icon: <UserCircle className="w-6 h-6 text-emerald-600" />,
    features: ["Cribs & High Chairs", "Strollers & Car Seats", "Toys & Games"],
  },
  {
    title: "Airport Transfers",
    description:
      "Reliable door-to-door transportation with professional, punctual drivers",
    icon: <Car className="w-6 h-6 text-emerald-600" />,
    features: ["24/7 Availability", "Luxury Vehicles", "Flight Tracking"],
  },
  {
    title: "Curated Experiences",
    description:
      "Thoughtfully planned adventures and cultural experiences tailored to your interests",
    icon: <Theater className="w-6 h-6 text-emerald-600" />,
    features: ["Private Tours", "Local Guides", "Skip-the-Line Access"],
  },
  {
    title: "Special Occasions",
    description:
      "Professional event planning for memorable celebrations during your travels",
    icon: <PartyPopper className="w-6 h-6 text-emerald-600" />,
    features: ["Anniversary Dinners", "Birthday Surprises", "Romantic Getaways"],
  },
  {
    title: "Professional Childcare",
    description:
      "Vetted caregivers providing peace of mind for parents seeking quality time",
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    features: ["Vetted Caregivers", "Flexible Hours", "Multiple Languages"],
  },
  {
    title: "Adventure Equipment",
    description:
      "Quality sports and outdoor gear rental for your active travel adventures",
    icon: <Mountain className="w-6 h-6 text-emerald-600" />,
    features: ["Ski & Snowboard", "Water Sports", "Hiking Essentials"],
  },
];

const Services = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 ">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent ">
            Indulge in the{" "}
            <span className="text-emerald-600 font-MeowScript">Extraordinary</span>
          </h2>
          <p className="text-lg text-gray-800 mt-4 max-w-2xl mx-auto">
            We redefine luxury vacations. Every moment is meticulously crafted,
            every detail thoughtfully attended to, setting the stage for
            experiences you’ll cherish forever.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-3"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-12 rounded-full  flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-800">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm">
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
                <button className="flex items-center gap-1 text-emerald-600 font-medium hover:text-emerald-700 cursor-pointer transition-all group-hover:gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
