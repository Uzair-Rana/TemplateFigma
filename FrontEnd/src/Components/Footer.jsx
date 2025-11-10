import React from 'react';

export default function Footer() {
    // Placeholder characters for FontAwesome icons to maintain layout position
    const ICON_TWITTER = ""; // \f099
    const ICON_FACEBOOK = ""; // \f09a
    const ICON_GOOGLE_PLUS = ""; // \f0d5

    return (
        // Main Container: Fixed 1400px width and 240px height
        <div className="w-[1400px] h-60 relative bg-indigo-900 overflow-hidden">

            {/* Logo: Startup 3 */}
            <div className="w-44 h-5 left-[115px] top-[54px] absolute">
                <div className="left-[2px] top-[-6px] absolute text-center justify-start text-white text-2xl font-bold font-['DM_Sans']">
                    Startup 3
                </div>
            </div>

            {/* Policy Links (Right side, Top row) */}
            <div className="left-[971px] top-[49.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Privacy Policy
            </div>
            <div className="left-[1100px] top-[49.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Terms
            </div>

            {/* Social Icons (Far Right) */}
            <div
                className="left-[1175px] top-[53.20px] absolute justify-start text-white text-lg font-normal font-['FontAwesome'] uppercase leading-6"
                // Adjusted FontAwesome character to be visible text for exact positioning
                style={{ fontFamily: 'sans-serif' }}
            >
                {ICON_TWITTER}
            </div>
            <div
                className="left-[1221px] top-[53.20px] absolute justify-start text-white text-lg font-normal font-['FontAwesome'] uppercase leading-6"
                style={{ fontFamily: 'sans-serif' }}
            >
                {ICON_FACEBOOK}
            </div>
            <div
                className="left-[1261px] top-[53.20px] absolute justify-start text-white text-lg font-normal font-['FontAwesome'] uppercase leading-6"
                style={{ fontFamily: 'sans-serif' }}
            >
                {ICON_GOOGLE_PLUS}
            </div>

            {/* Separator Line (Divider) */}
            <div
                className="w-[1169px] h-0.5 left-[116px] top-[120px] absolute opacity-30 outline outline-2 outline-offset-[-1px] outline-white"
                // Use a simple white background with reduced opacity for the divider line
                style={{ backgroundColor: 'white', opacity: 0.3, height: '2px', border: 'none' }}
            />

            {/* Main Navigation Links (Bottom row, Left side) */}
            <div className="left-[115px] top-[169.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Tour
            </div>
            <div className="left-[176px] top-[169.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Features
            </div>
            <div className="left-[267px] top-[169.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Pricing Plans
            </div>
            <div className="left-[387px] top-[169.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Our Works
            </div>
            <div className="left-[493px] top-[169.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Brands
            </div>
            <div className="left-[574px] top-[169.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                Contacts
            </div>

            {/* Copyright Text (Bottom row, Right side) */}
            <div className="left-[993px] top-[169.40px] absolute text-right justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                © 2017 Designmodo. All rights reserved.
            </div>

        </div>
    );
}