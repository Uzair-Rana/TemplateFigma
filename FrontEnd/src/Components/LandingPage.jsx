import React from "react";
import bgImage from "../assets/Image.png";
import Navbar from "./SubComponent/Navbar";
import HeroContent from "./SubComponent/HeroContent";

export default function LoadingPage() {
    return (
        <div className="relative flex flex-col items-center justify-start overflow-hidden bg-primary min-h-screen">

            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-overlay"></div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full flex flex-col">
                {/* Navbar */}
                <div className="w-full">
                    <Navbar />
                </div>

                {/* Hero Content */}
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
                    <HeroContent />
                </div>
            </div>
        </div>
    );
}
