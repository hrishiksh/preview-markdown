module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				Inter: [
					"Inter",
					"sans-serif",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
				],
				github: [
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Helvetica",
					"Arial",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
				],
			},
			colors: {
				twitter: "#1da1f2",
				bluePrimary: "#5B6CFF",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
