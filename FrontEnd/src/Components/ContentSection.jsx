import contentImage from "../assets/contentImage.png";
import twConfig from "../config/globalTailwindConfig";

export default function ContentSection() {
    const c = twConfig.contentSection;

    return (
        <div className={c.container}>
            <div
                className={c.backgroundWrapper}
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
                <div className={c.innerContainer}>
                    <h4 className={c.subheading}>Free Sample</h4>
                    <h1 className={c.heading}>Powerful Generator and Free Figma Sources</h1>
                    <p className={c.paragraph}>
                        Startup Framework contains components and complex blocks which can easily be <br />
                        integrated into almost any design. All of the components are made in the same style, and <br />
                        can easily be integrated into projects, allowing you to create hundreds of solutions.
                    </p>
                </div>

                {/* Mobile & Tablet View (Centered in section) */}
                <div className="Laptop:hidden flex flex-col items-center justify-center w-full px-4 py-20 text-center">
                    <h4 className={c.subheadingMobile}>Free Sample</h4>
                    <h1 className={c.headingMobile}>Powerful Generator and Free Figma Sources</h1>
                    <p className={c.paragraphMobile}>
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
