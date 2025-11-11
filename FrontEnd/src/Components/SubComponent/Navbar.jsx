import React from "react";
import globalTailwindConfig from "../../config/globalTailwindConfig";

export default function Navbar() {
    const c = globalTailwindConfig.navbarSection;

    return (
        <nav className={c.container}>
            <div className={c.menuWrapper}>
                {/* Home (Inactive) */}
                <div className={c.menuItemInactive} style={{ left: 0, top: 0 }}>
                    Home
                </div>

                {/* Features */}
                <div className={c.menuItem} style={{ left: 94, top: 0 }}>
                    Features
                </div>

                {/* Pricing */}
                <div className={c.menuItem} style={{ left: 212, top: 0 }}>
                    Pricing
                </div>

                {/* Blog */}
                <div className={c.menuItem} style={{ left: 313, top: 0 }}>
                    Blog
                </div>

                {/* Icons */}
                <div className={c.icon} style={{ left: 392, top: 3.2 }}>
                    
                </div>
                <div className={c.icon} style={{ left: 448, top: 3.2 }}>
                    
                </div>
            </div>
        </nav>
    );
}
