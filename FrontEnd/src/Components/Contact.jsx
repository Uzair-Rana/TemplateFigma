import React from "react";
import globalTailwindConfig from "../config/globalTailwindConfig";

const ContactImage = "./assets/ContactImage.png";

export default function Contact() {
    const c = globalTailwindConfig.contactSection;

    return (
        <div className={c.container}>
            <img
                src={ContactImage}
                alt="Contact Background"
                className={c.backgroundImage}
                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
            />

            <div className={c.contentWrapper}>
                {/* ---------------- LEFT SIDE ---------------- */}
                <div className={c.leftSide}>
                    <h2 className={c.heading}>Let’s Keep in Touch</h2>
                    <p className={c.paragraph}>
                        We have created a new product that will help designers, developers
                        and companies create websites for their startups quickly and easily.
                    </p>

                    <div className="flex flex-col space-y-8 mt-6">
                        <div className={c.infoItem}>
                            <span className={c.infoIcon}>📞</span>
                            <span className={c.infoText}>+1 555 505 5050</span>
                        </div>

                        <div className={c.infoItem}>
                            <span className={c.infoIcon}>✉️</span>
                            <span className={c.infoText}>info@designmodo.com</span>
                        </div>

                        <div className={c.infoItem + " items-start"}>
                            <span className={c.infoIcon + " mt-1"}>📍</span>
                            <span className={c.infoTextSmall}>
                                San Francisco, CA 560 Bush St & 20th Ave, Apt 5, San Francisco, 230909
                            </span>
                        </div>
                    </div>
                </div>

                {/* ---------------- RIGHT SIDE (FORM) ---------------- */}
                <div className={c.rightSide}>
                    {/* Row 1: Name + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className={c.inputGroup}>
                            <label className={c.label}>Your Name</label>
                            <input type="text" placeholder="First name" className={c.input} />
                        </div>

                        <div className={c.inputGroup}>
                            <label className={c.label}>Budget</label>
                            <input type="text" placeholder="$500" className={c.input} />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className={c.inputGroup}>
                        <label className={c.label}>Input Field</label>
                        <input type="email" placeholder="name@mail.com" className={c.input} />
                    </div>

                    {/* Message Field */}
                    <div className={c.inputGroup}>
                        <label className={c.label}>Your Message</label>
                        <textarea placeholder="Message" className={c.textarea} />
                    </div>

                    {/* Checkbox + Button */}
                    <div className={c.checkboxWrapper}>
                        <label className={c.checkboxLabel}>
                            <input type="checkbox" className={c.checkboxInput} />
                            <span className={c.checkboxText}>Send me a copy</span>
                        </label>

                        <button className={c.button}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
