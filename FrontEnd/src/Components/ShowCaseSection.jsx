import React from "react";

// --- LOCAL ASSET IMPORTS ---
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";
import Client4 from "../assets/Client4.jpg";

// Data for the portfolio items
const portfolioItems = [
    {
        category: "UI KIT",
        title: "Mozart Project",
        imageUrl: Client1,
        alt: "Mozart Project UI kit",
    },
    {
        category: "FRAMEWORK",
        title: "Startup Framework 2.0",
        imageUrl: Client2,
        alt: "Startup Framework 2.0",
    },
    {
        category: "PHOTOS",
        title: "From the Sky",
        imageUrl: Client3,
        alt: "Photos From the Sky",
    },
    {
        category: "PICTURES",
        title: "Air Forces",
        imageUrl: Client4,
        alt: "Air Forces Pictures",
    },
];

// Component for a single portfolio card
const PortfolioCard = ({ category, title, imageUrl, alt }) => (
    <div className="flex flex-col items-center">
        {/* Container for Image with Overflow Hidden */}
        <div className="relative w-full h-72 overflow-hidden rounded-xl shadow-xl mb-6">
            <img
                className="w-full h-full object-cover" // Ensures the image covers the area, even if part of it overflows
                src={imageUrl}
                alt={alt}
            />
        </div>

        {/* Category */}
        <div className="text-center text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest mb-1">
            {category}
        </div>

        {/* Title */}
        <div className="text-center text-white text-xl font-medium font-['DM_Sans'] leading-8">
            {title}
        </div>
    </div>
);

export default function App() {
    return (
        <div className="bg-indigo-900 w-full py-24 min-h-screen font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <h1 className="text-white text-5xl font-bold font-['DM_Sans'] leading-[52px] mb-8 md:mb-0">
                        Last works
                    </h1>

                    <button className="w-44 h-12 relative">
                        <div className="w-full h-full absolute top-0 left-0  rounded-[100px] border-2 border-white transition" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium font-['DM_Sans'] leading-6">
                            View all Works
                        </span>
                    </button>
                </div>

                {/* Portfolio Grid (2x2 Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            category={item.category}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            alt={item.alt}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
