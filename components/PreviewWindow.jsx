import { useContext } from "react";
import { menucontext } from "../components/Menu";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { defaultTheme, githubTheme } from "../utils/EditorThems";

const PreviewWindow = ({ textAreaValue }) => {
	const [menuindex, setMenuIndex] = useContext(menucontext);
	return (
		<section className="max-w-full pl-4" id="preview">
			<ReactMarkdown
				remarkPlugins={[gfm]}
				components={menuindex == 0 ? defaultTheme : githubTheme}>
				{textAreaValue}
			</ReactMarkdown>
		</section>
	);
};

export default PreviewWindow;
