import rectangleImage from "../assets/Rectangle.png";
import mockupImage from "../assets/Group 2.png";
import twConfig from "../config/globalTailwindConfig";

export default function Features() {
    const c = twConfig.featuresSection;

    return (
        <div className={`${c.container}`}>
            <div
                className={`${c.sectionWrapper} 
        Mobile:relative Mobile:flex Mobile:flex-col Mobile:items-center Mobile:justify-center Mobile:h-auto Mobile:py-4 
        Tablet:relative Tablet:flex Tablet:flex-col Tablet:items-center Tablet:justify-center Tablet:h-auto Tablet:py-6`}
            >
                {/* Background & Mockup - Desktop Only */}
                <img
                    className={`${c.backgroundImage} Mobile:hidden Tablet:hidden`}
                    src={rectangleImage}
                    alt="Background"
                />
                <img
                    className={`${c.mockupImage} Mobile:hidden Tablet:hidden`}
                    src={mockupImage}
                    alt="Mockup"
                />
                <div className={`${c.overlay} Mobile:hidden Tablet:hidden`} />

                {/* --- DESKTOP VERSION --- */}
                <div className="hidden Laptop:block">
                    <div className={c.text.mainTitle}>We Create Something New</div>
                    <div className={c.text.description}>
                        We have created a new product that will help designers, developers
                        and companies create websites for their startups quickly and easily.
                    </div>

                    {/* Card 1 */}
                    <div className={c.cards.title1}>30 New feature pages</div>
                    <div className={c.cards.subtitle1}>
                        Startup Framework contains components and complex blocks which can
                        easily.
                    </div>
                    <div className={c.cards.icon1}></div>

                    {/* Card 2 */}
                    <div className={c.cards.title2}>Useful Symbol Components</div>
                    <div className={c.cards.subtitle2}>
                        Samples will show you the feeling on how to play around using the
                        components.
                    </div>
                    <div className={c.cards.icon2}></div>

                    {/* Vertical Dots */}
                    <div className={c.verticalDots.wrapper}>
                        <div className={c.verticalDots.dot}></div>
                        <div className={c.verticalDots.dot}></div>
                        <div className={c.verticalDots.dot}></div>
                        <div className={c.verticalDots.dot}></div>
                        <div className={c.verticalDots.dotActive}></div>
                    </div>
                </div>

                {/* --- MOBILE & TABLET VERSION --- */}
                <div className="Laptop:hidden flex flex-col items-center text-center px-4">
                    {/* Section Header */}
                    <h2 className="text-white text-lg Tablet:text-xl font-bold mb-1 leading-tight">
                        We Create Something New
                    </h2>
                    <p className="text-white text-xs Tablet:text-sm opacity-90 leading-snug max-w-[90%] mb-5">
                        We have created a new product that will help designers, developers,
                        and companies create websites for their startups quickly and easily.
                    </p>

                    {/* Cards */}
                    <div className="flex flex-col gap-4 w-full max-w-[320px] items-center">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center bg-[#3D1F9A]/30 backdrop-blur-md border border-white/15 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 w-full">
                            <div className="text-white text-2xl mb-2"></div>
                            <h3 className="text-white text-sm Tablet:text-base font-semibold uppercase tracking-wider mb-1">
                                30 New Feature Pages
                            </h3>
                            <p className="text-white text-xs Tablet:text-sm opacity-80 leading-snug">
                                Startup Framework contains components and complex blocks which
                                can easily.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center bg-[#3D1F9A]/30 backdrop-blur-md border border-white/15 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 w-full">
                            <div className="text-white text-2xl mb-2"></div>
                            <h3 className="text-white text-sm Tablet:text-base font-semibold uppercase tracking-wider mb-1">
                                Useful Symbol Components
                            </h3>
                            <p className="text-white text-xs Tablet:text-sm opacity-80 leading-snug">
                                Samples will show you the feeling on how to play around using
                                the components.
                            </p>
                        </div>
                    </div>

                    {/* Vertical Dots */}
                    <div className="flex justify-center items-center mt-6 space-x-1.5">
                        <span className="text-white opacity-30 text-[10px]"></span>
                        <span className="text-white opacity-30 text-[10px]"></span>
                        <span className="text-white opacity-30 text-[10px]"></span>
                        <span className="text-white opacity-30 text-[10px]"></span>
                        <span className="text-white text-[10px]"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
