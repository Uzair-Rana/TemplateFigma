import { useState } from "react";
import rectangleImage from "../assets/Rectangle.png";
import mockupImage from "../assets/Group 2.png";
import twConfig from "../config/globalTailwindConfig";

export default function Features() {
    const c = twConfig.featuresSection;

    const slidesData = [
        {
            card1: {
                title: "30 New feature pages",
                subtitle:
                    "Startup Framework contains components and complex blocks which can easily.",
                icon: (
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="..." fill="white"/>
                    </svg>
                ),
            },
            card2: {
                title: "Useful Symbol Components",
                subtitle:
                    "Samples will show you the feeling on how to play around using the components.",
                icon: (
                    <svg width="44" height="35" viewBox="0 0 44 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="..." fill="white"/>
                    </svg>
                ),
            },
        },
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className={c.container}>
            <div className={c.sectionWrapper}>
                {/* Background image */}
                <img className={c.backgroundImage} src={rectangleImage} alt="Background" />

                {/* Desktop / Laptop */}
                <div className="hidden Laptop:flex flex-col items-center relative max-w-[1080px] mx-auto px-4">
                    <img className={c.mockupImage} src={mockupImage} alt="Mockup" />
                    <div className={c.text.mainTitle}>We Create Something New</div>
                    <div className={c.text.description}>
                        We have created a new product that will help designers, developers and
                        companies create websites for their startups quickly and easily.
                    </div>

                    {/* Cards stacked below paragraph */}
                    <div className="flex absolute flex-row justify-center items-start gap-8 mt-10 w-full">
                        {/* Card 1 */}
                        <div className="flex flex-col absolute top-[250px] left-[500px] p-6 md:w-[340px] transition-all duration-300">
                            <div>{slidesData[activeSlide].card1.icon}</div>
                            <h3 className="mt-4 text-white text-xl font-semibold text-center">{slidesData[activeSlide].card1.title}</h3>
                            <p className="mt-2 text-gray-300 text-center">{slidesData[activeSlide].card1.subtitle}</p>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center p-6 md:w-[340px] absolute top-[250px] left-[800px] transition-all duration-300">
                            <div>{slidesData[activeSlide].card2.icon}</div>
                            <h3 className="mt-4 text-white text-xl font-semibold text-center">{slidesData[activeSlide].card2.title}</h3>
                            <p className="mt-2 text-gray-300 text-center">{slidesData[activeSlide].card2.subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Tablet */}
                <div className="hidden Tablet:flex flex-col items-center relative max-w-[1020px] mx-auto px-4">
                    <img className="w-full h-auto mt-10 object-contain" src={mockupImage} alt="Mockup" />
                    <div className={c.text.mainTitleMobile}>We Create Something New</div>
                    <div className={c.text.descriptionMobile}>
                        We have created a new product that will help designers, developers and
                        companies create websites for their startups quickly and easily.
                    </div>

                    <div className={c.cards.cardWrapperMobile}>
                        <div className={c.cards.cardMobile}>
                            <div className={c.cards.cardIconMobile}>{slidesData[activeSlide].card1.icon}</div>
                            <h3 className={c.cards.cardTitleMobile}>{slidesData[activeSlide].card1.title}</h3>
                            <p className={c.cards.cardSubtitleMobile}>{slidesData[activeSlide].card1.subtitle}</p>
                        </div>
                        <div className={c.cards.cardMobile}>
                            <div className={c.cards.cardIconMobile}>{slidesData[activeSlide].card2.icon}</div>
                            <h3 className={c.cards.cardTitleMobile}>{slidesData[activeSlide].card2.title}</h3>
                            <p className={c.cards.cardSubtitleMobile}>{slidesData[activeSlide].card2.subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex Mobile:flex-col Tablet:hidden Laptop:hidden items-center relative px-4">
                    <img className="w-[300px] h-auto mt-8" src={mockupImage} alt="Mockup" />
                    <div className={c.text.mainTitleMobile}>We Create Something New</div>
                    <div className={c.text.descriptionMobile}>
                        We have created a new product that will help designers, developers and
                        companies create websites for their startups quickly and easily.
                    </div>

                    <div className={c.cards.cardWrapperMobile}>
                        <div className={c.cards.cardMobile}>
                            <div className={c.cards.cardIconMobile}>{slidesData[activeSlide].card1.icon}</div>
                            <h3 className={c.cards.cardTitleMobile}>{slidesData[activeSlide].card1.title}</h3>
                            <p className={c.cards.cardSubtitleMobile}>{slidesData[activeSlide].card1.subtitle}</p>
                        </div>
                        <div className={c.cards.cardMobile}>
                            <div className={c.cards.cardIconMobile}>{slidesData[activeSlide].card2.icon}</div>
                            <h3 className={c.cards.cardTitleMobile}>{slidesData[activeSlide].card2.title}</h3>
                            <p className={c.cards.cardSubtitleMobile}>{slidesData[activeSlide].card2.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
