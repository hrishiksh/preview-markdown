const handleH1 = (textAreaValue, setTextareaValue) => {
	setTextareaValue(textAreaValue + "\n# Type here ...");
};

const handleH2 = (textAreaValue, setTextareaValue) => {
	setTextareaValue(textAreaValue + "\n## Type here ...");
};
const handleH3 = (textAreaValue, setTextareaValue) => {
	setTextareaValue(textAreaValue + "\n### Type here ...");
};
const handleCode = (textAreaValue, setTextareaValue) => {
	setTextareaValue(textAreaValue + "\n```language \n Type here ... \n ```");
};
const handleList = (textAreaValue, setTextareaValue) => {
	setTextareaValue(
		textAreaValue + "\n- list element 1 \n- list element 2 \n- list element 3"
	);
};

const handleimg = (textAreaValue, setTextareaValue) => {
	setTextareaValue(textAreaValue + "\n![Alt text here](image link ...)");
};

const handleTable = (textAreaValue, setTextareaValue) => {
	setTextareaValue(
		textAreaValue +
			"\n| Tables   |      Are      |  Cool |\n|----------|:-------------:|------:|\n| col 1 is |  left-aligned | $1600 |\n| col 2 is |    centered   |   $12 |\n| col 3 is | right-aligned |    $"
	);
};

const handleVideo = (textAreaValue, setTextareaValue) => {
	setTextareaValue(
		textAreaValue +
			"\n[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)"
	);
};

export {
	handleH1,
	handleH2,
	handleH3,
	handleCode,
	handleList,
	handleimg,
	handleTable,
	handleVideo,
};
