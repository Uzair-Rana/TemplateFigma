// AuthForm.js (Child Component)

import React, { useState } from 'react';

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    // --- Styling Notes ---
    // Form container: 470px width, 550px height
    // Input fields: 25px rounded corners
    // Buttons: 100px rounded corners (using rounded-full for Tailwind approximation)

    return (
        <div
            className="bg-white p-8 shadow-2xl"
            // Applying specific dimensions and border radius to the form card itself (Approximation of 25px radius)
            style={{
                width: '470px',
                height: '550px',
                borderRadius: '25px', // Form container border-radius
                // Centering content vertically inside the form if needed
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >

            {/* 🚀 SIGN UP / LOGIN Toggle */}
            {/* Adjusted padding/margin slightly to fit the new overall form height */}
            <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-200">
                <button
                    className={`text-xl font-semibold transition-colors duration-200 pb-2 ${
                        isSignUp
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                    }`}
                    onClick={() => setIsSignUp(true)}
                >
                    SIGN UP
                </button>
                <button
                    className={`text-xl font-semibold transition-colors duration-200 pb-2 ${
                        !isSignUp
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                    }`}
                    onClick={() => setIsSignUp(false)}
                >
                    LOGIN
                </button>
            </div>

            {/* 📝 Form Fields */}
            <form className="space-y-6 mb-8">
                <div>
                    <label htmlFor="email" className="sr-only">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        // Custom 25px border-radius
                        style={{ borderRadius: '25px' }}
                        className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">Your password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Your password"
                        // Custom 25px border-radius
                        style={{ borderRadius: '25px' }}
                        className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                </div>
            </form>

            {/* 🟢 Create an Account Button (Teal/Green) */}
            <button
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 mb-4 transition duration-200 shadow-lg"
                // Custom 100px border-radius (using rounded-full approximates this)
                style={{ borderRadius: '100px' }}
            >
                Create an Account
            </button>

            {/* 🐦 Login via Twitter Button (Blue) */}
            <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 flex items-center justify-center space-x-2 transition duration-200 shadow-lg"
                // Custom 100px border-radius (using rounded-full approximates this)
                style={{ borderRadius: '100px' }}
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.9 4.3a8.8 8.8 0 01-2.6.7c-.8-.8-1.9-1.3-3.1-1.3A5.4 5.4 0 007 9.8c0 1.5.7 2.9 1.9 3.9a4.8 4.8 0 01-2.4-.7c0 .1 0 .2 0 .3a5.5 5.5 0 004.4 5.4 5 5 0 01-2.4.1c.3.8 1.2 1.5 2.2 1.5A11 11 0 0021 7.3V7a10 10 0 002.6-2.7z"/>
                </svg>
                <span>Login via Twitter</span>
            </button>
        </div>
    );
};

export default AuthForm;