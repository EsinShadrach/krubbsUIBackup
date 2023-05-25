import { ArrowRight } from "heroicons-react";
import img1 from "../../assets/images/transparent/transparent1.png";
import img2 from "../../assets/images/transparent/transparent2.png";
import img3 from "../../assets/images/transparent/transparent3.png";
import img4 from "../../assets/images/transparent/transparent4.png";
import img5 from "../../assets/images/transparent/transparent5.png";
import { useEffect, useState } from "react";

export function HeroCarousel() {
	const images = [img1, img2, img3, img4, img5];
	const [present, setPresent] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setPresent((prev) => (prev != images.length - 1 ? prev + 1 : 0));
		}, 3000);
		return () => clearInterval(interval);
	}, [present]);

	return (
		<div className="flex flex-col items-center justify-between md:flex-row w-full bg-[#F2F3F4CC] rounded-sm border border-[#00000026] max-w-5xls mx-auto min-h-[450px] overflow-hidden md:justify-start md:gap-12">
			<Carousel images={images} present={present} />
			<div className="side-b w-full md:w-1/2 py-2 relative z-50 ">
				<div className="max-w-sm w-full font-gilmerRegular md:text-5xl text-center md:text-left font-[600] text-black flex md:flex-col gap-1 text-2xl justify-center max-md:mx-auto">
					<div>Liberty</div>
					<div>Over Your</div>
					<div className="font-gilmerBold relative cursor-pointer">
						<div className="relative z-20 peer">WEARS</div>
						<div className="bg-[#FFE438] md:w-[180px] md:h-6 absolute z-10 bottom-0 w-[90px] h-4 md:peer-hover:h-7 transition-all duration-300" />
					</div>
				</div>
				<div className="md:text-left text-center text-linkBlue max-w-sm mt-6 max-md:mx-auto">
					Begin your journey by checking out our NFT collections.
				</div>
				<div className="px-4 md:px-0">
					<button className="flex items-center justify-center gap-2 mt-6 bg-linkBlue/95 rounded-full p-2 px-3 text-cardAsh text-sm md:w-fit w-full transition-all duration-300 hover:bg-linkBlue cursor-pointer group">
						Check here
						<span className="h-4 w-4 flex items-center justify-center group-hover:ml-2 transition-all duration-300">
							<ArrowRight />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

function Carousel({ images, present }) {
	return (
		<div className="side-a w-full relative z-10 md:w-1/2">
			<div
				className={`transition-all duration-300 w-full h-full max-w-2xl rounded-md relative -z-10`}
			>
				<div className="h-[366px]" />
				{images.map((image, index) => (
					<div key={index}>
						<img
							src={image}
							alt={`image ${index}`}
							className={`${
								index == present
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-full"
							} absolute top-0 left-0 w-full h-[366px] p-4 object-cover transition-all duration-300 cursor-pointer z-50`}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
