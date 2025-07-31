"use client"
import React, { useState } from "react";
import { MapPin, Users, Bed, Bath, Star } from "lucide-react";

const villas = [
  {
    id: 1,
    name: "7-BR Luxury Beachfront Paradise with Ocean Views",
    location: "Caribbean",
    guests: 14,
    bedrooms: 7,
    beds: 7,
    bathrooms: 8,
    price: 3200,
    originalPrice: 4000,
    rating: 4.9,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1751795195789-8dab6693475d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1748087734665-fc0f73d83858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    amenities: ["wifi", "parking", "kitchen", "pool"],
    badge: "Popular",
    description: "Stunning oceanfront villa with private beach access and panoramic views"
  },
  {
    id: 2,
    name: "Exquisite Luxury Beachfront Hacienda Retreat",
    location: "Cabrera",
    guests: 18,
    bedrooms: 9,
    beds: 9,
    bathrooms: 10,
    price: 5780,
    originalPrice: 6200,
    rating: 5.0,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1751795195789-8dab6693475d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://plus.unsplash.com/premium_photo-1748087734665-fc0f73d83858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    amenities: ["wifi", "parking", "kitchen", "pool"],
    badge: "Luxury",
    description: "Magnificent hacienda-style retreat with traditional charm and modern luxury"
  },
  {
    id: 3,
    name: "Sophisticated Villas with Private Pools and Staff",
    location: "Punta Cana",
    guests: 20,
    bedrooms: 9,
    beds: 12,
    bathrooms: 11,
    price: 3580,
    originalPrice: 4200,
    rating: 4.8,
    reviews: 203,
    images: [
      "https://plus.unsplash.com/premium_photo-1748087734665-fc0f73d83858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1751795195789-8dab6693475d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    amenities: ["wifi", "parking", "kitchen", "pool"],
    badge: "Staff Included",
    description: "Elegant villa complex with dedicated staff and world-class amenities"
  },
];



export default function VillaListings() {
  const [currentImages, setCurrentImages] = useState({});


  const handleImageHover = (villaId, imageIndex) => {
    setCurrentImages(prev => ({
      ...prev,
      [villaId]: imageIndex
    }));
  };

  const resetImage = (villaId) => {
    setCurrentImages(prev => ({
      ...prev,
      [villaId]: 0
    }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-26 min-h-screen">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <MapPin className="w-4 h-4" />
          Featured Villas
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
          The Caribbean's most
          exceptional homes
        </h2>
        <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
          Discover the epitome of Caribbean elegance and comfort, embodied in our carefully curated luxury villa collection, complemented by our top-notch service and unforgettable experiences.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {villas.map((villa) => {
          const currentImageIndex = currentImages[villa.id] || 0;
          const currentImage = villa.images[currentImageIndex];

          return (
            <div
              key={villa.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={currentImage}
                  alt={villa.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {villa.images.map((_, index) => (
                    <button
                      key={index}
                      onMouseEnter={() => handleImageHover(villa.id, index)}
                      onMouseLeave={() => resetImage(villa.id)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentImageIndex
                        ? "bg-white scale-125"
                        : "bg-white/60 hover:bg-white/80"
                        }`}
                    />
                  ))}
                </div>

                {villa.originalPrice > villa.price && (
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                    -{Math.round(((villa.originalPrice - villa.price) / villa.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{villa.rating}</span>
                    <span className="text-gray-500 text-sm">({villa.reviews})</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {villa.location}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
                  {villa.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {villa.description}
                </p>

                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4 py-3 border-t border-gray-100">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>{villa.guests} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>{villa.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>{villa.bathrooms} baths</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    {villa.originalPrice > villa.price && (
                      <span className="text-sm text-gray-400 line-through">
                        ${villa.originalPrice}/night
                      </span>
                    )}
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900">
                        ${villa.price}
                      </span>
                      <span className="text-gray-500 ml-1">/night</span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}