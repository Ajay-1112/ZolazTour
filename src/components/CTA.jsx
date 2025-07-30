import React from "react";
import { Button } from "./ui/button";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-16  px-6 md:px-12 max-w-7xl mx-auto rounded-2xl shadow-2xl">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/Cta.jpg')",
                }}
            />

            <div className="absolute inset-0 z-10 bg-black/40 bg-opacity-60" />

            <div className="relative z-20 max-w-5xl mx-auto text-center text-white">
                <h2 className="text-4xl md:text-5xl  font-bold leading-tight">
                    Escape the Ordinary —
                    <br />
                    <span className="font-MeowScript text-emerald-600">
                        Discover the Caribbean with Zolaz
                    </span>
                </h2>

                <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                    From secluded villas to tailored experiences, we create unforgettable
                    escapes for those who crave the extraordinary.
                </p>

                <div className="mt-8">
                     <button className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-emerald-800 transition">
                        Plan Your Trip
                    </button>
                </div>
            </div>
        </section>
    );
}
