import React, { useState } from "react";
import globalTailwindConfig from "../../config/globalTailwindConfig";

export default function Navbar() {
    const c = globalTailwindConfig.navbarSection;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={c.container}>
            {/* Desktop Navbar (Laptop and above) */}
            <div className="hidden Laptop:flex justify-start items-center relative">
                <div className={c.menuWrapper}>
                    <div className={c.menuItemInactive} style={{ left: 0, top: 0 }}>Home</div>
                    <div className={c.menuItem} style={{ left: 94, top: 0 }}>Features</div>
                    <div className={c.menuItem} style={{ left: 212, top: 0 }}>Pricing</div>
                    <div className={c.menuItem} style={{ left: 313, top: 0 }}>Blog</div>
                    <div className={c.icon} style={{ left: 392, top: 3.2 }}></div>
                    <div className={c.icon} style={{ left: 448, top: 3.2 }}></div>
                </div>
            </div>

            {/* Mobile & Tablet Top Bar with Hamburger */}
            <div className="flex justify-between items-center Laptop:hidden p-2">
                <div
                    className="text-white font-bold text-base text-center"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        width: "70%",
                        borderRadius: "0.5rem",
                        padding: "0.25rem 0.75rem",
                        margin: "0 auto",
                        fontSize: "0.9rem",
                    }}
                >
                    Forget_App
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
                >
                    <span
                        className="block w-6 h-[2px] bg-white transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg) translateY(4px)" : "none" }}
                    ></span>
                    <span
                        className="block w-6 h-[2px] bg-white transition-opacity duration-300"
                        style={{ opacity: isOpen ? 0 : 1 }}
                    ></span>
                    <span
                        className="block w-6 h-[2px] bg-white transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(-45deg) translateY(-4px)" : "none" }}
                    ></span>
                </button>
            </div>

            {/* Popup Menu for Mobile/Tablet */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex justify-center items-start pt-16"
                    style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                    onClick={() => setIsOpen(false)}
                >
                    {/* Menu Items */}
                    <div
                        className="flex flex-col items-center justify-center space-y-4 text-white text-lg font-medium bg-black bg-opacity-80 rounded-lg p-3 w-10/12 max-w-xs"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div>Home</div>
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>Blog</div>
                        <div className="flex space-x-4 mt-2 text-xl">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
