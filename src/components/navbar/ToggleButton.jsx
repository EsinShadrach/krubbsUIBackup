export function ToggleButton({ opened, toggleNavbar }) {
	return (
		<button
			className="block select-none md:hidden"
			onClick={toggleNavbar}
		>
			<div
				className={`hamburger_container mx-auto flex flex-col w-fit select-none ${
					opened ? "nav_open" : ""
				}`}
				role="button"
			>
				<hr className="p-[1px] ham1 w-5 group-hover:bg-linkBlue bg-black border-none rounded" />
				<hr className="p-[1px] ham2 w-5 group-hover:bg-linkBlue bg-black border-none my-[.25rem] rounded" />
				<hr className="p-[1px] ham3 w-5 group-hover:bg-linkBlue bg-black border-none rounded" />
			</div>
		</button>
	);
}
