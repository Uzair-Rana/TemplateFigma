import React from 'react';

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
    <div className="p-[40px] rounded-2xl transition duration-300 ease-in-out flex flex-row gap-[30px] border border-[#ffffff] min-h-[220px] md:min-h-[230px]">
        <img
            className="w-16 h-16 md:w-20 md:h-20 rounded-[10px] object-cover flex-shrink-0"
            src={avatarUrl}
            alt={`Avatar of ${clientName}`}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = Client1; // fallback
            }}
        />

        {/* Client Info (Bottom Section) - Parent div for 2 sub-divs */}
        <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col h-[179px]">
                {/* Testimonial Text */}
                <p className="text-white text-lg md:text-xl font-medium font-['DM_Sans'] leading-relaxed mb-4">
                    {testimonial}
                </p>
                <span className="text-white font-bold font-['DM_Sans'] uppercase leading-6 tracking-wider text-base md:text-lg">
                    {clientName}
                </span>
            </div>
        </div>
    </div>
);

// --- Main Component ---
const App = () => {
    return (
        <div className="min-h-screen bg-[#352F7A] font-sans py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <div className="mb-16 text-center md:text-left">
                    <h1 className="text-white text-4xl sm:text-5xl font-extrabold font-['DM_Sans'] leading-tight">
                        Our Happy Clients
                    </h1>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
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

export default App;
