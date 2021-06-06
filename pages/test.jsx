import { saveMarkdownFile } from "../utils/saveFile";
import { useRef, useState } from "react";

const Test = () => {
	const fileInput = useRef();

	const [textareaValue, setTextAreaValue] = useState("");

	const handleBtnClick = () => {
		fileInput.current.click();
	};

	const handleFileChange = file => {
		// const files = fileInput.current.files;

		const reader = new FileReader();

		reader.onload = function (e) {
			console.log(e.target.result);
			setTextAreaValue(e.target.result);
		};

		reader.onprogress = e => {
			if (e.loaded && e.total) {
				const percent = (e.loaded / e.total) * 100;
				console.log(`PROGRESS: ${percent}`);
			}
		};

		reader.onerror = e => {
			alert("Failed to read");
			reader.abort();
		};

		reader.readAsText(file);

		// console.log(files[0]["size"] / 1000);
		// console.log(`${((fileInput.current.files[0]["size"])/1024)`kb})
	};

	const handleDragEnter = e => {
		e.stopPropagation();
		e.preventDefault();
		console.log("Drag enter event");
	};

	const handleDragOver = e => {
		e.stopPropagation();
		e.preventDefault();
		console.log("Drag over event");
	};

	const handleDrop = e => {
		e.stopPropagation();
		e.preventDefault();

		console.log("Drop event");

		const dt = e.dataTransfer;
		const files = dt.files;
		handleFileChange(files[0]);

		console.log(files);
	};

	const handleTextareaChange = e => {
		setTextAreaValue(e.target.value);
	};

	return (
		<>
			<h1>This is a tweeter btn</h1>
			<input
				type="file"
				accept=".md"
				onChange={handleFileChange}
				ref={fileInput}
			/>
			<textarea
				className="h-96 w-96 border bg-red-300"
				onChange={handleTextareaChange}
				value={textareaValue}
				onDragEnter={handleDragEnter}
				onDragOver={handleDragOver}
				onDrop={handleDrop}></textarea>

			<button onClick={handleBtnClick}>save</button>
		</>
	);
};

export default Test;
