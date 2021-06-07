const handlefileUpload = (file, setTextAreaValue) => {
	const reader = new FileReader();

	if (file.type.split("/")[0] === "text") {
		reader.onload = function (e) {
			setTextAreaValue(e.target.result);
		};

		reader.onprogress = e => {
			if (e.loaded && e.total) {
				const percent = (e.loaded / e.total) * 100;
			}
		};

		reader.onerror = e => {
			alert("Failed to read");
			reader.abort();
		};

		reader.readAsText(file);
	} else {
		alert("Please Drop a valid file type");
	}
};

const handleDragEnter = e => {
	e.stopPropagation();
	e.preventDefault();
};

const handleDragOver = e => {
	e.stopPropagation();
	e.preventDefault();
};

const handleDrop = (e, setTextAreaValue) => {
	e.stopPropagation();
	e.preventDefault();
	const dt = e.dataTransfer;
	const files = dt.files;
	handlefileUpload(files[0], setTextAreaValue);
};

export { handleDragEnter, handleDragOver, handleDrop };
