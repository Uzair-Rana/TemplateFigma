import React from "react";
import PricingTableBg from "../assets/PricingTable.png";
import globalTailwindConfig from "../config/globalTailwindConfig";

// Feature row component
const FeatureRow = ({ text, isIncluded = true, isProfessional = false }) => {
    const c = globalTailwindConfig.pricingTableSection;

    const textOpacity = isIncluded ? "opacity-100" : "opacity-60";
    const professionalOpacity = isProfessional ? "opacity-70" : "";
    const showDot = isIncluded;

    return (
        <div className={c.featureRow}>
            <div className={c.featureDotWrapper}>
                {showDot && <div className={c.featureDot} />}
            </div>
            <div className={`${c.featureText} ${textOpacity} ${professionalOpacity}`}>
                {text}
            </div>
        </div>
    );
};

// CTA Button component
const GetStartedButton = ({ isPink = false }) => {
    const c = globalTailwindConfig.pricingTableSection;
    return (
        <div className={c.getStartedButtonWrapper}>
            <div className={c.getStartedButton}>
                <div className={`${c.buttonInner} ${isPink ? c.buttonPink : "opacity-30 border"}`} />
                <div className={c.buttonText}>Get Started</div>
            </div>
        </div>
    );
};

export default function PricingTable() {
    const c = globalTailwindConfig.pricingTableSection;

    const features = [
        "2 GB of space",
        "14 days of backups",
        "Social integrations",
        "Client billing",
        "Remote access",
        "Custom domain",
        "24 hours support",
        "Admin tools",
        "Collaboration tools",
        "User management",
    ];

    const cardData = [
        { title: "Starter", price: "9.99", included: 4, isPink: false },
        { title: "Professional", price: "19.99", included: 7, isPink: true },
        { title: "Team", price: "49.99", included: 10, isPink: false },
    ];

    return (
        <div
            className={c.container}
            style={{
                minHeight: "1130px",
                backgroundImage: `url(${PricingTableBg})`,
                maxWidth: "1440px",
                margin: "0 auto",
                paddingTop: "100px",
            }}
        >
            {/* Header */}
            <div className="text-center mb-8">
                <div className={c.header}>Plans & Pricing</div>
                <div className={`${c.subHeader} mx-auto max-w-xl mt-8 px-4`}>
                    Startup Framework is free forever — you only pay for custom domain hosting or to export your site.
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-wrap justify-center gap-10 p-4 pt-16">
                {cardData.map((card, idx) => {
                    const isProfessional = card.title === "Professional";

                    return (
                        <div
                            key={idx}
                            className={`w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-sm ${isProfessional ? 'cursor-pointer transform hover:scale-[1.01] transition-transform' : ''}`}
                            style={{ height: '730px' }}
                        >
                            <div className={c.cardContainer}>
                                <div className={`${c.cardBackground} ${isProfessional ? 'opacity-100' : 'opacity-20'}`} />
                                <div className={c.cardContent}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className={c.cardTitle}>{card.title}</div>
                                        <div className="flex items-start mt-6 mb-10">
                                            <div className={c.cardPrice}>{card.price}</div>
                                            <div className={c.cardDollarSign}>$</div>
                                        </div>
                                        <div className="text-left w-full max-w-[280px] mx-auto">
                                            {features.map((text, i) => (
                                                <FeatureRow
                                                    key={i}
                                                    text={text}
                                                    isIncluded={i < card.included}
                                                    isProfessional={isProfessional}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <GetStartedButton isPink={card.isPink} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
