// src/Components/ShowCaseSection.jsx
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
    <div className={twConfig.showcaseSection.card.container}>
        <div className={twConfig.showcaseSection.card.imageWrapper}>
            <img className={twConfig.showcaseSection.card.image} src={imageUrl} alt={alt} />
        </div>

        <div className={twConfig.showcaseSection.card.category}>{category}</div>
        <div className={twConfig.showcaseSection.card.title}>{title}</div>
    </div>
);

export default function ShowCaseSection() {
    return (
        <div className={twConfig.showcaseSection.container}>
            <div className={twConfig.showcaseSection.maxWrapper}>
                {/* Header Section */}
                <div className={twConfig.showcaseSection.headerWrapper}>
                    <h1 className={twConfig.showcaseSection.headerTitle}>Last works</h1>

                    <button className={twConfig.showcaseSection.headerButton}>
                        <div className={twConfig.showcaseSection.buttonBorder} />
                        <span className={twConfig.showcaseSection.buttonText}>View all Works</span>
                    </button>
                </div>

                {/* Portfolio Grid */}
                <div className={twConfig.showcaseSection.grid}>
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
