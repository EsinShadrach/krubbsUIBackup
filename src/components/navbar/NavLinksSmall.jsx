import { NavLink } from "react-router-dom";

export function NavLinksSmall({ navLinks, selectFunc, selectedId }) {
	return (
		<ul className="space-y-2">
			{navLinks.map((navLink) => (
				<div
					key={navLink.id}
					className="group flex items-center gap-1"
					onClick={() => selectFunc(navLink.id)}
				>
					<div
						className={`group-hover:h-9 w-1.5 bg-linkBlue rounded-full transition-all duration-300 ${
							navLink.id === selectedId ? "h-9" : "h-1.5"
						}`}
					/>
					<NavLink to={navLink.href} className="w-full">
						{({ isActive, isPending }) => (
							<li
								className={`p-2.5 rounded-md transition-all duration-300 hover:bg-linkBlue/10 w-full ${
									isActive
										? "bg-linkBlue/10"
										: "bg-white"
								}`}
							>
								{navLink.name}
							</li>
						)}
					</NavLink>
				</div>
			))}
		</ul>
	);
}
