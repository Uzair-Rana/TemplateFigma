import React from "react";
import twConfig from "../config/globalTailwindConfig";

// --- LOCAL ASSET IMPORTS ---
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";
import Client4 from "../assets/Client4.jpg";

// Data for the portfolio items
const portfolioItems = [
    { category: "UI KIT", title: "Mozart Project", imageUrl: Client1, alt: "Mozart Project UI kit" },
    { category: "FRAMEWORK", title: "Startup Framework 2.0", imageUrl: Client2, alt: "Startup Framework 2.0" },
    { category: "PHOTOS", title: "From the Sky", imageUrl: Client3, alt: "Photos From the Sky" },
    { category: "PICTURES", title: "Air Forces", imageUrl: Client4, alt: "Air Forces Pictures" },
];

// Component for a single portfolio card
const PortfolioCard = ({ category, title, imageUrl, alt }) => (
    <div className={`
      ${twConfig.showcaseSection.card.container} 
      Tablet:mb-4 Mobile:mb-2
    `}>
        <div className={`
          ${twConfig.showcaseSection.card.imageWrapper} 
          Tablet:h-56 Mobile:h-44
        `}>
            <img className={twConfig.showcaseSection.card.image} src={imageUrl} alt={alt} />
        </div>

        <div className={`
          ${twConfig.showcaseSection.card.category}
          Tablet:text-xs Tablet:mb-1
          Mobile:text-[10px] Mobile:mb-[2px]
        `}>
            {category}
        </div>
        <div className={`
          ${twConfig.showcaseSection.card.title} 
          Tablet:text-sm Tablet:leading-6
          Mobile:text-xs Mobile:leading-5
        `}>
            {title}
        </div>
    </div>
);

export default function ShowCaseSection() {
    return (
        <div className={`
          ${twConfig.showcaseSection.container} 
          Tablet:py-12 Tablet:px-4
          Mobile:py-6 Mobile:px-2
        `}>
            <div className={twConfig.showcaseSection.maxWrapper}>
                {/* Header Section */}
                <div className={`
                  ${twConfig.showcaseSection.headerWrapper}
                  Tablet:mb-8
                  Mobile:mb-4 flex-col
                `}>
                    <h1 className={`
                      ${twConfig.showcaseSection.headerTitle} 
                      Tablet:text-3xl Tablet:leading-8 Tablet:mb-4
                      Mobile:text-2xl Mobile:leading-6 Mobile:mb-2
                    `}>
                        Last works
                    </h1>

                    <button className={`
                      ${twConfig.showcaseSection.headerButton} 
                      Tablet:w-36 Tablet:h-10
                      Mobile:w-32 Mobile:h-8
                    `}>
                        <div className={`
                          ${twConfig.showcaseSection.buttonBorder} 
                          Tablet:rounded-[50px] 
                          Mobile:rounded-[40px]
                        `} />
                        <span className={`
                          ${twConfig.showcaseSection.buttonText} 
                          Tablet:text-xs
                          Mobile:text-[10px]
                        `}>
                          View all Works
                        </span>
                    </button>
                </div>

                {/* Portfolio Grid */}
                <div className={`
                  ${twConfig.showcaseSection.grid} 
                  Tablet:grid-cols-2 Tablet:gap-x-10 Tablet:gap-y-16
                  Mobile:grid-cols-1 Mobile:gap-x-4 Mobile:gap-y-8
                `}>
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
