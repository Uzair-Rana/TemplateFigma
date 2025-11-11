import React from "react";
import globalTailwindConfig from "../config/globalTailwindConfig";

const ContactImage = "./assets/ContactImage.png";

export default function Contact() {
    const c = globalTailwindConfig.contactSection;

    return (
        <div
            className={`
        ${c.container} 
        Tablet:py-8 Tablet:px-4
        Mobile:py-4 Mobile:px-2
      `}
        >
            <img
                src={ContactImage}
                alt="Contact Background"
                className={c.backgroundImage}
                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
            />

            <div
                className={`
          ${c.contentWrapper} 
          Tablet:flex-col Tablet:items-start Tablet:gap-6 Tablet:px-4
          Mobile:flex-col Mobile:items-start Mobile:gap-4 Mobile:px-2
        `}
            >
                {/* ---------------- LEFT SIDE ---------------- */}
                <div
                    className={`
            ${c.leftSide} 
            Tablet:space-y-3 Tablet:pt-2 Tablet:max-w-full
            Mobile:space-y-2 Mobile:pt-1 Mobile:max-w-full
          `}
                >
                    <h2
                        className={`
              ${c.heading} 
              Tablet:text-2xl Tablet:leading-snug Tablet:max-w-full
              Mobile:text-xl Mobile:leading-snug Mobile:max-w-full
            `}
                    >
                        Let’s Keep in Touch
                    </h2>
                    <p
                        className={`
              ${c.paragraph} 
              Tablet:text-sm Tablet:leading-snug Tablet:max-w-full
              Mobile:text-xs Mobile:leading-snug Mobile:max-w-full
            `}
                    >
                        We have created a new product that will help designers, developers
                        and companies create websites for their startups quickly and easily.
                    </p>

                    <div className="flex flex-col Tablet:flex-col Mobile:flex-col space-y-2">
                        <div className={`${c.infoItem} flex items-center`}>
                            <span className={c.infoIcon}>📞</span>
                            <span className={` ${c.infoText} Tablet:text-sm Mobile:text-xs ml-2`}>
                                +1 555 505 5050
                            </span>
                        </div>

                        <div className={`${c.infoItem} flex items-center`}>
                            <span className={c.infoIcon}>✉️</span>
                            <span className={` ${c.infoText} Tablet:text-sm Mobile:text-xs ml-2`}>
                                info@designmodo.com
                            </span>
                        </div>

                        <div className={`${c.infoItem} flex items-start`}>
                            <span className={`${c.infoIcon} mt-1`}>📍</span>
                            <span
                                className={`
                  ${c.infoTextSmall} 
                  Tablet:text-sm Tablet:leading-snug Tablet:max-w-full
                  Mobile:text-xs Mobile:leading-snug Mobile:max-w-full ml-2
                `}
                            >
                                San Francisco, CA 560 Bush St & 20th Ave, Apt 5, San Francisco, 230909
                            </span>
                        </div>
                    </div>
                </div>

                {/* ---------------- RIGHT SIDE (FORM) ---------------- */}
                <div
                    className={`
            ${c.rightSide} 
            Tablet:w-full Tablet:mt-6 Tablet:px-2
            Mobile:w-full Mobile:mt-4 Mobile:px-1
          `}
                >
                    {/* Row 1: Name + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 Tablet:gap-3 Mobile:gap-2">
                        <div className={c.inputGroup}>
                            <label className={c.label}>Your Name</label>
                            <input
                                type="text"
                                placeholder="First name"
                                className={`${c.input} Tablet:text-sm Mobile:text-xs Tablet:px-3 Mobile:px-2 Tablet:py-2 Mobile:py-1`}
                            />
                        </div>

                        <div className={c.inputGroup}>
                            <label className={c.label}>Budget</label>
                            <input
                                type="text"
                                placeholder="$500"
                                className={`${c.input} Tablet:text-sm Mobile:text-xs Tablet:px-3 Mobile:px-2 Tablet:py-2 Mobile:py-1`}
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className={c.inputGroup}>
                        <label className={c.label}>Email</label>
                        <input
                            type="email"
                            placeholder="name@mail.com"
                            className={`${c.input} Tablet:text-sm Mobile:text-xs Tablet:px-3 Mobile:px-2 Tablet:py-2 Mobile:py-1`}
                        />
                    </div>

                    {/* Message Field */}
                    <div className={c.inputGroup}>
                        <label className={c.label}>Your Message</label>
                        <textarea
                            placeholder="Message"
                            className={`${c.textarea} Tablet:text-sm Mobile:text-xs Tablet:px-3 Mobile:px-2 Tablet:py-2 Mobile:py-1`}
                        />
                    </div>

                    {/* Checkbox + Button */}
                    <div className={`${c.checkboxWrapper} flex flex-col space-y-2`}>
                        <label className={c.checkboxLabel}>
                            <input type="checkbox" className={c.checkboxInput} />
                            <span className={` ${c.checkboxText} Tablet:text-sm Mobile:text-xs ml-2`}>Send me a copy</span>
                        </label>

                        <button
                            className={`${c.button} Tablet:text-sm Tablet:py-2 Mobile:text-xs Mobile:py-1 w-full`}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
