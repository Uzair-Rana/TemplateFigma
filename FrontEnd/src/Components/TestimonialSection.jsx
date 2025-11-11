// src/Components/TestimonialSection.jsx
import React from 'react';
import twConfig from '../config/globalTailwindConfig';

// --- ASSET IMPORTS ---
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";
import Client4 from "../assets/Client4.jpg";

const clientData = [
    {
        testimonial:
            "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support.",
        clientName: "NATHAN CURRAN",
        avatarUrl: Client1,
    },
    {
        testimonial:
            "As a business targeting high-net worth individuals, we were looking for a slick, cool and minimalistic design for our website.",
        clientName: "KAYLEY FRAME",
        avatarUrl: Client2,
    },
    {
        testimonial:
            "The most important part of the Startup Framework is the samples.",
        clientName: "GENO SOMERFIELD",
        avatarUrl: Client3,
    },
    {
        testimonial:
            "I've built my website with Startup just in one day, and it was ready-to-go.",
        clientName: "ALLAN RIM",
        avatarUrl: Client4,
    },
];

// --- Individual Testimonial Card Component ---
const TestimonialCard = ({ testimonial, clientName, avatarUrl }) => (
    <div className={twConfig.testimonialSection.card.container}>
        <img
            className={twConfig.testimonialSection.card.avatar}
            src={avatarUrl}
            alt={`Avatar of ${clientName}`}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = Client1; // fallback
            }}
        />

        <div className={twConfig.testimonialSection.card.contentWrapper}>
            <p className={twConfig.testimonialSection.card.testimonialText}>
                {testimonial}
            </p>
            <span className={twConfig.testimonialSection.card.clientName}>
        {clientName}
      </span>
        </div>
    </div>
);

// --- Main Testimonial Section Component ---
const TestimonialSection = () => {
    return (
        <div className={twConfig.testimonialSection.container}>
            <div className={twConfig.testimonialSection.maxWrapper}>
                {/* Section Heading */}
                <div className={twConfig.testimonialSection.headingWrapper}>
                    <h1 className={twConfig.testimonialSection.heading}>
                        Our Happy Clients
                    </h1>
                </div>

                {/* Testimonials Grid */}
                <div className={twConfig.testimonialSection.grid}>
                    {clientData.map((client, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={client.testimonial}
                            clientName={client.clientName}
                            avatarUrl={client.avatarUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
