import React from "react";
import globalTailwindConfig from "../../Config/globalTailwindConfig";

const TestimonialCard = ({ testimonial, client_name, avatar_url }) => {
    const c = globalTailwindConfig.testimonialSection;

    return (
        <div className={c.cardWrapper}>
            {/* Background card */}
            <div className={c.cardBorder} />

            {/* Avatar */}
            <img src={avatar_url} alt={client_name} className={c.avatar} />

            {/* Testimonial text */}
            <p className={c.testimonialText}>{testimonial}</p>

            {/* Client name */}
            <span className={c.clientName}>{client_name}</span>
        </div>
    );
};

export default TestimonialCard;
