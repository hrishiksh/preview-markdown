import Highlight, { defaultProps, Language } from "prism-react-renderer";
import okaidia from "prism-react-renderer/themes/okaidia";

const Code = ({ codeString, language }) => {
	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={okaidia}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={`${className} font-mono text-lg px-8 pt-8 my-2 rounded-md bg-gray-900 overflow-auto`}
					style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default Code;
