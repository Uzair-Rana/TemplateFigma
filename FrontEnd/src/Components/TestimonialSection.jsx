import React from "react";
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";
import Client4 from "../assets/Client4.jpg";
import globalTailwindConfig from "../config/globalTailwindConfig";

const clientData = [
    {
        testimonial:
            "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
        clientName: "RAYHAN CURRAN",
        avatarUrl: Client1,
    },
    {
        testimonial:
            "As a business targeting high net worth individuals, we were looking for a slick, cool and minimalistic design for our website",
        clientName: "KAYLEY FRAME",
        avatarUrl: Client2,
    },
    {
        testimonial:
            "The most important part of the Startup Framework is the samples",
        clientName: "GENE WHITFIELD",
        avatarUrl: Client3,
    },
    {
        testimonial: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
        clientName: "ALLAN KIM",
        avatarUrl: Client4,
    },
];

const TestimonialCard = ({ testimonial, clientName, avatarUrl }) => {
    const c = globalTailwindConfig.testimonialSection;

    return (
        <div className={c.cardWrapper}>
            <div className={c.cardBorder} />
            <img src={avatarUrl} alt={clientName} className={c.avatar} />
            <p className={c.testimonialText}>{testimonial}</p>
            <span className={c.clientName}>{clientName}</span>
        </div>
    );
};

const TestimonialSection = () => {
    const c = globalTailwindConfig.testimonialSection;

    return (
        <div className={c.container}>
            <h1 className={c.heading}>Our Happy Clients</h1>

            <div className={c.topRow}>
                <TestimonialCard {...clientData[0]} />
                <TestimonialCard {...clientData[1]} />
            </div>

            <div className={c.bottomRow}>
                <TestimonialCard {...clientData[2]} />
                <TestimonialCard {...clientData[3]} />
            </div>
        </div>
    );
};

// ✅ Default export is essential to fix the import error
export default TestimonialSection;
