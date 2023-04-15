/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'marker': ['Permanent Marker', 'cursive'],
			},
			colors: {
				gold: '#B38922',
				blue: '#0099CB',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
