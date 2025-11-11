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
    <div
        className={`
          ${twConfig.testimonialSection.card.container}
          Mobile:flex Mobile:flex-col Mobile:items-center Mobile:justify-center Mobile:text-center Mobile:p-4 Mobile:gap-4
          Tablet:p-[20px] Tablet:gap-[15px]
        `}
    >
        <img
            className={`
              ${twConfig.testimonialSection.card.avatar}
              Mobile:w-16 Mobile:h-16
              Tablet:w-14 Tablet:h-14
            `}
            src={avatarUrl}
            alt={`Avatar of ${clientName}`}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = Client1;
            }}
        />

        <div className={`
          ${twConfig.testimonialSection.card.contentWrapper}
          Mobile:flex Mobile:flex-col Mobile:items-center Mobile:justify-center Mobile:text-center
        `}>
            <span className={`
              ${twConfig.testimonialSection.card.clientName}
              Mobile:text-sm Mobile:mt-2
              Tablet:text-sm
            `}>
                {clientName}
            </span>
            <p className={`
              ${twConfig.testimonialSection.card.testimonialText}
              Mobile:text-xm Mobile:leading-snug Mobile:mt-2
              Tablet:text-base Tablet:leading-snug
            `}>
                {testimonial}
            </p>
        </div>
    </div>
);

// --- Main Testimonial Section Component ---
const TestimonialSection = () => {
    return (
        <div className={`
          ${twConfig.testimonialSection.container}
          Mobile:py-6 Mobile:px-2
          Tablet:py-12 Tablet:px-2
        `}>
            <div className={twConfig.testimonialSection.maxWrapper}>
                {/* Section Heading */}
                <div className={`
                  ${twConfig.testimonialSection.headingWrapper}
                  Mobile:mb-4
                  Tablet:mb-8
                `}>
                    <h1 className={`
                      ${twConfig.testimonialSection.heading}
                      Mobile:text-2xl
                      Tablet:text-3xl
                    `}>
                        Our Happy Clients
                    </h1>
                </div>

                {/* Testimonials Grid */}
                <div className={`
                  ${twConfig.testimonialSection.grid}
                  Mobile:grid-cols-1 Mobile:gap-4
                  Tablet:grid-cols-2 Tablet:gap-6
                `}>
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
