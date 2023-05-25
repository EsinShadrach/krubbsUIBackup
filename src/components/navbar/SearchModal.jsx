import { SearchIcon } from "./SearchIcon";

export function SearchModal({ shown, toggleFunc }) {
	return (
		<div
			className={`w-full h-screen fixed bg-black/20w z-[100] inset-0 items-center justify-center backdrop-blur-sm ${
				shown ? "flex" : "hidden"
			}`}
		>
			<div
				className="h-full bg-black/20 w-full absolute inset-0 cursor-pointer"
				onClick={toggleFunc}
			/>
			<div className="px-3 w-full flex items-center justify-center relative -top-36">
				<div className="bg-white w-full max-w-md rounded-md rounded-t-lg relative z-[100]">
					<div className="bg-linkBlue p-3  rounded-t-md text-center text-gray-300 font-gilmerHeavy">
						Search Krubbs
					</div>
					<div className="p-3 space-y-2">
						<div className="flex border p-2 rounded-md gap-3 px-3">
							<div className="w-6 h-6 flex items-center">
								<SearchIcon />
							</div>
							<div className="w-full">
								<input
									type="search"
									className="w-full bg-red-300s focus:outline-none"
								/>
							</div>
						</div>
						<div>
							<button className="bg-linkBlue/90 rounded-md w-full py-1.5 font-gilmerBold text-gray-300 hover:bg-linkBlue transition-all duration-300">
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
