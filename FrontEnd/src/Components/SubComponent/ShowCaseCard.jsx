import React from "react";

const ShowCaseCard = ({ category, title, imageSrc, left, top }) => {
    const cardHeight = "440px"; // Adjusted height for image + text

    return (
        <div
            className="absolute flex w-[470px] rounded-[10px] overflow-hidden bg-white bg-opacity-10" // Outer card container
            style={{ left: left, top: top, height: cardHeight }}
        >
            {/* Image (Placed at the top) */}
            <img
                className="w-full flex flex-col h-[280px] object-cover rounded-t-[10px]" // Image takes top part of the card
                src={imageSrc}
                alt={title}
            />

            {/* Text Section (Placed below the image) */}
            {/* Padding and flex for text arrangement */}
            {/* Category Text (Uppercase, tracking-widest, dimmer) */}
            <div className="text-sm flex font-bold uppercase text-white tracking-widest opacity-70 font-['DM_Sans'] mb-1">
                {category}
            </div>
            {/* Title Text (White, medium font) */}
            <div className="text-xl flex font-medium text-white font-['DM_Sans'] leading-7">
                {title}
            </div>
            {/* White Border Effect (Still applied to the whole card) */}
            <div className="absolute inset-0 border border-white opacity-10 rounded-[10px] pointer-events-none"></div>
        </div>
    );
};

export default ShowCaseCard;