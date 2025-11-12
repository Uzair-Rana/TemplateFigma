import React from "react";
import globalTailwindConfig from "../../config/globalTailwindConfig";

export default function Button({ children, onClick }) {
    const c = globalTailwindConfig.buttonSection;

    return (
        <div className={c.wrapper}>
            <button onClick={onClick} className={c.button}>
                {children}
            </button>
        </div>
    );
}
