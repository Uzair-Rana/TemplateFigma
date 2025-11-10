import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full px-4 lg:px-0 mx-auto mt-[20px]">
            {/* Mobile & Tablet Top Bar */}
            <div className="lg:hidden flex items-center justify-between bg-indigo-900 px-4 py-3 rounded-xl shadow-md">
                {/* Hamburger Icon */}
                <button
                    className="text-white text-2xl font-bold focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Title */}
                <div className="text-white text-lg font-medium font-['DM_Sans'] text-center flex-1">
                    Uzair's App
                </div>

                {/* Placeholder to balance layout */}
                <div className="w-8"></div>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="lg:hidden mt-2 bg-indigo-800 rounded-xl shadow-md w-full max-w-[469px] mx-auto flex flex-col items-center py-4 space-y-3">
                    <div className="text-white text-lg font-medium hover:text-teal-400 cursor-pointer">
                        Home
                    </div>
                    <div className="text-white text-lg font-medium hover:text-teal-400 cursor-pointer">
                        Features
                    </div>
                    <div className="text-white text-lg font-medium hover:text-teal-400 cursor-pointer">
                        Pricing
                    </div>
                    <div className="text-white text-lg font-medium hover:text-teal-400 cursor-pointer">
                        Blog
                    </div>
                    <div className="flex space-x-6 text-white text-lg font-normal mt-2">
                        <div className="font-['FontAwesome'] hover:text-teal-400 cursor-pointer"></div>
                        <div className="font-['FontAwesome'] hover:text-teal-400 cursor-pointer"></div>
                    </div>
                </div>
            )}

            {/* Desktop Menu (original design) */}
            <div className="hidden lg:block relative w-[469px] h-6 mx-auto mt-[85px]">
                <div className="absolute left-0 top-0 text-white text-lg font-medium font-['DM_Sans'] leading-6 opacity-30">
                    Home
                </div>
                <div className="absolute left-[94px] top-0 text-white text-lg font-medium font-['DM_Sans'] leading-6">
                    Features
                </div>
                <div className="absolute left-[212px] top-0 text-white text-lg font-medium font-['DM_Sans'] leading-6">
                    Pricing
                </div>
                <div className="absolute left-[313px] top-0 text-white text-lg font-medium font-['DM_Sans'] leading-6">
                    Blog
                </div>
                <div className="absolute left-[392px] top-[3.2px] text-white text-lg font-normal font-['FontAwesome']">
                    
                </div>
                <div className="absolute left-[448px] top-[3.2px] text-white text-lg font-normal font-['FontAwesome']">
                    
                </div>
            </div>
        </nav>
    );
}
