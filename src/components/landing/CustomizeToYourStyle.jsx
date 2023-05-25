import img8 from "../../assets/images/transparent/krubbs3.png";
import { Plus } from "heroicons-react";
import {
	ArrowRightIcon,
	CartIconWhite,
	CropIcon,
	TextAdd,
	EyeDropper,
	Airplane,
	DownloadIcon
} from "./landingIcons";

export function CustomizeToYourStyle() {
	return (<><section className="container mx-auto px-3 mt-14 text-linkBlue">
		<div className="font-gilmerMedium flex justify-between items-center md:flex-row flex-col gap-5">
			<div className="font-gilmerMedium text-4xl flex gap-2 md:flex-col md:gap-0 mx-auto md:m-0 flex-wrap justify-center">
				<div>Customize to</div>
				<span className="font-bold font-gilmerBold md:font-gilmerMedium relative">
					Your Style
					<div className="bg-[#FFE438]/80 md:w-[11rem] h-3 absolute -z-10 bottom-[0.25rem] w-[11.2rem] md:bottom-[0.3rem]" />
				</span>
			</div>
			<div className="font-gilmerRegular md:w-fit w-full">
				<button className="flex items-center justify-center gap-2 mt-6 bg-linkBlue/95 rounded-full p-2 px-3 text-cardAsh text-sm md:w-fit w-full transition-all duration-300 hover:bg-linkBlue cursor-pointer group">
					Add to Cart
					<span className="h-4 w-4 flex items-center justify-center transition-all duration-300 stroke-white">
						<CartIconWhite />
					</span>
				</button>
			</div>
		</div>
	</section>
		<section className="container mx-auto px-3 mt-16 relative mb-12">
			<div className="flex md:flex-row flex-col gap-4">
				<div className="w-full flex items-center justify-center relative">
					<div className="bg-cardAsh rounded-full py-1.5 px-3 flex gap-4 items-center justify-center absolute top-20">
						<div>Colour</div>
						<div className="border rounded-full flex gap-2 py-1 px-3">
							<div className="border border-black/30 w-6 h-6 bg-[#055A83] bg-opacity-90 rounded-full cursor-pointer transition-all duration-300 hover:bg-opacity-100" />
							<div className="border border-black/30 w-6 h-6 bg-[#A5DC97] bg-opacity-90 rounded-full cursor-pointer transition-all duration-300 hover:bg-opacity-100" />
							<div className="border border-black/30 w-6 h-6 bg-[#000000] bg-opacity-90 rounded-full cursor-pointer transition-all duration-300 hover:bg-opacity-100" />
							<div className="border border-black/30 w-6 h-6 bg-[#FFFFFF] bg-opacity-90 rounded-full cursor-pointer transition-all duration-300 hover:bg-opacity-100" />
							<div className="rounded-full hover:bg-black/10 transition-all duration-300 cursor-pointer">
								<Plus />
							</div>
						</div>
					</div>
					<div className="border-[6px] border-dashed w-[300px] h-[200px] mt-9 absolute border-linkBlue/70" />
					<img src={img8} className="w-full max-w-sm" />
				</div>
				<div className="w-full flex md:flex-row flex-col items-center md:gap-10 gap-5 backdrop-blur-sms">
					<div className="bg-cardAsh rounded-sm md:p-0 flex md:flex-col flex-row w-full md:w-fit justify-around max-h-96 h-full border border-black/10">
						<div className="flex items-center justify-center group md:flex-row flex-col">
							<div className="bg-linkBlue w-1 h-1 md:rounded-r-full md:group-hover:h-full transition-all duration-300 max-md:rounded-b-full max-md:group-hover:w-full" />
							<div className="w-6 h-6 text-linkBlue fill-linkBlue cursor-pointer rounded-full relative mx-4 m-2">
								<CropIcon />
							</div>
						</div>
						<div className="flex items-center justify-center group md:flex-row flex-col">
							<div className="bg-linkBlue w-1 h-1 md:rounded-r-full md:group-hover:h-full transition-all duration-300 max-md:rounded-b-full max-md:group-hover:w-full" />
							<div className="w-6 h-6 text-linkBlue fill-linkBlue cursor-pointer rounded-full relative mx-4 m-2">
								<TextAdd />
							</div>
						</div>
						<div className="flex items-center justify-center group md:flex-row flex-col">
							<div className="bg-linkBlue w-1 h-1 md:rounded-r-full md:group-hover:h-full transition-all duration-300 max-md:rounded-b-full max-md:group-hover:w-full" />
							<div className="w-6 h-6 text-linkBlue fill-linkBlue cursor-pointer rounded-full relative mx-4 m-2">
								<EyeDropper />
							</div>
						</div>
						<div className="flex items-center justify-center group md:flex-row flex-col">
							<div className="bg-linkBlue w-1 h-1 md:rounded-r-full md:group-hover:h-full transition-all duration-300 max-md:rounded-b-full max-md:group-hover:w-full" />
							<div className="w-6 h-6 text-linkBlue fill-linkBlue cursor-pointer rounded-full relative mx-4 m-2">
								<Airplane />
							</div>
						</div>
						<div className="flex items-center group md:flex-row flex-col justify-between">
							<div className="bg-linkBlue w-1 h-1 md:rounded-r-full md:group-hover:h-full transition-all duration-300 max-md:rounded-b-full max-md:group-hover:w-full" />
							<div className="h-full flex items-center justify-center w-full">
								<div className="bg-white w-7 h-7 rounded-sm flex items-center justify-center border border-black/20 mx-autos cursor-pointer">
									<div className="bg-[#055A83] border border-[#292D32] w-5 h-5 rounded-full" />
								</div>
							</div>
						</div>
					</div>
					<div className="font-gilmerMedium max-h-96 h-full text-linkBlue space-y-1 py-3 mr-auto md:m-0 backdrop-blur-sm">
						<p className="text-xl">Product Type</p>
						<div className="font-gilmerRegular md:text-sm space-y-2">
							<div className="flex items-center gap-1">
								<span>Wears</span>
								<span>
									<ArrowRightIcon className="h-4 w-4" />
								</span>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									Shirts
								</button>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									Hoodies
								</button>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									Caps
								</button>
							</div>
							<div>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									<span>Laptops</span>
								</button>
							</div>
							<div>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									<span>Bag packs</span>
								</button>
							</div>
							<div>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									<span>Items</span>
								</button>
							</div>
							<div>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									<span>Phone Pouches</span>
								</button>
							</div>
							<div>
								<button className="text-[#23293D] text-opacity-50 transition-all duration-300 hover:text-opacity-100">
									<span>Airpods</span>
								</button>
							</div>
						</div>
						<div className="pt-10">
							<button className="button-shadow bg-white border border-linkBlue/20 p-1.5 px-5 rounded-full text-sm flex items-center gap-3 justify-center w-full md:w-fit font-gilmerMedium active:scale-90 transition-all duration-300">
								<span>Save</span>
								<span>
									<DownloadIcon className="h-4 w-4" />
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="font-gilmerOutline text-linkBlue/30 text-9xl absolute right-0 -z-10 translate-x-24 hidden md:block">
					<h1 className="-rotate-90 w-fit relative inset-x-20 inset-y-4">
						rs
					</h1>
					<h1>Wears</h1>
					<h1 className="w-fit -rotate-90 relative inset-x-16 inset-y-2">
						We
					</h1>
				</div>
				<div className="font-gilmerOutline text-linkBlue/30 text-8xl absolute bottom-0 -z-10  block md:hidden right-0">
					<h1 className="-rotate-90 w-fit relative inset-x-32 inset-y-5">
						rs
					</h1>
					<h1>Wears</h1>
					<h1 className="w-fit -rotate-90 relative inset-x-28 inset-y-3 -translate-x-2">
						We
					</h1>
				</div>
			</div>
		</section></>);
}
