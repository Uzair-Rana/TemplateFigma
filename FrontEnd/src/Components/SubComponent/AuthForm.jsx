import React, { useState } from "react";

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <div
            className={`
        bg-white shadow-2xl flex flex-col justify-center
        Laptop:w-[470px] Laptop:h-[550px] Laptop:p-8
        Tablet:w-[320px] Tablet:h-[500px] Tablet:p-4
        Mobile:w-[280px] Mobile:h-[450px] Mobile:p-3
        rounded-[25px]
      `}
        >
            {/* SIGN UP / LOGIN Toggle */}
            <div className="flex justify-between items-center mb-3 border-b pb-2 border-gray-200">
                <button
                    className={`font-semibold transition-colors duration-200 pb-2
            Laptop:text-xl Tablet:text-sm Mobile:text-xs
            ${isSignUp ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"}`}
                    onClick={() => setIsSignUp(true)}
                >
                    SIGN UP
                </button>
                <button
                    className={`font-semibold transition-colors duration-200 pb-2
            Laptop:text-xl Tablet:text-sm Mobile:text-xs
            ${!isSignUp ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"}`}
                    onClick={() => setIsSignUp(false)}
                >
                    LOGIN
                </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-4 mb-4">
                <div>
                    <label htmlFor="email" className="sr-only">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        style={{ borderRadius: "25px" }}
                        className="w-full px-4 py-3 Tablet:px-3 Tablet:py-2 Mobile:px-2 Mobile:py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm Tablet:text-xs Mobile:text-[10px]"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">Your password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Your password"
                        style={{ borderRadius: "25px" }}
                        className="w-full px-4 py-3 Tablet:px-3 Tablet:py-2 Mobile:px-2 Mobile:py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm Tablet:text-xs Mobile:text-[10px]"
                        required
                    />
                </div>
            </form>

            {/* Create an Account Button */}
            <button
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 Tablet:py-2 Mobile:py-2 mb-2 transition duration-200 shadow-lg rounded-full text-sm Tablet:text-xs Mobile:text-[10px]"
            >
                Create an Account
            </button>

            {/* Login via Twitter Button */}
            <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 Tablet:py-2 Mobile:py-2 flex items-center justify-center space-x-2 transition duration-200 shadow-lg rounded-full text-sm Tablet:text-xs Mobile:text-[10px]"
            >
                <svg
                    className="w-4 h-4 Tablet:w-3 Tablet:h-3 Mobile:w-3 Mobile:h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M18.9 4.3a8.8 8.8 0 01-2.6.7c-.8-.8-1.9-1.3-3.1-1.3A5.4 5.4 0 007 9.8c0 1.5.7 2.9 1.9 3.9a4.8 4.8 0 01-2.4-.7c0 .1 0 .2 0 .3a5.5 5.5 0 004.4 5.4 5 5 0 01-2.4.1c.3.8 1.2 1.5 2.2 1.5A11 11 0 0021 7.3V7a10 10 0 002.6-2.7z"/>
                </svg>
                <span className="Tablet:text-xs Mobile:text-[10px]">Login via Twitter</span>
            </button>
        </div>
    );
};

export default AuthForm;
