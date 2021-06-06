import { createContext, useState, useContext } from "react";

const menucontext = createContext([0, undefined]);

const MenuProvider = ({ children }) => {
	const [menuIndex, setMenuIndex] = useState(0);

	return (
		<menucontext.Provider value={[menuIndex, setMenuIndex]}>
			{children}
		</menucontext.Provider>
	);
};

const MenuBtn = ({ isopen, toggle }) => {
	return (
		<div>
			{isopen ? (
				<svg
					onClick={toggle}
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#2c3e50"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			) : (
				<svg
					onClick={toggle}
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#2c3e50"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<line x1="4" y1="6" x2="20" y2="6" />
					<line x1="4" y1="12" x2="20" y2="12" />
					<line x1="4" y1="18" x2="20" y2="18" />
				</svg>
			)}
		</div>
	);
};

const ListTile = ({ svg, bgColor, title, subtitle, onClick, isactive }) => {
	return (
		<div
			className={`flex items-center mx-6 my-2 p-2 rounded-lg ${
				isactive ? "bg-gray-50" : "hover:bg-gray-50"
			}`}
			onClick={onClick}>
			<div className={`rounded-lg p-2 mr-4 ${bgColor}`}>{svg}</div>
			<div>
				<h4 className="font-Inter text-lg font-medium select-none">{title}</h4>
				<p className="font-Inter text-sm font-normal select-none">{subtitle}</p>
			</div>
		</div>
	);
};

const MenuContainer = ({ isOpen }) => {
	const [menuIndex, setMenuIndex] = useContext(menucontext);

	if (isOpen) {
		const menuItems = [
			{
				svg: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						strokeWidth="1"
						stroke="#4ECCA3"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
						<line x1="8" y1="8" x2="12" y2="8" />
						<line x1="8" y1="12" x2="12" y2="12" />
						<line x1="8" y1="16" x2="12" y2="16" />
					</svg>
				),
				bgColor: "bg-green-100",
				title: "Article",
				subtitle: "Default style to write any type of article",
				isactive: true,
			},
			{
				svg: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						strokeWidth="1"
						stroke="#A482ED"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
					</svg>
				),
				bgColor: "bg-purple-100",
				title: "Github",
				subtitle: "Github Readme.md style",
			},
		];

		return (
			<div
				className="h-1/2 w-1/4 top-20 right-10 fixed bg-white border
            shadow-md rounded-lg">
				<h3 className="font-Inter text-xl font-semibold px-8 pt-8 pb-4 select-none">
					Toggle markdown style
				</h3>
				{menuItems.map((item, index) => {
					return (
						<ListTile
							key={item.title}
							svg={item.svg}
							bgColor={item.bgColor}
							title={item.title}
							subtitle={item.subtitle}
							isactive={menuIndex == index ? true : false}
							onClick={() => setMenuIndex(index)}
						/>
					);
				})}
			</div>
		);
	}
	return <></>;
};

export { MenuBtn, MenuContainer, menucontext, MenuProvider };
