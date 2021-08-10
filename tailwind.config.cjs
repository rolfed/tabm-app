const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {},
		colors: {
			red: {
				100: '#F23207',
				200: '#A62103'
			},
			yellow: {
				100: '#F2CD13',
				200: '#F2620F'
			},
			pink: '#F21667'
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Bodoni Moda', 'serif']
		},
		extend: {
		}
	},
	plugins: []
};

module.exports = config;
