import { useState } from "react";
import Head from "next/head";
import EditorBtn from "../components/EditorBtn";
import Tweeter from "../components/Twitter";
import { MenuBtn, MenuContainer, MenuProvider } from "../components/Menu";
import PreviewWindow from "../components/PreviewWindow";
import { saveMarkdownFile } from "../utils/saveFile";
import {
	handleH1,
	handleH2,
	handleH3,
	handleCode,
	handleList,
	handleTable,
	handleimg,
	handleVideo,
} from "../utils/editorBtnHandler";

const HomePage = () => {
	const [textAreaValue, setTextareaValue] = useState("");

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleTextArea = e => {
		const value = e.target.value;
		setTextareaValue(value);
	};

	return (
		<MenuProvider>
			<Head>
				<link rel="icon" type="image/svg+xml" href="/icon.svg" />
				<title>Preview Markdown</title>
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
					<EditorBtn onClick={() => handleH1(textAreaValue, setTextareaValue)}>
						H1
					</EditorBtn>
					<EditorBtn onClick={() => handleH2(textAreaValue, setTextareaValue)}>
						H2
					</EditorBtn>
					<EditorBtn onClick={() => handleH3(textAreaValue, setTextareaValue)}>
						H3
					</EditorBtn>
					<EditorBtn
						onClick={() => handleCode(textAreaValue, setTextareaValue)}>
						Code
					</EditorBtn>
					<EditorBtn
						onClick={() => handleList(textAreaValue, setTextareaValue)}>
						List
					</EditorBtn>
					<EditorBtn
						onClick={() => handleTable(textAreaValue, setTextareaValue)}>
						Table
					</EditorBtn>
					<EditorBtn onClick={() => handleimg(textAreaValue, setTextareaValue)}>
						Image
					</EditorBtn>
					<EditorBtn
						onClick={() => handleVideo(textAreaValue, setTextareaValue)}>
						Video
					</EditorBtn>
				</nav>
				<MenuBtn
					isopen={isMenuOpen}
					toggle={() => setIsMenuOpen(!isMenuOpen)}
				/>
			</header>
			<main className="h-screen grid grid-cols-2 p-8">
				<MenuContainer isOpen={isMenuOpen} textAreaValue={textAreaValue} />
				<textarea
					name="editor"
					placeholder="Start typing ..."
					value={textAreaValue}
					onChange={handleTextArea}
					className="w-full outline-none h-full resize-none font-Inter border-r pr-4"></textarea>
				<PreviewWindow textAreaValue={textAreaValue} />
			</main>
		</MenuProvider>
	);
};

export default HomePage;
