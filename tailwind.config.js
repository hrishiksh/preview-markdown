module.exports = {
	purge: [],
	darkMode: "media", // or 'media' or 'class'
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
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
