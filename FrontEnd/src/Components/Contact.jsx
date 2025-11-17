import React, { useState } from "react";
import axios from "axios";  // <-- added axios
import globalTailwindConfig from "../config/globalTailwindConfig";

const ContactImage = "./assets/ContactImage.png";

export default function Contact() {
    const c = globalTailwindConfig.contactSection;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        budget: "",
        message: "",
        send_copy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:8000/api/user/contact/",
                formData
            );

            alert(res.data.message);

            setFormData({
                name: "",
                email: "",
                budget: "",
                message: "",
                send_copy: false,
            });

        } catch (err) {
            console.error(err);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <div className={`${c.container} Tablet:py-8 Tablet:px-4 Mobile:py-4 Mobile:px-2`}>
            <img
                src={ContactImage}
                alt="Contact Background"
                className={c.backgroundImage}
                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
            />

            <div className={`${c.contentWrapper} Tablet:flex-col Tablet:items-start Tablet:gap-6 Tablet:px-4 Mobile:flex-col Mobile:items-start Mobile:gap-4 Mobile:px-2`}>

                {/* Left side text */}
                <div className={`${c.leftSide} Tablet:space-y-3 Tablet:pt-2 Tablet:max-w-full Mobile:space-y-2 Mobile:pt-1 Mobile:max-w-full`}>
                    <h2 className={`${c.heading} Tablet:text-2xl Tablet:leading-snug Mobile:text-xl Mobile:leading-snug`}>
                        Let’s Keep in Touch
                    </h2>
                    <p className={`${c.paragraph} Tablet:text-sm Mobile:text-xs`}>
                        We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className={`${c.rightSide} Tablet:w-full Tablet:mt-6 Mobile:w-full Mobile:mt-4`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className={c.inputGroup}>
                            <label className={c.label}>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="First name"
                                className={c.input}
                                required
                            />
                        </div>

                        <div className={c.inputGroup}>
                            <label className={c.label}>Budget</label>
                            <input
                                type="text"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="$500"
                                className={c.input}
                            />
                        </div>
                    </div>

                    <div className={c.inputGroup}>
                        <label className={c.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@mail.com"
                            className={c.input}
                            required
                        />
                    </div>

                    <div className={c.inputGroup}>
                        <label className={c.label}>Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className={c.textarea}
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className={c.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="send_copy"
                                checked={formData.send_copy}
                                onChange={handleChange}
                                className={c.checkboxInput}
                            />
                            <span className={c.checkboxText}>Send me a copy</span>
                        </label>

                        <button type="submit" className={`${c.button} w-full`}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
