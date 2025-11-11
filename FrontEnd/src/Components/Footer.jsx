import React from "react";
import globalTailwindConfig from "../config/globalTailwindConfig";

export default function Footer() {
    const c = globalTailwindConfig.footerSection;

    return (
        <div className={`
          ${c.container} relative bg-gray-900 text-white px-8 py-6
          Tablet:px-6 Tablet:py-4
          Mobile:px-4 Mobile:py-3
        `}>
            {/* Desktop layout (absolute positioning) */}
            <div className="hidden Laptop:block relative" style={{ height: "240px", maxWidth: "1440px", margin: "0 auto" }}>
                <div className={c.logo} style={{ left: "8%", top: "22%" }}>Startup 3</div>
                <div className={c.policyLink} style={{ left: "67%", top: "20%" }}>Privacy Policy</div>
                <div className={c.policyLink} style={{ left: "76%", top: "20%" }}>Terms</div>

                <div className={c.socialIcon} style={{ left: "82%", top: "22%", fontFamily: "sans-serif" }}></div>
                <div className={c.socialIcon} style={{ left: "85%", top: "22%", fontFamily: "sans-serif" }}></div>
                <div className={c.socialIcon} style={{ left: "88%", top: "22%", fontFamily: "sans-serif" }}></div>

                <div className={c.separatorLine} style={{ left: "8%", top: "50%", width: "81%", height: "2px" }} />

                {["Tour", "Features", "Pricing Plans", "Our Works", "Brands", "Contacts"].map((text, i) => (
                    <div
                        key={i}
                        className={c.navLink}
                        style={{ left: `${8 + i * 7.5}%`, top: "70%" }}
                    >
                        {text}
                    </div>
                ))}

                <div className={c.copyright} style={{ left: "69%", top: "70%", width: "28%" }}>
                    © 2017 Designmodo. All rights reserved.
                </div>
            </div>

            {/* Tablet & Mobile Layout */}
            <div className="hidden Tablet:flex Mobile:flex flex-col items-center justify-center space-y-4">
                {/* Logo */}
                <div className="text-xl font-bold">Startup 3</div>

                {/* Policy & Social */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <div className="flex gap-2">
                        <span>Privacy Policy</span>
                        <span>Terms</span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span>Tour</span>
                    <span>Features</span>
                    <span>Pricing Plans</span>
                    <span>Our Works</span>
                    <span>Brands</span>
                    <span>Contacts</span>
                </div>

                {/* Copyright */}
                <div className="text-xs opacity-80 text-center">
                    © 2017 Designmodo. All rights reserved.
                </div>
            </div>
        </div>
    );
}
