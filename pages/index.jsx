import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Head from "next/head";
import Code from "../components/Code";

const HomePage = () => {
	const [textAreaValue, setTextareaValue] = useState("");

	const handleTextArea = e => {
		const value = e.target.value;
		setTextareaValue(value);
	};

	const components = {
		h1: ({ node, ...props }) => (
			<h1 className="font-Inter font-bold text-4xl py-6" {...props} />
		),
		h2: ({ node, ...props }) => (
			<h2 className="text-3xl font-bold font-Inter py-6" {...props} />
		),
		h3: ({ node, ...props }) => (
			<h3 className="text-2xl font-bold font-Inter py-4" {...props} />
		),
		h4: ({ node, ...props }) => (
			<h3 className="text-xl font-medium font-Inter py-2" {...props} />
		),
		h5: ({ node, ...props }) => (
			<h5 className="text-lg font-medium font-Inter py-2" {...props} />
		),
		h6: ({ node, ...props }) => (
			<h5 className="text-base font-normal font-Inter py-2" {...props} />
		),
		p: ({ node, ...props }) => (
			<p
				className="text-lg font-normal font-Inter py-2 max-w-full"
				{...props}
			/>
		),
		pre: ({ node, ...props }) => {
			const codeString = props["children"][0]["props"]["children"][0];
			const languageName =
				props["children"][0]["props"]["className"]?.split("-")[1];
			return <Code codeString={codeString} language={languageName} />;
		},

		code: ({ node, inline, ...props }) => {
			if (inline)
				return (
					<code className="font-mono bg-gray-100 text-base p-2" {...props} />
				);
		},
		ul: ({ node, ...props }) => (
			<ul className="list-disc list-inside py-4" {...props} />
		),

		ol: ({ node, ...props }) => (
			<ul className="list-decimal list-inside py-4" {...props} />
		),

		li: ({ node, ...props }) => {
			return (
				<li
					className="font-Inter font-normal text-lg sm:text-lg leading-loose sm:leading-loose"
					{...props}
				/>
			);
		},
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
			<section className="h-screen w-screen grid grid-cols-2 p-8">
				<textarea
					name="editor"
					placeholder="Start typing ..."
					value={textAreaValue}
					onChange={handleTextArea}
					className="w-full outline-none h-full resize-none font-Inter"></textarea>
				<div className="max-w-full">
					<ReactMarkdown remarkPlugins={[gfm]} components={components}>
						{textAreaValue}
					</ReactMarkdown>
				</div>
			</section>
		</>
	);
};

export default HomePage;
