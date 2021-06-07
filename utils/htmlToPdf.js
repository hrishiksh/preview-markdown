import pdfMake from "pdfmake";
import pdfCustomFonts from "./vfs_fonts";
import style from "./pdfTailwindStyle";
import fonts from "./pdfFonts";

var dd = {
	content: [],
	styles: style,
};

const compileHtmltoPdf = htmldoc => {
	var dd = {
		content: [],
		styles: style,
	};

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

	pdfMake.vfs = pdfCustomFonts.pdfMake.vfs;
	pdfMake.createPdf(dd, null, fonts).open();
};

export default compileHtmltoPdf;
