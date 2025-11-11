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
                Mobile: {'max': '640px'},      // less than 640px
                Tablet: {'max': '768px'},      // up to 786px
                Laptop: '1024px',              // default min-width behavior
            },
        },
    },
    plugins: [],
};
