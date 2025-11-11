import React from "react";
import AuthForm from "./SubComponent/AuthForm.jsx";
import formImage from "../assets/Form.png";
import twConfig from "../config/globalTailwindConfig";

export default function Form() {
    const c = twConfig.formSection;

    return (
        <div className={c.container}>
            {/* Background overlay */}
            <div
                className={c.backgroundOverlay}
                style={{
                    backgroundImage: `url(${formImage})`,
                    filter: "brightness(0.7) contrast(1.2)",
                }}
            ></div>

            {/* Foreground content */}
            <div
                className={`
          ${c.contentWrapper} 
          Mobile:flex-col Mobile:items-center Mobile:p-2 Mobile:m-0
          Tablet:flex-col Tablet:items-center Tablet:p-4 Tablet:m-0
        `}
            >
                {/* Left Section */}
                <div
                    className={`
            ${c.leftSection} 
            Mobile:mr-0 Mobile:w-full Mobile:pt-8 Mobile:pb-8
            Tablet:mr-0 Tablet:w-[320px] Tablet:pt-16 Tablet:pb-16
          `}
                    style={{
                        ...c.leftSectionCustomStyles,
                        paddingTop: "0",
                        paddingBottom: "0",
                        marginRight: "0",
                        width: "auto",
                        minHeight: "auto",
                    }}
                >
                    <h1
                        className={`
              ${c.heading} 
              Mobile:text-xl Mobile:leading-snug Mobile:mb-4
              Tablet:text-2xl Tablet:leading-snug Tablet:mb-6
            `}
                    >
                        We solve digital problems with an outstanding creative flare
                    </h1>

                    <p
                        className={`
              ${c.paragraph} 
              Mobile:text-xs Mobile:leading-snug
              Tablet:text-sm Tablet:leading-snug
            `}
                    >
                        We help create a new product that will help designers, developers,
                        and companies create websites for their start-up, quickly and easily.
                    </p>
                </div>

                {/* Right Section */}
                <div
                    className={`
            ${c.rightSection} 
            Mobile:w-full Mobile:mt-6 Mobile:p-0
            Tablet:w-[350px] Tablet:mt-8 Tablet:p-2
          `}
                >
                    <AuthForm />
                </div>
            </div>
        </div>
    );
}
