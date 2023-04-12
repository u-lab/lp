/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['m-plus-2p', 'sans-serif'],
            },
            colors: {
                white: {
                    DEFAULT: '#F9FFFD',
                },
                black: {
                    DEFAULT: '#3C3C3C',
                },
                ulab: {
                    DEFAULT: '#3AB796',
                },
                yellow: {
                    DEFAULT: '#DFCE33',
                },
                pink: {
                    DEFAULT: '#C86C82',
                },
            },
        },
    },
    plugins: [],
};
