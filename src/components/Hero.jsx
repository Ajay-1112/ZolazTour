"use client";
import React from "react";
import SearchBar from "@/components/Searchbar";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
           
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

            <div className="absolute inset-0 bg-black/50 z-10" />

            <div className="relative z-20 max-w-7xl w-full px-6 py-16 text-white text-center lg:text-left items-center gap-12">
                    <span className="text-emerald-500 font-MeowScript text-4xl">
                        Experience Unmatched Delight With Us.
                    </span>

                    <h1 className="mt-2 text-4xl md:text-5xl lg:text-7xl font-bold ">
                        Where Exceptional <br className="hidden md:inline"/> Memories
                        <span className="text-emerald-400"> Begin</span>
                    </h1>

                    <p className="mt-6 max-w-4xl text-xl text-white/90">
                        Discover amazing places with exclusive deals. Eat, shop, and explore
                        the most interesting destinations around the world.
                    </p>
            </div>


            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-8 z-30">
                <div className="max-w-5xl mx-auto">
                    <SearchBar />
                </div>
            </div>

        </section>
    );
};

export default Hero;
