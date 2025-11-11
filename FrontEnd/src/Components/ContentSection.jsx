import contentImage from "../assets/contentImage.png";
import twConfig from "../config/globalTailwindConfig";

export default function ContentSection() {
    const c = twConfig.contentSection;

    return (
        <div className={`${c.container}`}>
            <div
                className={`${c.backgroundWrapper} 
                    Mobile:w-full Mobile:h-auto Mobile:flex Mobile:flex-col Mobile:items-center Mobile:justify-center
                    Tablet:w-full Tablet:h-auto Tablet:flex Tablet:flex-col Tablet:items-center Tablet:justify-center
                `}
                style={{
                    backgroundImage: `url(${contentImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "normal",
                    backgroundColor: "transparent",
                }}
            >
                {/* Desktop Design (Unchanged) */}
                <div className={`${c.innerContainer} Laptop:flex Laptop:flex-col Laptop:items-center Laptop:justify-center Laptop:text-center
                    Mobile:pt-0 Mobile:pb-0 Tablet:pt-0 Tablet:pb-0
                `}>
                    <h4 className={`${c.subheading} Mobile:hidden Tablet:hidden`}>
                        Free Sample
                    </h4>
                    <h1 className={`${c.heading} Mobile:hidden Tablet:hidden`}>
                        Powerful Generator and Free Figma Sources
                    </h1>
                    <p className={`${c.paragraph} Mobile:hidden Tablet:hidden`}>
                        Startup Framework contains components and complex blocks which can easily be <br />
                        integrated into almost any design. All of the components are made in the same style, and <br />
                        can easily be integrated into projects, allowing you to create hundreds of solutions.
                    </p>
                </div>

                {/* Mobile & Tablet View (Centered in section) */}
                <div className="Laptop:hidden flex flex-col items-center justify-center w-full px-4 py-5 text-center">
                    <h4 className="text-[12px] Tablet:text-[14px] text-white font-semibold uppercase tracking-wide mb-2">
                        Free Sample
                    </h4>
                    <h1 className="text-[20px] Tablet:text-[26px] text-white font-bold leading-snug mb-3">
                        Powerful Generator and Free Figma Sources
                    </h1>
                    <p className="text-[12px] Tablet:text-[14px] text-white opacity-90 leading-snug max-w-[90%]">
                        Startup Framework contains components and complex blocks which can easily be
                        integrated into almost any design. All of the components are made in the same
                        style and can easily be integrated into projects, allowing you to create
                        hundreds of solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}
