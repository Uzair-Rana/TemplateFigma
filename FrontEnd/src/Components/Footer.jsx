import React from "react";
import globalTailwindConfig from "../config/globalTailwindConfig";

// Helper function to convert px to percentage of design
const toPercent = (value, total) => `${(value / total) * 100}%`;

export default function Footer() {
    const c = globalTailwindConfig.footerSection;

    const ICON_TWITTER = "";
    const ICON_FACEBOOK = "";
    const ICON_GOOGLE_PLUS = "";

    const designWidth = 1440; // original design width
    const designHeight = 240; // original design height

    return (
        <div
            className={c.container}
            style={{
                height: "240px",
                maxWidth: "1440px",
                margin: "0 auto",
            }}
        >
            {/* Logo */}
            <div
                className={c.logo}
                style={{
                    left: toPercent(115, designWidth),
                    top: toPercent(54, designHeight),
                }}
            >
                Startup 3
            </div>

            {/* Policy Links */}
            <div
                className={c.policyLink}
                style={{
                    left: toPercent(971, designWidth),
                    top: toPercent(49.4, designHeight),
                }}
            >
                Privacy Policy
            </div>
            <div
                className={c.policyLink}
                style={{
                    left: toPercent(1100, designWidth),
                    top: toPercent(49.4, designHeight),
                }}
            >
                Terms
            </div>

            {/* Social Icons */}
            <div
                className={c.socialIcon}
                style={{
                    left: toPercent(1175, designWidth),
                    top: toPercent(53.2, designHeight),
                    fontFamily: "sans-serif",
                }}
            >
                {ICON_TWITTER}
            </div>
            <div
                className={c.socialIcon}
                style={{
                    left: toPercent(1221, designWidth),
                    top: toPercent(53.2, designHeight),
                    fontFamily: "sans-serif",
                }}
            >
                {ICON_FACEBOOK}
            </div>
            <div
                className={c.socialIcon}
                style={{
                    left: toPercent(1261, designWidth),
                    top: toPercent(53.2, designHeight),
                    fontFamily: "sans-serif",
                }}
            >
                {ICON_GOOGLE_PLUS}
            </div>

            {/* Separator Line */}
            <div
                className={c.separatorLine}
                style={{
                    left: toPercent(116, designWidth),
                    top: toPercent(120, designHeight),
                    width: toPercent(1169, designWidth),
                    height: "2px",
                }}
            />

            {/* Navigation Links */}
            {[
                { text: "Tour", left: 115 },
                { text: "Features", left: 176 },
                { text: "Pricing Plans", left: 267 },
                { text: "Our Works", left: 387 },
                { text: "Brands", left: 493 },
                { text: "Contacts", left: 574 },
            ].map((item, i) => (
                <div
                    key={i}
                    className={c.navLink}
                    style={{
                        left: toPercent(item.left, designWidth),
                        top: toPercent(169.4, designHeight),
                    }}
                >
                    {item.text}
                </div>
            ))}

            {/* Copyright */}
            <div
                className={c.copyright}
                style={{
                    left: toPercent(993, designWidth),
                    top: toPercent(169.4, designHeight),
                    width: toPercent(400, designWidth),
                }}
            >
                © 2017 Designmodo. All rights reserved.
            </div>
        </div>
    );
}
