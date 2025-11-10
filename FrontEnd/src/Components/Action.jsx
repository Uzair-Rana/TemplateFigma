import { useState } from "react";
import Rectangle from "../assets/Rectangle.png";

export default function HeroSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="relative w-full mx-auto h-[605px] bg-indigo-900 overflow-hidden">
            {/* Background Image */}
            <img
                className="w-full h-full object-cover"
                src={Rectangle}
                alt="Background"
            />

            {/* Content Wrapper (Centered vertically) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4">
                {/* Heading */}
                <h1 className="text-white font-bold font-['DM_Sans'] text-5xl sm:text-4xl md:text-6xl leading-tight">
                    Easy to setup<br />Easy to maintain
                </h1>

                {/* Subheading */}
                <p className="text-white font-light font-['DM_Sans'] text-2xl  leading-8 max-w-[518px] opacity-90">
                    Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.
                </p>

                {/* Buttons Container */}
                <div className="flex items-center justify-center gap-5 mt-6">
                    {/* YouTube Circle Button */}
                    <button
                        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-6 h-6"
                        >
                            <path d="M4 2v20l18-10L4 2z" />
                        </svg>
                    </button>

                    {/* Get Started Button */}
                    <button
                        className="bg-teal-400 rounded-full w-52 h-16 text-white text-xl font-medium font-['DM_Sans'] flex items-center justify-center hover:bg-teal-500 transition"
                        onClick={() => alert('Get Started clicked!')}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div className="w-[90%] max-w-3xl aspect-video relative">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/eXWbJaz0gow?autoplay=1"
                            title="YouTube video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
