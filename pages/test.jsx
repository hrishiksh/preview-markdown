import { saveMarkdownFile } from "../utils/saveFile";

const Test = () => {
	return (
		<>
			<h1>This is a tweeter btn</h1>
			<button onClick={() => saveMarkdownFile("hello guys, i am hrishikesh")}>
				save
			</button>
		</>
	);
};

export default Test;
