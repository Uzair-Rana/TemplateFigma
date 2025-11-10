import React from "react";

// ✅ Properly import images from src/assets
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";
import Client4 from "../assets/Client4.jpg";
import Client5 from "../assets/Client1.jpg";

// --- Helper for mock social icons (letters instead of FontAwesome) ---
const SocialIcon = ({ iconName }) => {
    let content = iconName;
    let link = "#";

    switch (iconName) {
        case "\uf099": content = "Tw"; link = "https://x.com/"; break; // Twitter
        case "\uf09a": content = "Fb"; link = "https://facebook.com/"; break;
        case "\uf16d": content = "Ig"; link = "https://instagram.com/"; break;
        case "\uf0fd": content = "Sl"; link = "https://slack.com/"; break;
        case "\uf0ce": content = "Li"; link = "https://linkedin.com/"; break;
        case "\uf126": content = "Sk"; link = "https://skype.com/"; break;
        case "\uf1d3": content = "Gh"; link = "https://github.com/"; break;
        default: content = "??";
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-70 hover:opacity-100 transition-opacity"
        >
            <span className="text-xl font-bold">{content}</span>
        </a>
    );
};

// --- Child Component ---
const TeamCard = ({ name, role, avatar, socialIcons }) => {
    return (
        <div className="flex flex-col items-center text-center mb-10 py-8">
            {/* Avatar */}
            <img
                className="w-28 h-28 rounded-full object-cover border-2 border-white/40"
                src={avatar}
                alt={name}
            />

            {/* Name */}
            <div className="text-white text-xl font-medium font-['DM_Sans'] leading-8 mb-1">
                {name}
            </div>

            {/* Role */}
            <div className="text-white text-base font-normal font-['DM_Sans'] leading-6 opacity-60 mb-4">
                {role}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
                {socialIcons.map((icon, index) => (
                    <SocialIcon key={index} iconName={icon} />
                ))}
            </div>
        </div>
    );
};

// --- Parent Component ---
export default function TeamSection() {
    const teamData = [
        {
            name: "Leah Salomon",
            role: "UI Designer",
            avatar: Client1,
            socialIcons: ["\uf099", "\uf09a", "\uf16d"],
        },
        {
            name: "Taylor Simon",
            role: "Product Manager",
            avatar: Client2,
            socialIcons: ["\uf099", "\uf16d", "\uf0fd"],
        },
        {
            name: "Colin Timmons",
            role: "UX Designer",
            avatar: Client3,
            socialIcons: ["\uf099", "\uf0fd", "\uf09a"],
        },
        {
            name: "Miguel Osborne",
            role: "Front-end Developer",
            avatar: Client4,
            socialIcons: ["\uf0ce", "\uf126", "\uf1d3"],
        },
        {
            name: "Andrea Taylor",
            role: "Marketing Specialist",
            avatar: Client5,
            socialIcons: ["\uf09a", "\uf16d", "\uf0ce"],
        },
    ];

    return (
        <div className="w-full bg-indigo-900 py-24 px-[115px] flex flex-col">
            {/* Header Section */}
            <div className="flex flex-col mb-16 max-w-[764px]">
                <h2 className="text-white text-7xl font-bold font-['DM_Sans'] leading-[52px] mb-6">
                    Startup Crew
                </h2>
                <p className="text-white text-2xl font-semibold font-['DM_Sans'] leading-8 opacity-70">
                    The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-3 gap-x-[146px] gap-y-[61px] max-w-[764px]">
                {teamData.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        avatar={member.avatar}
                        socialIcons={member.socialIcons}
                    />
                ))}
            </div>
        </div>
    );
}
