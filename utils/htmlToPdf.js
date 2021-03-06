import pdfMake from "pdfmake";
import pdfCustomFonts from "./vfs_fonts";
import style from "./pdfTailwindStyle";
import fonts from "./pdfFonts";

let stack = [];

const getAllChildes = element => {
	if (element.children.length === 0) {
		let actualClassList = [];

		for (let index = 0; index < element.classList.length; index++) {
			const classes = element.classList[index];
			actualClassList.push(classes);
		}

		stack.push({
			text: element.innerText,
			style: actualClassList,
		});
	} else if (element.localName === "ul") {
		const ul = [];
		for (let index = 0; index < element.children.length; index++) {
			let child = element.children[index];

			let actualClassList = [];

			for (let index = 0; index < child.classList.length; index++) {
				const classes = child.classList[index];
				actualClassList.push(classes);
			}

			ul.push({
				text: child.innerText,
				style: actualClassList,
			});
		}
		stack.push({ ul: ul });
	} else if (element.localName === "ol") {
		const ol = [];
		for (let index = 0; index < element.children.length; index++) {
			let child = element.children[index];

			let actualClassList = [];

			for (let index = 0; index < child.classList.length; index++) {
				const classes = child.classList[index];
				actualClassList.push(classes);
			}

			ol.push({
				text: child.innerText,
				style: actualClassList,
			});
		}
		stack.push({ ol: ol });
	} else {
		for (let index = 0; index < element.children.length; index++) {
			getAllChildes(element.children[index]);
			for (let index = 0; index < element.classList.length; index++) {
				const classes = element.classList[index];
				stack.slice(-1)[0].style?.unshift(classes);
			}
		}
	}
};

