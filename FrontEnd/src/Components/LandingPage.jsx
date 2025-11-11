import React from "react";
import bgImage from "../assets/Image.png";
import Navbar from "./SubComponent/Navbar";
import HeroContent from "./SubComponent/HeroContent";
import twConfig from "../config/globalTailwindConfig";

export default function LandingPage() {
    return (
        <div className={`${twConfig.layout.fullScreenFlexCol} ${twConfig.background.light}`}>

            {/* Background Image */}
            <div
                className={`${twConfig.background.coverCenter} ${twConfig.landingPage.backgroundZ}`}
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Overlay */}
            <div className={`${twConfig.background.overlay} ${twConfig.landingPage.overlayZ}`}></div>

            {/* Foreground Content */}
            <div className={`${twConfig.landingPage.foreground}`}>
                <Navbar />
                <div className={twConfig.padding.base}>
                    <HeroContent />
                </div>
            </div>
        </div>
    );
}
