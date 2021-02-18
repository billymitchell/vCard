
module.exports = {
    // Removes unused styles
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}