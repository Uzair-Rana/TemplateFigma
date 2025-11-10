import React from "react";
import AuthForm from "./SubComponent/AuthForm.jsx";
import formImage from "../assets/Form.png"; // ✅ import image properly

export default function Form() {
    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#2F1893]">

            {/* 🔹 Background image overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${formImage})`,
                    filter: "brightness(0.7) contrast(1.2)",
                }}
            ></div>

            {/* 🔹 Foreground content */}
            <div className="relative z-10 flex flex-row max-w-7xl mx-auto">

                {/* Left Section: Marketing Text */}
                <div
                    className="text-white flex flex-col justify-center"
                    style={{
                        paddingTop: "216px",
                        paddingBottom: "216px",
                        marginRight:"130px",
                        width: "369px",
                        minHeight: "318px",
                    }}
                >
                    <h1 className="text-5xl font-bold leading-snug mb-4">
                        We solve digital problems with an outstanding creative flare
                    </h1>
                    <p className="text-base opacity-80">
                        We help create a new product that will help designers, developers,
                        and companies create websites for their start-up, quickly and easily.
                    </p>
                </div>

                {/* Right Section: Auth Form */}
                <div className="flex items-center justify-center">
                    <AuthForm />
                </div>
            </div>
        </div>
    );
}
