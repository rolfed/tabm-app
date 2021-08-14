const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			red: {
				100: '#F23207',
				200: '#A62103'
			},
			yellow: {
				100: '#F2CD13',
				200: '#F2620F'
			},
			pink: '#F21667',
			white: colors.white,
			black: colors.black,
			gray: colors.gray,
			transparent: 'transparent'
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Bodoni Moda', 'serif']
		},
		minHeight: {
		    '0': '0',
		    '1/4': '25%',
		    '1/2': '50%',
		    '3/4': '75%',
		    'full': '100%'
		},
		extend: {}
	},
	plugins: []
};

module.exports = config;
