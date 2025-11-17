import React, { useEffect, useState } from "react";
import axios from "axios";
import TestimonialCard from "./SubComponent/TestimonialCard";
import globalTailwindConfig from "../Config/globalTailwindConfig";

// Import local images
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";
import Client4 from "../assets/Client4.jpg";

const TestimonialSection = () => {
    const c = globalTailwindConfig.testimonialSection;
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/user/testimonials/")
            .then((res) => setTestimonials(res.data))
            .catch((err) => console.error("Error fetching testimonials:", err));
    }, []);

    // Map avatars to first 4 testimonials
    const avatars = [Client1, Client2, Client3, Client4];

    const cardsToRender =
        testimonials.length > 0
            ? testimonials.slice(0, 4).map((client, index) => ({
                ...client,
                avatar_url: avatars[index] || "https://placehold.co/70x70",
            }))
            : Array.from({ length: 4 }).map((_, index) => ({
                testimonial: "Loading testimonial...",
                client_name: "Client Name",
                avatar_url: avatars[index] || "https://placehold.co/70x70",
            }));

    // Split into rows of 2 cards
    const rows = [];
    for (let i = 0; i < cardsToRender.length; i += 2) {
        rows.push(cardsToRender.slice(i, i + 2));
    }

    return (
        <div className={c.container}>
            <h1 className={c.heading}>Our Happy Clients</h1>

            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 mb-6"
                >
                    {row.map((client, index) => (
                        <TestimonialCard key={index} {...client} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TestimonialSection;
