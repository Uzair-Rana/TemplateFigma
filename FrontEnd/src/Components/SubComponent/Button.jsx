import React from "react";
import globalTailwindConfig from "../../config/globalTailwindConfig";

export default function Button({ children, onClick }) {
    const c = globalTailwindConfig.buttonSection;

    return (
        <div
            className={`${c.wrapper} 
      Mobile:flex Mobile:justify-center Mobile:items-center 
      Tablet:flex Tablet:justify-center Tablet:items-center`}
        >
            <button
                onClick={onClick}
                className={`${c.button} 
        Mobile:text-sm Tablet:text-base 
        Mobile:px-4 Mobile:py-2 Tablet:px-5 Tablet:py-2.5 
        Mobile:w-auto Tablet:w-auto`}
            >
                {children}
            </button>
        </div>
    );
}
