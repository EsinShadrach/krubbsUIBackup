import { NavLink } from "react-router-dom";

export function NavLinksLarge({
	navLinks,
	selectFunc,
	selectedId,
}) {
	return (
		<div className="hidden md:block">
			<ul className="flex text-sm font-medium text-center gap-14">
				{navLinks.map((navLink) => (
					<NavLink to={navLink.href} key={navLink.id}>
						{({ isActive }) => (
							<li
								onClick={() => selectFunc(navLink.id)}
								className={`border-b-2 hover:border-linkBlue/50 transition-all duration-300 pb-1 ${
									isActive
										? "border-linkBlue/90 font-bold "
										: "border-transparent"
								}`}
							>
								{navLink.name}
							</li>
						)}
					</NavLink>
				))}
			</ul>
		</div>
	);
}
