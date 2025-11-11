import rectangleImage from "../assets/Rectangle.png";
import mockupImage from "../assets/Group 2.png";
import twConfig from "../config/globalTailwindConfig";

export default function Features() {
    return (
        <div className={twConfig.featuresSection.container}>
            <div className={twConfig.featuresSection.sectionWrapper}>
                <img className={twConfig.featuresSection.backgroundImage} src={rectangleImage} alt="Background" />
                <img className={twConfig.featuresSection.mockupImage} src={mockupImage} alt="Mockup" />
                <div className={twConfig.featuresSection.overlay} />

                <div className={twConfig.featuresSection.text.mainTitle}>We Create Something New</div>
                <div className={twConfig.featuresSection.text.description}>
                    We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                </div>

                {/* Card 1 */}
                <div className={twConfig.featuresSection.cards.title1}>30 New feature pages</div>
                <div className={twConfig.featuresSection.cards.subtitle1}>
                    Startup Framework contains components and complex blocks which can easily.
                </div>
                <div className={twConfig.featuresSection.cards.icon1}></div>

                {/* Card 2 */}
                <div className={twConfig.featuresSection.cards.title2}>Useful Symbol Components</div>
                <div className={twConfig.featuresSection.cards.subtitle2}>
                    Samples will show you the feeling on how to play around using the components.
                </div>
                <div className={twConfig.featuresSection.cards.icon2}></div>

                {/* Vertical Dots */}
                <div className={twConfig.featuresSection.verticalDots.wrapper}>
                    <div className={twConfig.featuresSection.verticalDots.dot}></div>
                    <div className={twConfig.featuresSection.verticalDots.dot}></div>
                    <div className={twConfig.featuresSection.verticalDots.dot}></div>
                    <div className={twConfig.featuresSection.verticalDots.dot}></div>
                    <div className={twConfig.featuresSection.verticalDots.dotActive}></div>
                </div>
            </div>
        </div>
    );
}
