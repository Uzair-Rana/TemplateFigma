import React from "react";
import AuthForm from "./SubComponent/AuthForm.jsx";
import formImage from "../assets/Form.png";
import twConfig from "../config/globalTailwindConfig";

export default function Form() {
    return (
        <div className={twConfig.formSection.container}>
            {/* Background overlay */}
            <div
                className={twConfig.formSection.backgroundOverlay}
                style={{
                    backgroundImage: `url(${formImage})`,
                    filter: "brightness(0.7) contrast(1.2)",
                }}
            ></div>

            {/* Foreground content */}
            <div className={twConfig.formSection.contentWrapper}>
                {/* Left Section */}
                <div
                    className={twConfig.formSection.leftSection}
                    style={twConfig.formSection.leftSectionCustomStyles}
                >
                    <h1 className={twConfig.formSection.heading}>
                        We solve digital problems with an outstanding creative flare
                    </h1>
                    <p className={twConfig.formSection.paragraph}>
                        We help create a new product that will help designers, developers,
                        and companies create websites for their start-up, quickly and easily.
                    </p>
                </div>

                {/* Right Section */}
                <div className={twConfig.formSection.rightSection}>
                    <AuthForm />
                </div>
            </div>
        </div>
    );
}
