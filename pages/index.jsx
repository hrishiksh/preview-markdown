import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Head from "next/head";
import components from "../utils/EditorComponents";
import EditorBtn from "../components/EditorBtn";

const HomePage = () => {
	const [textAreaValue, setTextareaValue] = useState("");

	useEffect(() => {
		const grammerly = document.querySelector("grammarly-extension");
		console.log(textAreaValue);
	}, [textAreaValue]);

	const handleTextArea = e => {
		const value = e.target.value;
		setTextareaValue(value);
	};

	const handleH1 = e => {
		e.preventDefault();
		setTextareaValue(textAreaValue + "\n# Type here ...");
	};

	const handleH2 = e => {
		e.preventDefault();
		setTextareaValue(textAreaValue + "\n## Type here ...");
	};
	const handleH3 = e => {
		e.preventDefault();
		setTextareaValue(textAreaValue + "\n### Type here ...");
	};
	const handleCode = e => {
		e.preventDefault();
		setTextareaValue(textAreaValue + "\n```language \n Type here ... \n ```");
	};
	const handleList = e => {
		e.preventDefault();
		setTextareaValue(
			textAreaValue + "\n- list element 1 \n- list element 2 \n- list element 3"
		);
	};

	const handleimg = e => {
		e.preventDefault();
		setTextareaValue(textAreaValue + "\n![Alt text here](image link ...)");
	};

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<header className="border-b flex items-center">
				<img
					src="/logo.svg"
					alt="Preview markdown logo"
					className="h-16 px-12 py-4"
				/>
				<nav className="flex w-1/4 justify-between">
					<EditorBtn onClick={handleH1}>H1</EditorBtn>
					<EditorBtn onClick={handleH2}>H2</EditorBtn>
					<EditorBtn onClick={handleH3}>H3</EditorBtn>
					<EditorBtn onClick={handleCode}>Code</EditorBtn>
					<EditorBtn onClick={handleList}>List</EditorBtn>
					<EditorBtn onClick={handleimg}>Image</EditorBtn>
				</nav>
			</header>
			<section className="h-screen grid grid-cols-2 p-8">
				<textarea
					name="editor"
					placeholder="Start typing ..."
					value={textAreaValue}
					onChange={handleTextArea}
					className="w-full outline-none h-full resize-none font-Inter border-r pr-4"></textarea>
				<div className="max-w-full pl-4">
					<ReactMarkdown remarkPlugins={[gfm]} components={components}>
						{textAreaValue}
					</ReactMarkdown>
				</div>
			</section>
		</>
	);
};

export default HomePage;
