/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				opensans: ['var(--font-openSans)'],
				inter: ['var(--font-inter)'],
			},
			colors: {
				'miami-pink': '#f765b8',
			},
		},
	},
	plugins: [],
};
