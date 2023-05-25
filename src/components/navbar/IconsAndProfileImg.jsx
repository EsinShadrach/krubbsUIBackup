import { ShoppingCartIcon } from "./ShoppingCartIcon";
import { SearchIcon } from "./SearchIcon";

export function IconsAndProfileImg({
	samplePic,
	toggleFunc,
}) {
	return (
		<div className="flex gap-5 items-center">
			<button
				className="md:block w-6 h-6"
				onClick={toggleFunc}
			>
				<SearchIcon />
			</button>
			<button>
				<ShoppingCartIcon />
			</button>
			<button className="flex items-center justify-center object-cover w-6 h-6 rounded-full bg-linkBlue">
				<img
					src={samplePic}
					alt="Profile Picture"
					className="object-cover w-6 h-6 rounded-full bg-linkBlue"
				/>
			</button>
		</div>
	);
}
