const pdfTailwindStyles = {
	"bg-gray-100": {
		background: "#e6e6e6",
	},
	"text-base": {
		fontSize: 12,
	},
	"text-lg": {
		fontSize: 14,
	},
	"text-xl": {
		fontSize: 16,
	},
	"text-2xl": {
		fontSize: 18,
	},
	"text-3xl": {
		fontSize: 24,
	},
	"text-4xl": {
		fontSize: 26,
	},
	"font-normal": {
		bold: false,
	},
	"font-medium": {
		bold: false,
	},
	"font-bold": {
		bold: true,
	},
	"font-Inter": {
		font: "Inter",
	},
	"font-mono": {
		font: "Inconsolata",
		bold: false,
	},
	"p-2": {
		margin: [0, 5, 0, 5],
	},
	"py-4": {
		margin: [0, 10, 0, 10],
	},
	"py-2": {
		margin: [0, 5, 0, 5],
	},
	"leading-loose": {
		lineHeight: 2,
	},
	"w-full": {
		margin: [0, 0, 0, 0],
	},
};

export default pdfTailwindStyles;

// font: string: name of the font
// fontSize: number: size of the font in pt
// fontFeatures: string[]: array of advanced typographic features supported in TTF fonts (supported features depend on font file)
// lineHeight: number: the line height (default: 1)
// bold: boolean: whether to use bold text (default: false)
// italics: boolean: whether to use italic text (default: false)
// alignment: string: (‘left’ or ‘center’ or ‘right’) the alignment of the text
// characterSpacing: number: size of the letter spacing in pt
// color: string: the color of the text (color name e.g., ‘blue’ or hexadecimal color e.g., ‘#ff5500’)
// background: string the background color of the text
// markerColor: string: the color of the bullets in a buletted list
// decoration: string: the text decoration to apply (‘underline’ or ‘lineThrough’ or ‘overline’)
// decorationStyle: string: the style of the text decoration (‘dashed’ or ‘dotted’ or ‘double’ or ‘wavy’)
// decorationColor: string: the color of the text decoration, see color
