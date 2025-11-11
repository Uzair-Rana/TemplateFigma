import React from "react";
import globalTailwindConfig from "../config/globalTailwindConfig";
import PricingTableBg from "../assets/PricingTable.png";

// Helper function to convert px to percentage based on design width/height
const toPercent = (value, total) => `${(value / total) * 100}%`;

// Feature row component
const FeatureRow = ({ text, leftPx, topPx, isIncluded = true, opacity = 1 }) => {
    const c = globalTailwindConfig.pricingTableSection;
    return (
        <>
            {isIncluded && (
                <div
                    className={c.featureDot}
                    style={{
                        left: toPercent(leftPx - 25, 1440),
                        top: toPercent(topPx + 3, 1130),
                    }}
                />
            )}
            <div
                className={c.featureText}
                style={{
                    left: toPercent(leftPx, 1440),
                    top: toPercent(topPx, 1130),
                    opacity,
                }}
            >
                {text}
            </div>
        </>
    );
};

// CTA Button component
const GetStartedButton = ({ leftPx, topPx, isPink = false }) => {
    const c = globalTailwindConfig.pricingTableSection;
    return (
        <div
            className={c.getStartedButton}
            style={{
                left: toPercent(leftPx, 1440),
                top: toPercent(topPx, 1130),
            }}
        >
            <div className={`${c.buttonInner} ${isPink ? c.buttonPink : "opacity-30"}`} />
            <div className={c.buttonText}>Get Started</div>
        </div>
    );
};

export default function PricingTable() {
    const c = globalTailwindConfig.pricingTableSection;

    return (
        <div
            className={c.container}
            style={{
                height: "1130px",
                backgroundImage: `url(${PricingTableBg})`,
                maxWidth: "1440px",
                margin: "0 auto",
            }}
        >
            {/* HEADER */}
            <div
                className={c.header}
                style={{ left: toPercent(553.5, 1440), top: toPercent(100, 1130) }}
            >
                Plans & Pricing
            </div>
            <div
                className={c.subHeader}
                style={{
                    left: toPercent(408, 1440),
                    top: toPercent(182, 1130),
                    width: toPercent(586, 1440),
                }}
            >
                Startup Framework is free forever — you only pay for custom domain
                hosting or to export your site.
            </div>

            {/* PRICING CARDS */}

            {/* Starter */}
            <div
                className={c.card}
                style={{
                    left: toPercent(115, 1440),
                    top: toPercent(300, 1130),
                    width: toPercent(384, 1440),
                    height: toPercent(730, 1130),
                }}
            />
            <div
                className={c.cardTitle}
                style={{ left: toPercent(184, 1440), top: toPercent(364.2, 1130) }}
            >
                Starter
            </div>
            <div
                className={c.cardPrice}
                style={{ left: toPercent(308, 1440), top: toPercent(418.8, 1130) }}
            >
                9.99
            </div>
            <div
                className={c.cardDollarSign}
                style={{ left: toPercent(308 + 32, 1440), top: toPercent(430.4, 1130) }}
            >
                $
            </div>

            {[
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
            ].map((text, i) => (
                <FeatureRow
                    key={i}
                    text={text}
                    leftPx={i % 2 === 0 ? 186 : 190}
                    topPx={533.4 + i * 36}
                    isIncluded={i < 4}
                    opacity={i < 4 ? 1 : 0.6}
                />
            ))}

            <GetStartedButton leftPx={185} topPx={914} isPink={false} />

            {/* Professional */}
            <div
                className={c.card}
                style={{
                    left: toPercent(515, 1440),
                    top: toPercent(300, 1130),
                    width: toPercent(384, 1440),
                    height: toPercent(730, 1130),
                }}
            />
            <div
                className={c.cardTitle}
                style={{ left: toPercent(584, 1440), top: toPercent(364.2, 1130) }}
            >
                Professional
            </div>
            <div
                className={c.cardPrice}
                style={{ left: toPercent(595, 1440), top: toPercent(418.8, 1130) }}
            >
                19.99
            </div>
            <div
                className={c.cardDollarSign}
                style={{ left: toPercent(741, 1440), top: toPercent(430.4, 1130) }}
            >
                $
            </div>

            {[...Array(10)].map((_, i) => (
                <FeatureRow
                    key={i + 100}
                    text={[
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
                    ][i]}
                    leftPx={584}
                    topPx={533.4 + i * 36}
                    isIncluded={i < 6}
                    opacity={i < 6 ? 1 : 0.6}
                />
            ))}

            <GetStartedButton leftPx={585} topPx={914} isPink={true} />

            {/* Team */}
            <div
                className={c.card}
                style={{
                    left: toPercent(915, 1440),
                    top: toPercent(300, 1130),
                    width: toPercent(384, 1440),
                    height: toPercent(730, 1130),
                }}
            />
            <div
                className={c.cardTitle}
                style={{ left: toPercent(984, 1440), top: toPercent(364.2, 1130) }}
            >
                Team
            </div>
            <div
                className={c.cardPrice}
                style={{ left: toPercent(987, 1440), top: toPercent(418.8, 1130) }}
            >
                49.99
            </div>
            <div
                className={c.cardDollarSign}
                style={{ left: toPercent(1147, 1440), top: toPercent(430.4, 1130) }}
            >
                $
            </div>

            {[...Array(10)].map((_, i) => (
                <FeatureRow
                    key={i + 200}
                    text={[
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
                    ][i]}
                    leftPx={986}
                    topPx={533.4 + i * 36}
                    isIncluded={i < 7}
                    opacity={i < 7 ? 1 : 0.6}
                />
            ))}

            <GetStartedButton leftPx={985} topPx={914} isPink={false} />
        </div>
    );
}
