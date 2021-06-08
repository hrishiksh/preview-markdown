import Code from "../components/Code";

const defaultTheme = {
	h1: ({ node, ...props }) => (
		<h1 className="font-Inter font-bold text-4xl py-4" {...props} />
	),
	h2: ({ node, ...props }) => (
		<h2 className="text-3xl font-bold font-Inter py-4" {...props} />
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
		<p className="text-lg font-normal font-Inter py-2 max-w-full" {...props} />
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
	ul: ({ node, ordered, ...props }) => (
		<ul className="list-disc list-inside py-4" {...props} />
	),

	ol: ({ node, ...props }) => (
		<ol className="list-decimal list-inside py-4" {...props} />
	),

	li: ({ node, ordered, ...props }) => {
		return (
			<li
				className="font-Inter font-normal text-lg leading-loose "
				{...props}
			/>
		);
	},
	img: ({ node, ...props }) => <img className="w-full" {...props} />,
	a: ({ node, href, ...props }) => {
		const isYoutube = href.split(".")[1] === "youtube" ? true : false;
		if (isYoutube) {
			return (
				<iframe
					width="560"
					height="315"
					src={`https://www.youtube.com/embed/${href.split("=")[1]}`}
					title="YouTube video player"
					frameBorder="0"
					allowFullScreen></iframe>
			);
		}

		return <a {...props} />;
	},
	// blockquote:
	// em:
	// hr:
	// strong:
	// del:
	// input:
	table: ({ node, ...props }) => (
		<table className="font-Inter border table-auto rounded-lg" {...props} />
	),
	td: ({ node, isHeader, ...props }) => (
		<td
			className="font-Inter font-normal text-base border py-3 px-4"
			{...props}
		/>
	),
	th: ({ node, isHeader, ...props }) => (
		<th
			className="font-Inter font-medium text-base border  py-3 px-4"
			{...props}
		/>
	),
	thead: ({ node, ...props }) => <thead className="bg-gray-50" {...props} />,
	// tr:
	// tbody:
};

const githubTheme = {
	h1: ({ node, ...props }) => (
		<h1 className="font-github font-bold border-b text-4xl py-4" {...props} />
	),
	h2: ({ node, ...props }) => (
		<h2 className="text-3xl font-bold border-b font-github py-4" {...props} />
	),
	h3: ({ node, ...props }) => (
		<h3 className="text-2xl font-bold font-github py-4" {...props} />
	),
	h4: ({ node, ...props }) => (
		<h3 className="text-xl font-medium font-github py-2" {...props} />
	),
	h5: ({ node, ...props }) => (
		<h5 className="text-lg font-medium font-github py-2" {...props} />
	),
	h6: ({ node, ...props }) => (
		<h5 className="text-base font-normal font-github py-2" {...props} />
	),
	p: ({ node, ...props }) => (
		<p className="text-lg font-normal font-github py-2 max-w-full" {...props} />
	),
	pre: ({ node, ...props }) => {
		const codeString = props["children"][0]["props"]["children"][0];
		const languageName =
			props["children"][0]["props"]["className"]?.split("-")[1];
		return <Code codeString={codeString} language={languageName} />;
	},

	code: ({ node, inline, ...props }) => {
		if (inline)
			return <code className="font-mono bg-gray-100 text-sm p-1" {...props} />;
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
				className="font-github font-normal text-lg sm:text-lg leading-loose sm:leading-loose"
				{...props}
			/>
		);
	},
	img: ({ node, ...props }) => <img className="w-full" {...props} />,
	a: ({ node, ...props }) => (
		<a
			className="font-github font-normal text-lg leading-loose text-blue-700"
			{...props}
		/>
	),
	// blockquote:
	// em:
	// hr:
	// strong:
	// del:
	// input:
	table: ({ node, ...props }) => (
		<table className="font-github border table-auto rounded-lg" {...props} />
	),
	td: ({ node, ...props }) => (
		<td
			className="font-github font-normal text-base border py-3 px-4"
			{...props}
		/>
	),
	th: ({ node, ...props }) => (
		<th
			className="font-github font-medium text-base border  py-3 px-4"
			{...props}
		/>
	),
	thead: ({ node, ...props }) => <thead className="bg-gray-50" {...props} />,
	// tr:
	// tbody:
};

export { defaultTheme, githubTheme };
