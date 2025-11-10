import React from "react";

// ✅ Import your background image from assets folder
import PricingTableBg from "../assets/PricingTable.png";

// Component to render a single feature row
const FeatureRow = ({ text, top, isIncluded = true, textLeft, opacity = 1 }) => (
    <>
        {/* Optional checkmark (only if included) */}
        {isIncluded && (
            <div
                className="absolute w-3 h-3 bg-white rounded-full"
                style={{ left: `${textLeft - 25}px`, top: `${top + 3}px` }}
            ></div>
        )}
        <div
            className="absolute text-white text-base font-normal font-['DM_Sans'] leading-6"
            style={{ left: `${textLeft}px`, top: `${top}px`, opacity }}
        >
            {text}
        </div>
    </>
);

// Component for the CTA Button
const GetStartedButton = ({ left, isPink = false }) => (
    <div className="w-56 h-14 absolute" style={{ left: `${left}px`, top: "914px" }}>
        <div
            className={`w-56 h-14 left-0 top-0 absolute rounded-[100px] border-2 border-white transition-colors 
      ${isPink ? "bg-pink-600 border-none" : "opacity-30"}`}
        />
        <div className="absolute left-[60px] top-[17px] text-white text-xl font-medium font-['DM_Sans'] leading-6">
            Get Started
        </div>
    </div>
);

export default function PricingTable() {
    return (
        <div
            className="relative w-[1400px] h-[1130px] overflow-hidden bg-indigo-900 bg-cover bg-center"
            style={{
                backgroundImage: `url(${PricingTableBg})`, // ✅ background applied here
            }}
        >
            {/* --- HEADER --- */}
            <div className="absolute left-[553.5px] top-[100px] text-center text-white text-5xl font-bold leading-[52px]">
                Plans & Pricing
            </div>

            <div className="absolute w-[586px] left-[408px] top-[182px] text-center text-white text-xl font-medium leading-8">
                Startup Framework is free forever — you only pay for custom domain
                hosting or to export your site.
            </div>

            {/* --- PRICING CARDS --- */}
            {/* 1️⃣ Starter */}
            <div className="absolute w-96 h-[730px] left-[115px] top-[300px] opacity-20 rounded-[10px] border-2 border-white" />
            <div className="absolute left-[184px] top-[364.2px] text-white text-xl font-medium leading-8">
                Starter
            </div>
            <div className="absolute left-[184px] top-[418.8px] text-white text-6xl font-bold leading-[70px]">
                9.99
            </div>
            <div className="absolute left-[308px] top-[430.4px] text-white text-base">$</div>

            <FeatureRow text="2 GB of space" top={533.4} textLeft={186} />
            <FeatureRow text="14 days of backups" top={569.4} textLeft={184} />
            <FeatureRow text="Social integrations" top={605.4} textLeft={190} />
            <FeatureRow text="Client billing" top={641.4} textLeft={184} />
            <FeatureRow text="Remote access" top={677.4} textLeft={190} isIncluded={false} opacity={0.6} />
            <FeatureRow text="Custom domain" top={713.4} textLeft={190} isIncluded={false} opacity={0.6} />
            <FeatureRow text="24 hours support" top={749.4} textLeft={187} isIncluded={false} opacity={0.6} />
            <FeatureRow text="Admin tools" top={785.4} textLeft={184} isIncluded={false} opacity={0.6} />
            <FeatureRow text="Collaboration tools" top={821.4} textLeft={190} isIncluded={false} opacity={0.6} />
            <FeatureRow text="User management" top={857.4} textLeft={192} isIncluded={false} opacity={0.6} />
            <GetStartedButton left={185} isPink={false} />

            {/* 2️⃣ Professional */}
            <div className="absolute w-96 h-[730px] left-[515px] top-[300px] opacity-20 rounded-[10px] border-2 border-white" />
            <div className="absolute left-[584px] top-[364.2px] text-white text-xl font-medium leading-8">
                Professional
            </div>
            <div className="absolute left-[595px] top-[418.8px] text-white text-6xl font-bold leading-[70px]">
                19.99
            </div>
            <div className="absolute left-[741px] top-[430.4px] text-white text-base">$</div>

            <FeatureRow text="2 GB of space" top={533.4} textLeft={584} />
            <FeatureRow text="14 days of backups" top={569.4} textLeft={584} />
            <FeatureRow text="Social integrations" top={605.4} textLeft={584} />
            <FeatureRow text="Client billing" top={641.4} textLeft={584} />
            <FeatureRow text="Remote access" top={677.4} textLeft={584} />
            <FeatureRow text="Custom domain" top={713.4} textLeft={584} />
            <FeatureRow text="24 hours support" top={749.4} textLeft={584} />
            <FeatureRow text="Admin tools" top={785.4} textLeft={584} isIncluded={false} opacity={0.6} />
            <FeatureRow text="Collaboration tools" top={821.4} textLeft={590} isIncluded={false} opacity={0.6} />
            <FeatureRow text="User management" top={857.4} textLeft={584} isIncluded={false} opacity={0.6} />
            <GetStartedButton left={585} isPink={true} />

            {/* 3️⃣ Team */}
            <div className="absolute w-96 h-[730px] left-[915px] top-[300px] opacity-20 rounded-[10px] border-2 border-white" />
            <div className="absolute left-[984px] top-[364.2px] text-white text-xl font-medium leading-8">
                Team
            </div>
            <div className="absolute left-[987px] top-[418.8px] text-white text-6xl font-bold leading-[70px]">
                49.99
            </div>
            <div className="absolute left-[1147px] top-[430.4px] text-white text-base">$</div>

            <FeatureRow text="2 GB of space" top={533.4} textLeft={986} />
            <FeatureRow text="14 days of backups" top={569.4} textLeft={989} />
            <FeatureRow text="Social integrations" top={605.4} textLeft={990} />
            <FeatureRow text="Client billing" top={641.4} textLeft={984} />
            <FeatureRow text="Remote access" top={677.4} textLeft={990} />
            <FeatureRow text="Custom domain" top={713.4} textLeft={990} />
            <FeatureRow text="24 hours support" top={749.4} textLeft={987} />
            <FeatureRow text="Admin tools" top={785.4} textLeft={987} />
            <FeatureRow text="Collaboration tools" top={821.4} textLeft={990} />
            <FeatureRow text="User management" top={857.4} textLeft={984} />
            <GetStartedButton left={985} isPink={false} />
        </div>
    );
}
