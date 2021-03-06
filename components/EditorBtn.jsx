const EditorBtn = ({ onClick, children }) => {
	return (
		<>
			<button
				onClick={onClick}
				className="bg-gray-100 text-base px-4 py-2 rounded-md font-Inter font-medium focus:outline-none focus:ring select-none mr-2">
				{children}
			</button>
		</>
	);
};

export default EditorBtn;
