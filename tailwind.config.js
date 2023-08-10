/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: ["cupcake", "dark", "cmyk"],
    },
    theme: {
        extend: {
            fontFamily: {
                roboto: "'Roboto Slab', serif",
            },
        },
    },
    plugins: [],
}