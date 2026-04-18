/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				midnight: '#0B1220',
				mist: '#DDE9F6',
				cyan: '#6BE3FF',
				sunrise: '#FF9A5A',
				pine: '#1F6C5A',
			},
			fontFamily: {
				display: ['Space Grotesk', 'sans-serif'],
				body: ['Manrope', 'sans-serif'],
			},
			boxShadow: {
				glow: '0 20px 45px rgba(15, 24, 43, 0.35)',
			},
			backgroundImage: {
				grain: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.06) 1px, transparent 0)',
			},
		},
	},
	plugins: [],
};
