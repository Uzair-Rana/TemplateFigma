import React from "react";

// --- ASSET HANDLING NOTE ---
// Local imports (like ContactImage) are replaced with a placeholder URL
// for execution in this environment. You should use your local import
// (ContactImage) when running in your project.
const ContactImage = "./assets/ContactImage.png";

export default function App() {
    return (
        // The base color is set here (bg-[#2F1893]) and is visible through the image opacity.
        <div className="relative  overflow-hidden bg-[#2F1893] w-full py-24">

            {/* Background Image: Absolute, covers the whole area, and has 60% opacity,
                allowing the dark blue background color to show through. */}
            <img
                // Using the placeholder URL here
                src={ContactImage}
                alt="Contact Background"
                className="absolute inset-0 w-full h-full object-cover"
                // Added an extra fallback in case the placeholder fails
                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
            />

            {/* Main Content Container: It is layered above the background image implicitly,
                but we ensure it has context with relative positioning. */}
            <div className="max-w-[1400px] flex flex-row items-start mx-[120px] px-24 gap-[100px] relative z-10">
                {/* ---------------- LEFT SIDE ---------------- */}
                <div className="flex flex-col space-y-10 pt-8">
                    <h2 className="text-white text-[44px] font-bold leading-[52px]">
                        Let’s Keep in Touch
                    </h2>

                    <p className="text-white text-[20px] font-medium leading-[32px] max-w-[380px]">
                        We have created a new product that will help designers, developers
                        and companies create websites for their startups quickly and easily.
                    </p>

                    <div className="flex flex-col space-y-8 mt-6">
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <span className="text-[22px]">📞</span>
                            <span className="text-white text-[18px] leading-[28px]">
                                +1 555 505 5050
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <span className="text-[22px]">✉️</span>
                            <span className="text-white text-[18px] leading-[28px]">
                                info@designmodo.com
                            </span>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <span className="text-[22px] mt-1">📍</span>
                            <span className="text-white text-[16px] leading-[28px] max-w-[230px]">
                                San Francisco, CA 560 Bush St & 20th Ave, Apt 5, San Francisco,
                                230909
                            </span>
                        </div>
                    </div>
                </div>

                {/* ---------------- RIGHT SIDE (FORM) ---------------- */}
                <div className="bg-white rounded-[10px] w-full max-w-[470px] py-10 px-12 flex flex-col space-y-8 shadow-md">
                    {/* Row 1: Name + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex flex-col space-y-2">
                            <label className="text-violet-950 text-sm font-bold uppercase tracking-widest">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="First name"
                                className="border-2 border-gray-200 rounded-full px-6 py-3 text-slate-900/40 text-lg font-medium outline-none focus:border-teal-400 transition"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-violet-950 text-sm font-bold uppercase tracking-widest">
                                Budget
                            </label>
                            <input
                                type="text"
                                placeholder="$500"
                                className="border-2 border-gray-200 rounded-full px-6 py-3 text-violet-950 text-lg font-medium outline-none focus:border-teal-400 transition"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-violet-950 text-sm font-bold uppercase tracking-widest">
                            Input Field
                        </label>
                        <input
                            type="email"
                            placeholder="name@mail.com"
                            className="border-2 border-gray-200 rounded-full px-6 py-3 text-slate-900/40 text-lg font-medium outline-none focus:border-teal-400 transition"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-violet-950 text-sm font-bold uppercase tracking-widest">
                            Your Message
                        </label>
                        <textarea
                            placeholder="Message"
                            className="border-2 border-gray-200 rounded-xl px-5 py-3 text-slate-900/40 text-lg font-medium h-[110px] resize-none outline-none focus:border-teal-400 transition"
                        />
                    </div>

                    {/* Checkbox + Button */}
                    <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                className="w-5 h-5 accent-teal-400 rounded-md"
                            />
                            <span className="text-slate-900/40 text-base font-normal">
                                Send me a copy
                            </span>
                        </label>

                        <button className="bg-teal-400 hover:bg-teal-500 text-white text-lg font-medium rounded-full px-8 py-3 transition">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}