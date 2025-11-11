// src/Components/Action.jsx
import { useState } from "react";
import Rectangle from "../assets/Rectangle.png";
import twConfig from "../config/globalTailwindConfig";

export default function HeroSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className={twConfig.actionSection.container}>
            {/* Background Image */}
            <img
                className={twConfig.actionSection.backgroundImage}
                src={Rectangle}
                alt="Background"
            />

            {/* Content Wrapper */}
            <div className={twConfig.actionSection.contentWrapper}>
                {/* Heading */}
                <h1 className={twConfig.actionSection.heading}>
                    Easy to setup
                    <br />
                    Easy to maintain
                </h1>

                {/* Subheading */}
                <p className={twConfig.actionSection.subheading}>
                    Bootstrap is a widely-used, sleek, intuitive and powerful front-end
                    framework for faster and easier web development.
                </p>

                {/* Buttons Container */}
                <div className={twConfig.actionSection.buttonsWrapper}>
                    {/* YouTube Circle Button */}
                    <button
                        className={twConfig.actionSection.youtubeButton}
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className={twConfig.actionSection.youtubeIcon}
                        >
                            <path d="M4 2v20l18-10L4 2z" />
                        </svg>
                    </button>

                    {/* Get Started Button */}
                    <button
                        className={twConfig.actionSection.getStartedButton}
                        onClick={() => alert("Get Started clicked!")}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div
                    className={twConfig.actionSection.videoModal}
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div className={twConfig.actionSection.videoWrapper}>
                        <iframe
                            className={twConfig.actionSection.iframe}
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
