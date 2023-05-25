import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import img2 from "../../assets/images/transparent/transparent2.png";
import img3 from "../../assets/images/transparent/transparent3.png";
import img6 from "../../assets/images/transparent/krubbs1.png";
import img7 from "../../assets/images/transparent/krubbs2.png";
import img8 from "../../assets/images/transparent/krubbs3.png";
import img9 from "../../assets/images/transparent/krubbs4.png";
import { ArrowLeftIcon, ArrowRightIcon } from "./landingIcons";
import { useEffect, useState } from "react";

export function TrendingProducts() {
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
		<>
			<section className="container  md:ml-auto px-3 md:mt-10 mt-7 mx-auto md:m-0">
				<div className="flex flex-col md:flex-row items-center md:gap-14 gap-3">
					<div className="font-gilmerMedium text-4xl font-bold text-[#23293D] flex flex-col md:whitespace-nowrap text-center md:text-left">
						<div>Our Best and</div>
						<div>Trending Products</div>
					</div>
					<div className="flex gap-3 overflow-x-auto pills w-full py-3">
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
				</div>
			</section>
			<section className="mt-5">
				<div className="flex items-center justify-end gap-3 container mx-auto px-3 mb-4">
					<button
						onClick={() => checkStuff("previous")}
						className={`${
							!nextAvailable
								? "w-7 h-7 bg-linkBlue text-white"
								: "w-6 h-6 bg-white text-linkBlue rounded-full flex items-center justify-center border border-linkBlue"
						} rounded-full hover:bg-linkBlue hover:text-white goPrev`}
					>
						<ArrowLeftIcon className="w-5 h-5 m-1" />
					</button>
					<button
						onClick={() => checkStuff("next")}
						className={`${
							nextAvailable
								? "w-7 h-7 bg-linkBlue text-white"
								: "w-6 h-6 bg-white text-linkBlue rounded-full flex items-center justify-center border border-linkBlue"
						} rounded-full hover:bg-linkBlue hover:text-white goNext`}
					>
						<ArrowRightIcon className="w-5 h-5 m-1" />
					</button>
				</div>
				<div className="container md:px-0 px-3 ml-auto">
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={12}
						pagination={{
							clickable: true,
							type: "fraction",
						}}
						modules={[Pagination, Navigation]}
						navigation={true}
						className="mySwiper h-96 relative cursor-grabbing"
					>
						{pillFilter.map((pill, index) => (
							<SwiperSlide
								className="bg-[#F2F3F4CC] slide items-center justify-center h-fit w-full max-w-md rounded-sm border border-linkBlue/20"
								key={index}
							>
								<div>
									<img
										src={pill.src}
										alt=""
										className="md:h-[300px] w-full md:w-fit"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
}
