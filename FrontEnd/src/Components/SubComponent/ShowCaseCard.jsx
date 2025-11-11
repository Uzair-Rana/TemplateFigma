import React from "react";

const ShowCaseCard = ({ category, title, imageSrc, left, top }) => {
    const cardHeight = "440px"; // Default desktop height
    const cardWidth = "470px"; // Default desktop width

    return (
        <div
            className={`
                absolute flex rounded-[10px] overflow-hidden bg-white bg-opacity-10
                w-[470px] h-[440px] 
                Tablet:w-[235px] Tablet:h-[220px] 
                Mobile:w-[235px] Mobile:h-[220px]
            `}
            style={{ left: left, top: top }}
        >
            {/* Image */}
            <img
                className={`
                    w-full object-cover rounded-t-[10px] h-[280px]
                    Tablet:h-[140px]
                    Mobile:h-[140px]
                `}
                src={imageSrc}
                alt={title}
            />

            {/* Text Section */}
            <div className="flex flex-col p-2 Tablet:p-1 Mobile:p-1 w-full">
                {/* Category */}
                <div className="text-sm font-bold uppercase text-white tracking-widest opacity-70 font-['DM_Sans']
                    Tablet:text-xs
                    Mobile:text-xs
                    mb-1 Tablet:mb-0.5 Mobile:mb-0.5
                ">
                    {category}
                </div>
                {/* Title */}
                <div className="text-xl font-medium text-white font-['DM_Sans'] leading-7
                    Tablet:text-sm Tablet:leading-4
                    Mobile:text-sm Mobile:leading-4
                ">
                    {title}
                </div>
            </div>

            {/* White Border */}
            <div className="absolute inset-0 border border-white opacity-10 rounded-[10px] pointer-events-none"></div>
        </div>
    );
};

export default ShowCaseCard;
