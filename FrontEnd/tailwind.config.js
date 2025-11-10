/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            // Mobile: Applies UP TO 640px. Use 'sm:' class.
            sm: { max: "640px" },

            // Tablet: Applies UP TO 1024px. Use 'md:' class.
            md: { max: "1024px" },

            // Desktop/Large: Applies FROM 1025px and up. Use 'lg:' class.
            lg: "1025px",
        },
        extend: {
            colors: {
                indigo: {
                    900: "#2F1893",
                },
                teal: {
                    400: "#00C9A7",
                },
            },
            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};