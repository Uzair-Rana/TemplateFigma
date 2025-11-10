// src/Components/ContentSection.jsx
import contentImage from "../assets/contentImage.png";

export default function ContentSection() {
    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-[#2F1893]">
            <div
                className="relative w-full bg-cover bg-center bg-no-repeat  text-white flex justify-center"
                style={{
                    backgroundImage: `url(${contentImage})`,
                    backgroundBlendMode: "normal",
                    backgroundColor: "transparent",
                }}
            >
                {/* Outer container */}
                <div className="flex flex-col items-center justify-center text-center max-w-[815px] w-full pt-[107px] pb-[126px]">
                    {/* Subheading */}
                    <h4 className="text-[18px] text-white font-semibold uppercase tracking-wide mb-[29px]">
                        Free Sample
                    </h4>

                    {/* Main Heading */}
                    <h1 className="text-[48px] text-white leading-[70px] font-extrabold mb-[28px] max-w-[815px]">
                        Powerful Generator and Free Figma Sources
                    </h1>

                    {/* Paragraph with controlled line breaks */}
                    <p className="text-[16px] text-white leading-[28px] max-w-[775px]">
                        Startup Framework contains components and complex blocks which can easily be <br />
                        integrated into almost any design. All of the components are made in the same style, and <br />
                        can easily be integrated into projects, allowing you to create hundreds of solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}
