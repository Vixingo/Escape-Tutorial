/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                hero_img: "url(/images/hero1.png)",
                stuck_bg: "url(/images/helloop.png)",
                exp: "url(/images/exp.png)",
                demand: "url(/images/demand.png)",
                under_g:
                    "linear-gradient(90deg, #7C3AED 1.61%, rgba(58, 255, 184, 0.6) 152.75%)",
                lines: "url(/images/lines.png)",
                way: "url(/images/way.png)",
            },
        },
    },
    plugins: [],
};
