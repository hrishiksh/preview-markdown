import { saveAs } from "file-saver";

const saveMarkdownFile = markdownString => {
	const blob = new Blob([markdownString], {
		type: "text/markdown;charset=utf-8",
	});
	saveAs(blob, "preview-markdown.md");
};

export { saveMarkdownFile };
