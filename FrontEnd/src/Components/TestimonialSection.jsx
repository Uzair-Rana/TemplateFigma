import React, { useEffect, useState } from "react";
import axios from "axios";
import globalTailwindConfig from "../config/globalTailwindConfig";

const TestimonialCard = ({ testimonial, client_name, avatar_url }) => {
    const c = globalTailwindConfig.testimonialSection;
    return (
        <div className={c.cardWrapper}>
            <div className={c.cardBorder} />
            <img src={avatar_url} alt={client_name} className={c.avatar} />
            <p className={c.testimonialText}>{testimonial}</p>
            <span className={c.clientName}>{client_name}</span>
        </div>
    );
};

const TestimonialSection = () => {
    const c = globalTailwindConfig.testimonialSection;
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/testimonials/")
            .then(res => setTestimonials(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={c.container}>
            <h1 className={c.heading}>Our Happy Clients</h1>
            <div className={c.testimonialGrid}>
                {testimonials.length > 0 ? (
                    testimonials.map((client, index) => (
                        <TestimonialCard key={index} {...client} />
                    ))
                ) : (
                    <p>Loading testimonials...</p>
                )}
            </div>
        </div>
    );
};

export default TestimonialSection;
