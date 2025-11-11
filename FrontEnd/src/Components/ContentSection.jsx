import contentImage from "../assets/contentImage.png";
import twConfig from "../config/globalTailwindConfig";

export default function ContentSection() {
    return (
        <div className={twConfig.contentSection.container}>
            <div
                className={twConfig.contentSection.backgroundWrapper}
                style={{
                    backgroundImage: `url(${contentImage})`,
                    backgroundBlendMode: "normal",
                    backgroundColor: "transparent",
                }}
            >
                <div className={twConfig.contentSection.innerContainer}>
                    <h4 className={twConfig.contentSection.subheading}>Free Sample</h4>
                    <h1 className={twConfig.contentSection.heading}>
                        Powerful Generator and Free Figma Sources
                    </h1>
                    <p className={twConfig.contentSection.paragraph}>
                        Startup Framework contains components and complex blocks which can easily be <br />
                        integrated into almost any design. All of the components are made in the same style, and <br />
                        can easily be integrated into projects, allowing you to create hundreds of solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}
