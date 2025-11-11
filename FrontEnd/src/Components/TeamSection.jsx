import React from "react";
import globalConfig from "../config/globalTailwindConfig";

// Images
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";
import Client4 from "../assets/Client4.jpg";
import Client5 from "../assets/Client1.jpg";

// Social Icon helper
const SocialIcon = ({ iconName }) => {
    let content = iconName;
    let link = "#";

    switch (iconName) {
        case "\uf099":
            content = "Tw";
            link = "https://x.com/";
            break;
        case "\uf09a":
            content = "Fb";
            link = "https://facebook.com/";
            break;
        case "\uf16d":
            content = "Ig";
            link = "https://instagram.com/";
            break;
        case "\uf0fd":
            content = "Sl";
            link = "https://slack.com/";
            break;
        case "\uf0ce":
            content = "Li";
            link = "https://linkedin.com/";
            break;
        case "\uf126":
            content = "Sk";
            link = "https://skype.com/";
            break;
        case "\uf1d3":
            content = "Gh";
            link = "https://github.com/";
            break;
        default:
            content = "??";
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        ${globalConfig.teamSection.card.socialIcon}
        Tablet:text-lg Mobile:text-base
      `}
        >
            <span>{content}</span>
        </a>
    );
};

// TeamCard Component
const TeamCard = ({ name, role, avatar, socialIcons }) => (
    <div
        className={`
      ${globalConfig.teamSection.card.container}
      Tablet:py-4 Tablet:mb-6
      Mobile:py-3 Mobile:mb-4
    `}
    >
        <img
            className={`
        ${globalConfig.teamSection.card.avatar}
        Tablet:w-20 Tablet:h-20
        Mobile:w-16 Mobile:h-16
      `}
            src={avatar}
            alt={name}
        />

        <div
            className={`
        ${globalConfig.teamSection.card.name}
        Tablet:text-sm Tablet:leading-0
        Mobile:text-base Mobile:leading-0
      `}
        >
            {name}
        </div>
        <div
            className={`
        ${globalConfig.teamSection.card.role}
        Tablet:text-sm Tablet:leading-0
        Mobile:text-xs Mobile:leading-0
      `}
        >
            {role}
        </div>

        {/* Social icons: visible only on desktop */}
        <div className={` 
        ${globalConfig.teamSection.card.socialWrapper} 
        hidden md:flex Tablet:hidden
    `}>
            {socialIcons.map((icon, index) => (
                <SocialIcon key={index} iconName={icon} />
            ))}
        </div>
    </div>
);

// Parent Component
export default function TeamSection() {
    const teamData = [
        { name: "Leah Salomon", role: "UI Designer", avatar: Client1, socialIcons: ["\uf099", "\uf09a", "\uf16d"] },
        { name: "Taylor Simon", role: "Product Manager", avatar: Client2, socialIcons: ["\uf099", "\uf16d", "\uf0fd"] },
        { name: "Colin Timmons", role: "UX Designer", avatar: Client3, socialIcons: ["\uf099", "\uf0fd", "\uf09a"] },
        { name: "Miguel Osborne", role: "Front-end Developer", avatar: Client4, socialIcons: ["\uf0ce", "\uf126", "\uf1d3"] },
        { name: "Andrea Taylor", role: "Marketing Specialist", avatar: Client5, socialIcons: ["\uf09a", "\uf16d", "\uf0ce"] },
    ];

    return (
        <div
            className={`
        ${globalConfig.teamSection.container}
        Tablet:py-12 Tablet:px-4
        Mobile:py-6 Mobile:px-2
      `}
        >
            <div
                className={`
          ${globalConfig.teamSection.headerWrapper}
          Tablet:mb-8
          Mobile:mb-4
        `}
            >
                <h2
                    className={`
            ${globalConfig.teamSection.headerTitle}
            Tablet:text-xl Tablet:leading-[6px]
            Mobile:text-xl Mobile:leading-[8px]
          `}
                >
                    Startup Crew
                </h2>
                <p
                    className={`
            ${globalConfig.teamSection.headerParagraph}
            Tablet:text-sm Tablet:leading-0
            Mobile:text-sm Mobile:leading-0
          `}
                >
                    The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.
                </p>
            </div>

            {/* Grid: Desktop untouched, Tablet & Mobile: 2 columns */}
            <div
                className={`
          ${globalConfig.teamSection.cardsGrid}
          Tablet:grid-cols-2 Tablet:gap-x-6 Tablet:gap-y-6
          Mobile:grid-cols-2 Mobile:gap-x-4 Mobile:gap-y-4
        `}
            >
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
