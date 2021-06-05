import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Head from "next/head";
import components from "../utils/EditorComponents";
import EditorBtn from "../components/EditorBtn";
import Tweeter from "../components/Twitter";
import { MenuBtn, MenuContainer } from "../components/Menu";

const HomePage = () => {
	const [textAreaValue, setTextareaValue] = useState("");

	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

	const handleTable = e => {
		e.preventDefault();
		setTextareaValue(
			textAreaValue +
				"\n| Tables   |      Are      |  Cool |\n|----------|:-------------:|------:|\n| col 1 is |  left-aligned | $1600 |\n| col 2 is |    centered   |   $12 |\n| col 3 is | right-aligned |    $"
		);
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
			<header className="border-b flex items-center justify-between mx-8">
				<img
					src="/logo.svg"
					alt="Preview markdown logo"
					className="h-16  py-4"
				/>
				<nav className="flex flex-1 justify-center">
					<EditorBtn onClick={handleH1}>H1</EditorBtn>
					<EditorBtn onClick={handleH2}>H2</EditorBtn>
					<EditorBtn onClick={handleH3}>H3</EditorBtn>
					<EditorBtn onClick={handleCode}>Code</EditorBtn>
					<EditorBtn onClick={handleList}>List</EditorBtn>
					<EditorBtn onClick={handleimg}>Image</EditorBtn>
					<EditorBtn onClick={handleTable}>Table</EditorBtn>
				</nav>
				<MenuBtn
					isopen={isMenuOpen}
					toggle={() => setIsMenuOpen(!isMenuOpen)}
				/>
			</header>
			<main className="h-screen grid grid-cols-2 p-8">
				<MenuContainer isOpen={isMenuOpen} />
				<textarea
					name="editor"
					placeholder="Start typing ..."
					value={textAreaValue}
					onChange={handleTextArea}
					className="w-full outline-none h-full resize-none font-Inter border-r pr-4"></textarea>
				<section className="max-w-full pl-4">
					<ReactMarkdown remarkPlugins={[gfm]} components={components}>
						{textAreaValue}
					</ReactMarkdown>
				</section>
			</main>
		</>
	);
};

export default HomePage;
