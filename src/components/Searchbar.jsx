"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const locations = ["Bali", "Paris", "New York", "Tokyo", "Goa"];

const SearchBar = () => {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleChange = (type, action) => {
        if (type === "adults") {
            setAdults((prev) => Math.max(1, prev + (action === "inc" ? 1 : -1)));
        } else {
            setChildren((prev) => Math.max(0, prev + (action === "inc" ? 1 : -1)));
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 px-6 w-full max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 z-10 ">
            <div
                className="relative flex flex-col flex-1 min-w-[150px]"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
                <label className="text-xs font-semibold uppercase text-gray-700 mb-1">
                    Location
                </label>
                <div className="text-sm text-gray-600 cursor-pointer border-b border-dashed border-gray-400 w-fit">
                    {selectedLocation || "Where do you want to go?"}
                </div>

                {showDropdown && (
                    <ul className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        {locations.map((loc) => (
                            <li
                                key={loc}
                                className="px-4 py-2 text-sm hover:bg-purple-100 cursor-pointer"
                                onClick={() => {
                                    setSelectedLocation(loc);
                                    setShowDropdown(false);
                                }}
                            >
                                {loc}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="hidden sm:block w-px bg-gray-200 h-8" />

            <div className="flex flex-col flex-1 min-w-[100px]">
                <label className="text-xs font-semibold uppercase text-gray-700 mb-1">
                    Check-in
                </label>
                <input
                    type="date"
                    className="text-sm text-gray-600 outline-none"
                    placeholder="Add date"
                />
            </div>

            <div className="flex flex-col flex-1 min-w-[100px]">
                <label className="text-xs font-semibold uppercase text-gray-700 mb-1">
                    Check-out
                </label>
                <input
                    type="date"
                    className="text-sm text-gray-600 outline-none"
                    placeholder="Add date"
                />
            </div>

            <div className="hidden sm:block w-px bg-gray-200 h-8" />

            <div className="flex flex-col items-start min-w-[80px]">
                <label className="text-xs font-semibold uppercase text-gray-700 mb-1">
                    Adults
                </label>
                <div className="flex items-center gap-2">
                    <button
                        className="w-6 h-6 rounded-full border border-emerald-600 text-emerald-600 flex items-center justify-center"
                        onClick={() => handleChange("adults", "dec")}
                    >
                        -
                    </button>
                    <span className="text-sm">{adults}</span>
                    <button
                        className="w-6 h-6 rounded-full border border-emerald-600 text-emerald-600 flex items-center justify-center"
                        onClick={() => handleChange("adults", "inc")}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-start min-w-[80px]">
                <label className="text-xs font-semibold uppercase text-gray-700 mb-1">
                    Children
                </label>
                <div className="flex items-center gap-2">
                    <button
                        className="w-6 h-6 rounded-full border border-emerald-600 text-emerald-600 flex items-center justify-center"
                        onClick={() => handleChange("children", "dec")}
                    >
                        -
                    </button>
                    <span className="text-sm">{children}</span>
                    <button
                        className="w-6 h-6 rounded-full border border-emerald-600 text-emerald-600  flex items-center justify-center"
                        onClick={() => handleChange("children", "inc")}
                    >
                        +
                    </button>
                </div>
            </div>

            <button
                className="bg-emerald-700 text-white rounded-full px-7 py-3  flex justify-between items-center gap-2 hover:bg-emerald-800 transition duration-200 text-sm font-medium shadow-md"
            >
                <Search size={16} className="stroke-2" />
                <span>Search</span>
            </button>
        </div>
    );
};

export default SearchBar;
