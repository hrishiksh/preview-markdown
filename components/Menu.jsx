import { createContext, useState, useContext } from "react";
import IconBtn from "./IconBtn";
import { saveMarkdownFile } from "../utils/saveFile";
import CompileHtmlToPdf from "../utils/htmlToPdf";
import compileHtmltoPdf from "../utils/htmlToPdf";

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
		<IconBtn
			title="More"
			icon={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#ffffff"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<polyline points="6 9 12 15 18 9" />
				</svg>
			}
			onClick={toggle}
		/>
	);
};

const ListTile = ({ svg, bgColor, title, subtitle, onClick, isactive }) => {
	return (
		<div
			className={`flex items-center my-2 p-2 rounded-lg ${
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

const MenuContainer = ({ isOpen, textAreaValue, setIsMenuOpen }) => {
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
			<div className="h-auto w-max top-20 right-10 fixed bg-white border shadow-md rounded-lg p-6">
				<h3 className="font-Inter text-xl font-semibold select-none">
					Preview style
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
							onClick={() => {
								setMenuIndex(index);
								setIsMenuOpen(false);
							}}
						/>
					);
				})}
				<h3 className="font-Inter text-xl font-semibold select-none">
					Downloads
				</h3>
				<ListTile
					svg={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="#5B6CFF"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
							<line x1="12" y1="13" x2="12" y2="22" />
							<polyline points="9 19 12 22 15 19" />
						</svg>
					}
					bgColor={"bg-blue-100"}
					title={"Download as markdown"}
					subtitle={"Save a copy on your device"}
					isactive={false}
					onClick={() => {
						saveMarkdownFile(textAreaValue);
						setIsMenuOpen(false);
					}}
				/>
				<ListTile
					svg={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="#ff0000"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M14 3v4a1 1 0 0 0 1 1h4" />
							<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
							<line x1="9" y1="9" x2="10" y2="9" />
							<line x1="9" y1="13" x2="15" y2="13" />
							<line x1="9" y1="17" x2="15" y2="17" />
						</svg>
					}
					bgColor={"bg-red-100"}
					title={"Download as Pdf"}
					subtitle={"Beta feature"}
					isactive={false}
					onClick={() => {
						setIsMenuOpen(false);
						compileHtmltoPdf(document.getElementById("preview"));
					}}
				/>
			</div>
		);
	}
	return <></>;
};

export { MenuBtn, MenuContainer, menucontext, MenuProvider };
