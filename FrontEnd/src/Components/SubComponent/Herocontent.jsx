import React, { useState } from "react";
import Button from "./Button";
import globalTailwindConfig from "../../config/globalTailwindConfig";

const SlideCard = ({ title, heading, description, activeIndex, index, isFlipping, direction }) => {
    const c = globalTailwindConfig.heroSection;

    const isActive = activeIndex === index;
    const rotateClass =
        isActive && isFlipping
            ? direction === "next"
                ? c.slideCardRotateNext
                : c.slideCardRotatePrev
            : c.slideCardRotateNone;

    return (
        <div
            className={`${c.slideCard} ${isActive ? c.slideCardActive : c.slideCardInactive} ${rotateClass}`}
            style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }}
        >
            <h4 className={c.title}>{title}</h4>
            <h1 className={c.heading}>{heading}</h1>
            <p className={c.description}>{description}</p>

            {/* Dots */}
            <div className={c.dotsWrapper}>
                {[0, 1, 2, 3, 4].map((dot) => (
                    <span
                        key={dot}
                        className={`${c.dot} ${dot === index ? c.dotActive : c.dotInactive}`}
                    ></span>
                ))}
            </div>

            <Button>Create an Account</Button>
        </div>
    );
};

export default function HeroContent() {
    const c = globalTailwindConfig.heroSection;

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
        }, 500);
    };

    const prevSlide = () => {
        triggerFlip(
            () => setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
            "prev"
        );
    };

    const nextSlide = () => {
        triggerFlip(
            () => setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
            "next"
        );
    };

    return (
        <div className={c.container}>
            <div className={c.slidesWrapper}>
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className={c.arrowButton}
                    style={{ left: "left-sideArrow", top: "top-topArrow", transform: "-translateY(50%)" }}
                >
                    {/* SVG content */}
                </button>

                {/* Slides */}
                <div className="relative flex justify-center items-center w-full min-h-minHeroHeight">
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
                    className={c.arrowButtonRight}
                    style={{ right: "right-sideArrow", top: "top-topArrow", transform: "-translateY(50%)" }}
                >
                    {/* SVG content */}
                </button>
            </div>
        </div>
    );
}
