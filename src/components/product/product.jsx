import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import img2 from "../../assets/images/transparent/transparent2.png";
import img3 from "../../assets/images/transparent/transparent3.png";
import img6 from "../../assets/images/transparent/krubbs1.png";
import img7 from "../../assets/images/transparent/krubbs2.png";
import img8 from "../../assets/images/transparent/krubbs3.png";
import img9 from "../../assets/images/transparent/krubbs4.png";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ShoppingCart,
	ShoppingCartC,
} from "../../assets/icons/icons";
import { useEffect, useState } from "react";

export default function ProductsPage() {
	const [selectedPill, setSelectedPill] = useState(1);
	const [nextAvailable, setNextAvailable] = useState(true);
	const [scrollControl, setScrollControl] = useState("next");

	useEffect(() => {
		const prevButtonRef = document.querySelector(".goPrev");
		const nextButtonRef = document.querySelector(".goNext");
		const prevButton = document.querySelector(".swiper-button-prev");
		const nextButton = document.querySelector(".swiper-button-next");
		function prevControl() {
			prevButton.click();
		}
		function nextControl() {
			nextButton.click();
		}
		prevButtonRef.addEventListener("click", prevControl);
		nextButtonRef.addEventListener("click", nextControl);

		return () => {
			nextButtonRef.removeEventListener("click", nextControl);
			prevButtonRef.removeEventListener("click", prevControl);
		};
	}, [scrollControl]);

	function checkStuff(setText) {
		const start = document.querySelector(
			".swiper-pagination-current"
		).textContent;
		if (Number(start) == 1) {
			setNextAvailable(true);
		} else {
			setNextAvailable(false);
		}
		setScrollControl(setText);
	}

	const pills = [
		{ name: "Wears", id: 1 },
		{ name: "Laptop", id: 2 },
		{ name: "Back Packs", id: 3 },
		{ name: "Items", id: 4 },
		{ name: "Phone Pouches", id: 5 },
		{ name: "Airpod", id: 6 },
	];
	const pillFilter = [
		{
			id: 1,
			category: "wears",
			src: img2,
		},
		{
			id: 2,
			category: "wears",
			src: img3,
		},
		{
			id: 3,
			category: "wears",
			src: img6,
		},
		{
			id: 4,
			category: "wears",
			src: img7,
		},
		{
			id: 5,
			category: "wears",
			src: img8,
		},
		{
			id: 6,
			category: "wears",
			src: img9,
		},
		// Here
		{
			id: 7,
			category: "wears",
			src: img2,
		},
		{
			id: 8,
			category: "wears",
			src: img3,
		},
		{
			id: 9,
			category: "wears",
			src: img6,
		},
		{
			id: 10,
			category: "wears",
			src: img7,
		},
		{
			id: 11,
			category: "wears",
			src: img8,
		},
		{
			id: 12,
			category: "wears",
			src: img9,
		},
	];

	return (
		<main className="mt-6">
			<div className="px-3">
				<section className="container mx-auto bg-cardAsh rounded-sm border border-linkBlue/10 px-10 py-28 flex items-center justify-center">
					<h1 className="font-gilmerBold  text-linkBlue md:text-5xl text-center text-3xl">
						<div className="font-gilmerMedium text-4xl flex gap-2 md:flex-col md:gap-0 mx-auto md:m-0 flex-wrap justify-center">
							<span className="font-bold font-gilmerBold md:font-gilmerMedium relative z-30">
								<span className="relative z-30">
									The Krubbs’ <span>Products
									</span>
								</span>
								<div className="bg-[#FFE438]/80 absolute block h-4 w-full bottom-1 max-[484px]:bg-opacity-0 " />
							</span>
						</div>
					</h1>
				</section>
			</div>
			<section className="container mx-auto mt-7 flex justify-start px-3 md:px-0">
				<div className="flex gap-3 overflow-x-auto pills py-3  w-fit">
					{pills.map((pill, index) => (
						<button
							key={index}
							onClick={() => setSelectedPill(pill.id)}
							className={`border border-[#1c234a]/50 rounded-full px-4 p-1 transition-all duration-300 whitespace-nowrap max-w-max h-fit ${
								selectedPill == pill.id
									? "bg-linkBlue text-gray-300"
									: "text-linkBlue bg-white"
							}`}
						>
							{pill.name}
						</button>
					))}
				</div>
			</section>
			<section className="mt-5">
				<div className="flex items-center justify-end gap-3 container mx-auto px-3 mb-4">
					<button
						onClick={() => checkStuff("previous")}
						className={`${
							!nextAvailable
								? "w-7 h-7 bg-linkBlue fill-white"
								: "w-6 h-6 bg-white fill-linkBlue rounded-full flex items-center justify-center border border-linkBlue"
						} rounded-full hover:bg-linkBlue hover:fill-white goPrev`}
					>
						<ArrowLeftIcon className="w-5 h-5 m-1 fill-inherit" />
					</button>
					<button
						onClick={() => checkStuff("next")}
						className={`${
							nextAvailable
								? "w-7 h-7 bg-linkBlue fill-white"
								: "w-6 h-6 bg-white fill-linkBlue rounded-full flex items-center justify-center border border-linkBlue"
						} rounded-full hover:bg-linkBlue hover:fill-white goNext`}
					>
						<ArrowRightIcon className="w-5 h-5 m-1 fill-inherit" />
					</button>
				</div>
				<div className="container mx-auto px-3 mb-3">
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={12}
						pagination={{
							clickable: true,
							type: "fraction",
						}}
						modules={[Pagination, Navigation]}
						navigation={true}
						className="mySwiper relative cursor-grabbing"
					>
						{pillFilter.map((pill, index) => (
							<SwiperSlide
								className="bg-[#F2F3F4CC] slide items-center justify-center h-fit w-full max-w-md rounded-sm flex flex-col"
								key={index}
							>
								<div>
									<img
										src={pill.src}
										alt=""
										className="md:h-[300px] w-full md:w-fit"
									/>
								</div>
								<div className="bg-white w-full font-gilmerMedium px-3 h-full pt-3 ">
									<div>Round Neck Tee</div>
									<div className="font-gilmerRegular text-sm flex items-center gap-2 mt-2 mb-3">
										<span className="font-bold">
											#7,999
										</span>
										<small className="bg-krubbsYellow/30 border border-krubbsYellow rounded-full px-2 flex items-center justify-center text-amber-900 font-bold">
											Delivery fee excluded
										</small>
									</div>
									<div className="flex items-center mb-5 md:gap-5 md:flex-row flex-col gap-3">
										<div className="w-full md:w-fit">
											<button className="flex items-center justify-center bg-linkBlue text-gray-200 fill-gray-200 rounded-full px-2 md:py-1 py-1.5 gap-2 active:scale-95 transition-all duration-300 md:w-fit w-full whitespace-nowrap">
												<small>Add to Cart</small>
												<span>
													<ShoppingCartC
														className={`h-4 w-4`}
													/>
												</span>
											</button>
										</div>
										<div className="w-full md:w-fit">
											<button className="flex items-center justify-center  text-linkBlue fill-linkBlue rounded-full px-2 md:py-1 py-1.5 gap-2 active:scale-95 transition-all duration-300 border border-linkBlue hover:bg-linkBlue hover:text-gray-200 md:w-fit w-full">
												<small>
													Customize to your style
												</small>
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="container mx-auto px-3 my-3">
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={12}
						pagination={{
							clickable: true,
							type: "fraction",
						}}
						modules={[Pagination, Navigation]}
						navigation={true}
						className="mySwiper relative cursor-grabbing"
					>
						{pillFilter.map((pill, index) => (
							<SwiperSlide
								className="bg-[#F2F3F4CC] slide items-center justify-center h-fit w-full max-w-md rounded-sm flex flex-col"
								key={index}
							>
								<div>
									<img
										src={pill.src}
										alt=""
										className="md:h-[300px] w-full md:w-fit"
									/>
								</div>
								<div className="bg-white w-full font-gilmerMedium px-3 h-full pt-3 ">
									<div>Round Neck Tee</div>
									<div className="font-gilmerRegular text-sm flex items-center gap-2 mt-2 mb-3">
										<span className="font-bold">
											#7,999
										</span>
										<small className="bg-krubbsYellow/30 border border-krubbsYellow rounded-full px-2 flex items-center justify-center text-amber-900 font-bold">
											Delivery fee excluded
										</small>
									</div>
									<div className="flex items-center mb-5 md:gap-5 md:flex-row flex-col gap-3">
										<div className="w-full md:w-fit">
											<button className="flex items-center justify-center bg-linkBlue text-gray-200 fill-gray-200 rounded-full px-2 md:py-1 py-1.5 gap-2 active:scale-95 transition-all duration-300 md:w-fit w-full whitespace-nowrap">
												<small>Add to Cart</small>
												<span>
													<ShoppingCartC
														className={`h-4 w-4`}
													/>
												</span>
											</button>
										</div>
										<div className="w-full md:w-fit">
											<button className="flex items-center justify-center  text-linkBlue fill-linkBlue rounded-full px-2 md:py-1 py-1.5 gap-2 active:scale-95 transition-all duration-300 border border-linkBlue hover:bg-linkBlue hover:text-gray-200 md:w-fit w-full">
												<small>
													Customize to your style
												</small>
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</main>
	);
}
