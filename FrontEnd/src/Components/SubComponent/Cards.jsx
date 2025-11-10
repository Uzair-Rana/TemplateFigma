// src/Components/Subcomponents/Card.jsx
export default function Card({ icon, title, description }) {
    return (
        <div className="flex flex-col justify-start items-start bg-transparent p-6 text-white">
            {/* Icon */}
            <div className="text-3xl mb-7">
                {icon === "copy" ? "📄" : "💎"}
            </div>

            {/* Title — single line, balanced size */}
            <h3 className="text-[18px] font-semibold leading-tight mb-3 whitespace-nowrap">
                {title}
            </h3>

            {/* Description — proportionally spaced text */}
            <p className="text-[15px] leading-[26px] opacity-90 max-w-sm">
                {description}
            </p>
        </div>
    );
}
