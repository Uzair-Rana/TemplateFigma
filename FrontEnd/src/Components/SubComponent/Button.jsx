// src/Components/Subcomponents/Button.jsx
export default function Button({ children, onClick }) {
    return (
        <div className="mb-[163px]">
            <button
                onClick={onClick}
                className="px-[41px] py-[16px] bg-blue-700 text-white text-lg font-semibold rounded-full shadow-soft hover:shadow-glow transition-all duration-300"
            >
                {children}
            </button>
        </div>
    );
}