const compileHtmltoPdf = htmldoc => {
	stack = [];

	getAllChildes(htmldoc);

	var dd = {
		footer: {
			svg: `<svg width="117" height="30" viewBox="0 0 117 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.275 23V7.425H6.5C7.68333 7.425 8.65 7.63333 9.4 8.05C10.1667 8.45 10.7333 8.99167 11.1 9.675C11.4667 10.3583 11.65 11.1083 11.65 11.925C11.65 12.7417 11.4667 13.4917 11.1 14.175C10.75 14.8417 10.2 15.375 9.45 15.775C8.71667 16.1583 7.775 16.35 6.625 16.35H3.8V23H1.275ZM3.8 14.275H6.425C7.34167 14.275 8.01667 14.0583 8.45 13.625C8.9 13.1917 9.125 12.6333 9.125 11.95C9.125 11.2833 8.9 10.725 8.45 10.275C8 9.825 7.33333 9.6 6.45 9.6H3.8V14.275ZM13.35 11.425H15.925L15.9 13.4C16.2167 12.7 16.6917 12.15 17.325 11.75C17.9583 11.35 18.6333 11.15 19.35 11.15C20.6 11.15 21.6417 11.5833 22.475 12.45L21.425 14.5L21.325 14.725L21.125 14.625C21.075 14.4917 21.025 14.3583 20.975 14.225C20.925 14.0917 20.8 13.9333 20.6 13.75C20.1 13.4167 19.575 13.25 19.025 13.25C18.4917 13.25 17.9833 13.375 17.5 13.625C17.0167 13.875 16.625 14.275 16.325 14.825C16.025 15.3583 15.875 16.0583 15.875 16.925V23.025H13.35V11.425ZM28.525 23.275C27.4083 23.275 26.4167 23.0417 25.55 22.575C24.7 22.1083 24.025 21.4333 23.525 20.55C23.0417 19.65 22.8 18.5583 22.8 17.275C22.8 15.9917 23.0417 14.8917 23.525 13.975C24.0083 13.0583 24.6583 12.3583 25.475 11.875C26.2917 11.3917 27.2083 11.15 28.225 11.15C29.1083 11.15 29.9167 11.3583 30.65 11.775C31.3833 12.1917 31.9667 12.8167 32.4 13.65C32.85 14.4667 33.075 15.4917 33.075 16.725C33.075 17.125 33.0667 17.4917 33.05 17.825H25.2C25.2333 18.625 25.4167 19.2833 25.75 19.8C26.0833 20.3167 26.5 20.7 27 20.95C27.5167 21.1833 28.0583 21.3 28.625 21.3C29.175 21.3 29.6833 21.2167 30.15 21.05C30.6333 20.8667 31.0667 20.5667 31.45 20.15L32.75 21.425C32.2167 22.0583 31.5917 22.525 30.875 22.825C30.175 23.125 29.3917 23.275 28.525 23.275ZM25.25 15.95H30.65C30.65 15.0333 30.4167 14.325 29.95 13.825C29.5 13.325 28.8833 13.075 28.1 13.075C27.4 13.075 26.7833 13.3083 26.25 13.775C25.7167 14.2417 25.3833 14.9667 25.25 15.95ZM37.85 23L33.45 11.425H36.025L39.05 19.65L40.575 16.05C40.9083 15.2 41.1833 14.3917 41.4 13.625C41.6167 12.8583 41.7583 12.125 41.825 11.425H44.15C44.05 12.1583 43.8583 12.9417 43.575 13.775C43.3083 14.5917 42.9917 15.4417 42.625 16.325L39.825 23H37.85ZM45.75 23V21.025H48.625V13.4H45.875V11.425H51.125V21.025H53.75V23H45.75ZM49.725 9.35C49.275 9.35 48.8917 9.2 48.575 8.9C48.275 8.58333 48.125 8.21667 48.125 7.8C48.125 7.35 48.275 6.975 48.575 6.675C48.875 6.375 49.2583 6.225 49.725 6.225C50.1583 6.225 50.5333 6.38333 50.85 6.7C51.1833 7 51.35 7.36667 51.35 7.8C51.35 8.21667 51.1833 8.58333 50.85 8.9C50.5333 9.2 50.1583 9.35 49.725 9.35ZM61.15 23.275C60.0333 23.275 59.0417 23.0417 58.175 22.575C57.325 22.1083 56.65 21.4333 56.15 20.55C55.6667 19.65 55.425 18.5583 55.425 17.275C55.425 15.9917 55.6667 14.8917 56.15 13.975C56.6333 13.0583 57.2833 12.3583 58.1 11.875C58.9167 11.3917 59.8333 11.15 60.85 11.15C61.7333 11.15 62.5417 11.3583 63.275 11.775C64.0083 12.1917 64.5917 12.8167 65.025 13.65C65.475 14.4667 65.7 15.4917 65.7 16.725C65.7 17.125 65.6917 17.4917 65.675 17.825H57.825C57.8583 18.625 58.0417 19.2833 58.375 19.8C58.7083 20.3167 59.125 20.7 59.625 20.95C60.1417 21.1833 60.6833 21.3 61.25 21.3C61.8 21.3 62.3083 21.2167 62.775 21.05C63.2583 20.8667 63.6917 20.5667 64.075 20.15L65.375 21.425C64.8417 22.0583 64.2167 22.525 63.5 22.825C62.8 23.125 62.0167 23.275 61.15 23.275ZM57.875 15.95H63.275C63.275 15.0333 63.0417 14.325 62.575 13.825C62.125 13.325 61.5083 13.075 60.725 13.075C60.025 13.075 59.4083 13.3083 58.875 13.775C58.3417 14.2417 58.0083 14.9667 57.875 15.95ZM67.725 23.025L65.55 11.425H67.675L69.175 19.8L70.95 12.65H72.3L74.4 19.75C74.5667 18.5333 74.7 17.5083 74.8 16.675C74.9167 15.8417 75 15.15 75.05 14.6C75.1167 14.05 75.1583 13.575 75.175 13.175C75.1917 12.7583 75.2 12.3667 75.2 12V11.425H77.375C77.1917 13.3083 76.9333 15.25 76.6 17.25C76.2833 19.25 75.9417 21.175 75.575 23.025H73.375L71.6 16.35L69.925 23.025H67.725Z" fill="#2C3E50"/>
			<path d="M111.333 2H85.6667C83.6416 2 82 3.64162 82 5.66667V24C82 26.025 83.6416 27.6667 85.6667 27.6667H111.333C113.358 27.6667 115 26.025 115 24V5.66667C115 3.64162 113.358 2 111.333 2Z" stroke="#5B6CFF" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M89.3333 20.3333V9.33331L93 13L96.6667 9.33331V20.3333" stroke="#5B6CFF" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M105.833 20.3333V9.33331M102.167 16.6666L105.833 20.3333L109.5 16.6666H102.167Z" stroke="#5B6CFF" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`,
			width: 70,
			alignment: "right",
			margin: [0, 0, 20, 0],
		},
		content: stack,
		styles: style,
		defaultStyle: {
			font: "Inter",
		},
	};

	pdfMake.vfs = pdfCustomFonts.pdfMake.vfs;
	pdfMake.createPdf(dd, null, fonts).open();

	// pdfMake.createPdf(dd, null, fonts).download("PreviewMarkdown.pdf");
};

export default compileHtmltoPdf;
