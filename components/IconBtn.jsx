const IconBtn = ({ title, icon, onClick }) => {
	return (
		<button
			className="text-base px-4 py-2 rounded-md font-Inter font-medium flex bg-bluePrimary text-white items-center focus:outline-none select-none"
			onClick={onClick}>
			<span>{title}</span>
			{icon}
		</button>
	);
};

export default IconBtn;
