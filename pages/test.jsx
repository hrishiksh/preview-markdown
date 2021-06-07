import pdfMake from "pdfmake";
import pdfFonts from "../utils/vfs_fonts";
import style from "../utils/pdfTailwindStyle";

const fonts = {
	Inconsolata: {
		normal: "Inconsolata.ttf",
	},
	Roboto: {
		normal:
			"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
		bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
		italics:
			"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
		bolditalics:
			"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
	},
};

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

var dd = {
	content: [],
	styles: style,
};

const htmlToPdfParser = htmldoc => {
	const childArray = htmldoc.children;
	console.log(childArray);
	const objlist = [];

	childArray.forEach(item => {
		console.log(item.className);

		if ((item.className = "")) {
			dd.content.push(item.innerText);
		} else {
			const classes = item.className.split[" "];
			let newObj = {
				text: item.innerText,
				style: [classes],
			};
			dd.content.push(newObj);
		}
	});
};

const compileHtmltoPdf = htmldoc => {
	const child = htmldoc.children;
	console.log(child);

	for (let index = 0; index < child.length; index++) {
		const element = child[index];

		const text = element.innerText;
		let actualClassList = [];

		for (let index = 0; index < element.classList.length; index++) {
			console.log(element.classList[index]);
			const classes = element.classList[index];
			actualClassList.push(classes);
		}

		dd.content.push({
			text: text,
			style: actualClassList,
		});
	}
};

const Test = () => {
	const handleBtnClick = () => {
		const section = document.querySelector("section");

		compileHtmltoPdf(section);

		console.log(dd);
		pdfMake.vfs = pdfFonts.pdfMake.vfs;
		pdfMake.createPdf(dd, null, fonts).open();
	};

	return (
		<>
			<section>
				<h1 className="text-4xl font-bold bg-gray-100">
					A very simple webpage. This is an "h1" level header.
				</h1>

				<h2 className="text-3xl font-bold">This is a level h2 header.</h2>

				<h6 className="text-2xl font-bold">
					This is a level h6 header. Pretty small!
				</h6>

				<p className="text-xl font-bold p-2">This is a standard paragraph.</p>

				<p className="text-lg font-normal p-2">
					Now I've aligned it in the center of the screen.
				</p>

				<p className="p-2">Now aligned to the right</p>

				<p className="p-2">
					<b>Bold text</b>
				</p>
				<pre className="bg-gray-100 font-mono">
					<code className="font-mono bg-gray-100">print("hello world");</code>
				</pre>

				<p>
					<strong>Strongly emphasized text</strong> Can you tell the difference
					vs. bold?
				</p>

				<p>
					<i>Italics</i>
				</p>

				<p>
					<em>Emphasized text</em> Just like Italics!
				</p>

				<h2>How about a nice ordered list!</h2>

				<h2>Unordered list</h2>
				<p>
					And finally, how about some <a href="http://www.yahoo.com/">Links?</a>
				</p>

				<p>
					Remember, you can view the HTMl code from this or any other page by
					using the "View Page Source" command of your browser.
				</p>
			</section>
			<h1 className="font-serif text-xl text-red-500">This is a tweeter btn</h1>

			<button onClick={handleBtnClick}>save</button>
		</>
	);
};

export default Test;
