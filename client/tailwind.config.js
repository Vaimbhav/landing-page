/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				ink: '#0A0A0A',
				paper: '#FAFAF7',
				stone: '#E8E4D9',
				ash: '#1A1A1A',
				dim: '#8A8A85',
			},
			fontFamily: {
				serif: ['Fraunces', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			letterSpacing: {
				widest: '0.22em',
			},
		},
	},
	plugins: [],
};
