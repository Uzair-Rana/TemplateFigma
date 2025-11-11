import { useState } from "react";
import Rectangle from "../assets/Rectangle.png";
import twConfig from "../config/globalTailwindConfig";

export default function HeroSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div
            className={`
                ${twConfig.actionSection.container}
                Tablet:h-[500px] Tablet:px-[5px]
                Mobile:h-[400px] Mobile:px-[5px]
            `}
        >
            {/* Background Image */}
            <img
                className={twConfig.actionSection.backgroundImage}
                src={Rectangle}
                alt="Background"
            />

            {/* Content Wrapper */}
            <div
                className={`
                    ${twConfig.actionSection.contentWrapper}
                    Tablet:space-y-4
                    Mobile:space-y-3
                `}
            >
                {/* Heading */}
                <h1
                    className={`
                        ${twConfig.actionSection.heading}
                        Tablet:text-3xl Tablet:leading-snug
                        Mobile:text-2xl Mobile:leading-snug
                    `}
                >
                    Easy to setup
                    <br />
                    Easy to maintain
                </h1>

                {/* Subheading */}
                <p
                    className={`
                        ${twConfig.actionSection.subheading}
                        Tablet:text-base Tablet:leading-snug
                        Mobile:text-sm Mobile:leading-snug
                    `}
                >
                    Bootstrap is a widely-used, sleek, intuitive and powerful front-end
                    framework for faster and easier web development.
                </p>

                {/* Buttons Container */}
                <div
                    className={`
                        ${twConfig.actionSection.buttonsWrapper}
                        Tablet:gap-3 Tablet:mt-3
                        Mobile:gap-2 Mobile:mt-2
                    `}
                >
                    {/* YouTube Circle Button */}
                    <button
                        className={`
                            ${twConfig.actionSection.youtubeButton}
                            Tablet:w-12 Tablet:h-12
                            Mobile:w-10 Mobile:h-10
                        `}
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className={`
                                ${twConfig.actionSection.youtubeIcon}
                                Tablet:w-4 Tablet:h-4
                                Mobile:w-3 Mobile:h-3
                            `}
                        >
                            <path d="M4 2v20l18-10L4 2z" />
                        </svg>
                    </button>

                    {/* Get Started Button */}
                    <button
                        className={`
                            ${twConfig.actionSection.getStartedButton}
                            Tablet:w-40 Tablet:h-12 Tablet:text-sm
                            Mobile:w-32 Mobile:h-10 Mobile:text-xs
                        `}
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
