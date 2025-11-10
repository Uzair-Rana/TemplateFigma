import React, { useState } from "react";
import Button from "./Button";

// 🔹 Reusable Slide Card Component
const SlideCard = ({ title, heading, description, activeIndex, index, isFlipping, direction }) => {
    const isActive = activeIndex === index;
    const rotateClass = isActive && isFlipping
        ? direction === "next"
            ? "rotate-y-180"
            : "rotate-y--180"
        : "rotate-y-0";

    return (
        <div
            className={`flex flex-col items-center max-w-[595px] transition-all duration-700 ease-in-out transform-gpu ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
            } ${rotateClass}`}
            style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }}
        >
            <h4 className="text-[14px] leading-[19px] font-bold uppercase mb-3 text-white opacity-90 w-[111px]">
                {title}
            </h4>

            <h1 className="text-[56px] leading-[86px] text-white font-extrabold mb-[27px] w-[595px]">
                {heading}
            </h1>

            <p className="text-[19px] leading-[24px] text-gray-200 opacity-90 mb-12 max-w-[600px] text-center">
                {description}
            </p>

            {/* Navigation Dots */}
            <div className="flex space-x-[9px] mb-[58px]">
                {[0, 1, 2, 3, 4].map((dot) => (
                    <span
                        key={dot}
                        className={`w-[11px] h-[10px] rounded-full border border-white ${
                            dot === index ? "bg-white" : "bg-transparent"
                        }`}
                    ></span>
                ))}
            </div>

            {/* Button */}
            <Button>Create an Account</Button>
        </div>
    );
};

// 🔹 Main HeroContent Component with Flip Animation
export default function HeroContent() {
    const slides = [
        {
            title: "Startup 3",
            heading: "Forget About Code",
            description:
                "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
        },
        {
            title: "Startup 3",
            heading: "Design Like a Pro",
            description:
                "Startup Framework gives you beautiful blocks that can be used to create any design layout easily, even if you have no design experience.",
        },
        {
            title: "Startup 3",
            heading: "Launch Fast",
            description:
                "Build your startup website quickly with pre-designed templates and drag-and-drop components ready to customize.",
        },
        {
            title: "Startup 3",
            heading: "Powerful and Simple",
            description:
                "No need to worry about code or responsiveness — everything is optimized and pixel-perfect out of the box.",
        },
        {
            title: "Startup 3",
            heading: "Creative Freedom",
            description:
                "Customize everything to match your brand identity and enjoy full creative control with no technical barriers.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [direction, setDirection] = useState("next");

    const triggerFlip = (callback, dir) => {
        setDirection(dir);
        setIsFlipping(true);
        setTimeout(() => {
            callback();
            setIsFlipping(false);
        }, 500); // flip duration matches CSS
    };

    const prevSlide = () => {
        triggerFlip(
            () =>
                setActiveIndex((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1
                ),
            "prev"
        );
    };

    const nextSlide = () => {
        triggerFlip(
            () =>
                setActiveIndex((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                ),
            "next"
        );
    };

    return (
        <div className="relative z-10 flex flex-col items-center mt-[142px] text-center text-light mb-[2px]">
            {/* Slider container */}
            <div className="relative w-full flex items-start justify-center perspective-[1000px]">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-[100px] top-[80px] -translate-y-1/2 text-white opacity-80 text-3xl font-normal hover:opacity-100 transition-opacity"
                >
                    <svg
                        width="10"
                        height="17"
                        viewBox="0 0 10 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.57589 1.00447C9.68749 1.11608 9.7433 1.24442 9.7433 1.38951C9.7433 1.5346 9.68749 1.66295 9.57589 1.77456L2.99665 8.3538L9.57589 14.933C9.68749 15.0446 9.7433 15.173 9.7433 15.3181C9.7433 15.4632 9.68749 15.5915 9.57589 15.7031L8.73883 16.5402C8.62723 16.6518 8.49888 16.7076 8.35379 16.7076C8.2087 16.7076 8.08035 16.6518 7.96874 16.5402L0.167404 8.73885C0.0557973 8.62724 -6.30319e-06 8.49889 -6.30319e-06 8.3538C-6.30319e-06 8.20871 0.0557973 8.08036 0.167404 7.96876L7.96874 0.167416C8.08035 0.0558087 8.2087 5.00679e-06 8.35379 5.00679e-06C8.49888 5.00679e-06 8.62723 0.0558087 8.73883 0.167416L9.57589 1.00447Z"
                            fill="white"
                        />
                    </svg>
                </button>

                {/* Slide Cards */}
                <div className="relative flex justify-center items-center w-full min-h-[400px]">
                    {slides.map((slide, index) => (
                        <SlideCard
                            key={index}
                            title={slide.title}
                            heading={slide.heading}
                            description={slide.description}
                            activeIndex={activeIndex}
                            index={index}
                            isFlipping={isFlipping}
                            direction={direction}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-[100px] top-[80px] -translate-y-1/2 text-white text-3xl font-normal hover:text-accent transition-colors"
                >
                    <svg
                        width="10"
                        height="17"
                        viewBox="0 0 10 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.57588 7.96876C9.68749 8.08036 9.74329 8.20871 9.74329 8.3538C9.74329 8.49889 9.68749 8.62724 9.57588 8.73885L1.77454 16.5402C1.66293 16.6518 1.53458 16.7076 1.38949 16.7076C1.2444 16.7076 1.11606 16.6518 1.00445 16.5402L0.167396 15.7031C0.0557885 15.5915 -1.50464e-05 15.4632 -1.50464e-05 15.3181C-1.50464e-05 15.173 0.0557885 15.0446 0.167396 14.933L6.74664 8.3538L0.167396 1.77456C0.0557885 1.66295 -1.50464e-05 1.5346 -1.50464e-05 1.38951C-1.50464e-05 1.24442 0.0557885 1.11608 0.167396 1.00447L1.00445 0.167416C1.11606 0.0558087 1.2444 5.00679e-06 1.38949 5.00679e-06C1.53458 5.00679e-06 1.66293 0.0558087 1.77454 0.167416L9.57588 7.96876Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
