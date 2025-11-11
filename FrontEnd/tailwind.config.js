const theme = require('./tailwindTheme');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: theme.colors,
            spacing: theme.spacing,
            borderRadius: theme.borderRadius,
            fontSize: theme.fontSizes,
            lineHeight: theme.lineHeights,
            boxShadow: theme.boxShadow,
            opacity: theme.opacity,
            screens: {
                Mobile: '640px',   // smartphones
                Tablet: '768px',   // tablets/small laptops
                Laptop: '1024px',  // standard laptops/desktops
            },
        },

    },
    plugins: [],
};
