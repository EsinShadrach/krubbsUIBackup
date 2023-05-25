import samplePic from "../../assets/images/c++.png";
import { useState } from "react";
import logo from "../../assets/images/krubbs.png";
import { ToggleButton } from "./ToggleButton";
import { SearchModal } from "./SearchModal";
import { NavLinksLarge } from "./NavLinksLarge";
import { IconsAndProfileImg } from "./IconsAndProfileImg";
import { NavBrand } from "./NavBrand";
import { NavLinksSmall } from "./NavLinksSmall";
import { json } from "react-router-dom";

export default function Navbar() {
	const [navbarState, setNavbarState] = useState({
		opened: false,
		selected: 0,
		showSearch: false,
	});

	const navLinks = [
		{
			id: 1,
			name: "About",
			href: "/about",
		},
		{
			id: 2,
			name: "Product",
			href: "/products",
		},
		{
			id: 3,
			name: "Customize",
			href: "/customize",
		},
	];

	function objSelected(selectId) {
		setNavbarState((prevState) => ({
			...prevState,
			selected: selectId,
		}));
	}

	function toggleNavbar() {
		setNavbarState((prevState) => ({
			...prevState,
			opened: !navbarState.opened,
		}));
	}

	function toggleSearch() {
		setNavbarState((prevState) => ({
			...prevState,
			showSearch: !navbarState.showSearch,
		}));
	}

	return (
		<header>
			<nav className="font-gilmerRegular relative z-50">
				{/* TOP OF NAVBAR */}
				<div className="container flex justify-between p-3 psy-6 mx-auto bg-red-500s text-linkBlue items-center bg-white">
					<ToggleButton
						opened={navbarState.opened}
						toggleNavbar={toggleNavbar}
					/>
					<NavBrand logo={logo} />
					<NavLinksLarge
						navLinks={navLinks}
						selectFunc={objSelected}
						selectedId={navbarState.selected}
					/>
					<IconsAndProfileImg
						samplePic={samplePic}
						toggleFunc={toggleSearch}
					/>
				</div>
				<div
					className={`md:hidden absolute w-full -z-10 transition-all duration-300 bg-white border-b border-linkBlue/10 ${
						navbarState.opened
							? "translate-y-0"
							: "-translate-y-full"
					}`}
				>
					<div className="container px-3 mx-auto py-3">
						<NavLinksSmall
							navLinks={navLinks}
							selectFunc={objSelected}
							selectedId={navbarState.selected}
						/>
					</div>
				</div>
			</nav>
			<SearchModal
				toggleFunc={toggleSearch}
				shown={navbarState.showSearch}
			/>
		</header>
	);
}
