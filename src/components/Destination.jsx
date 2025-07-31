import React, { useState } from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight, Heart } from 'lucide-react';

const destinations = [
  {
    title: 'Manhattan',
    tours: 30,
    rating: 4.8,
    price: 299,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Explore the heart of NYC with iconic landmarks and vibrant culture',
    highlights: ['Central Park', 'Times Square', 'Empire State Building'],
    category: 'Urban'
  },
  {
    title: 'Pearland',
    tours: 40,
    rating: 4.6,
    price: 199,
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80',
    description: 'Discover suburban charm with family-friendly attractions',
    highlights: ['Nature Parks', 'Local Markets', 'Family Activities'],
    category: 'Suburban'
  },
  {
    title: 'New York',
    tours: 25 ,
    rating: 4.9,
    price: 399,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
    description: 'Discover the full magic of the Big Apple—every moment, every memory.',
    highlights: ['Brooklyn Bridge', 'Statue of Liberty', 'Broadway Shows'],
    category: 'Metropolitan'
  },
];

const Destinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Popular Destinations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the world’s most stunning places with experiences tailored to your wanderlust.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${hoveredCard === idx ? 'scale-105' : ''
                }`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {destination.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                    {destination.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{destination.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, highlightIdx) => (
                    <span
                      key={highlightIdx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                      +{destination.highlights.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{destination.tours}+ Tours</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">4-12 people</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-gray-500">From</span>
                    <div className="text-xl font-bold text-emerald-600">
                      ${destination.price}
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                  Explore Destination
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 mb-5">
          <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-medium shadow-lg hover:translate-y-0.5 ">
            View All Destinations
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;