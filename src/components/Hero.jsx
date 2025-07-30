"use client";
import React from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/Searchbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black/70 z-10"
      />

      <div className="relative z-20 max-w-7xl w-full px-6 py-16 text-white lg:text-left items-center gap-12 ">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-emerald-600  text-lg md:text-xl"
        >
          Experience Unmatched Delight With Us.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-2 text-4xl md:text-5xl lg:text-7xl font-bold"
        >
          Where Exceptional <br className="hidden md:inline" />
          Memories Begin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 max-w-4xl text-xl text-white/90"
        >
          Discover amazing places with exclusive deals. Eat, shop, and explore
          the most interesting destinations around the world.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-8 z-30"
      >
        <div className="max-w-5xl mx-auto">
          <SearchBar />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
