import { useEffect, useState, useRef } from "react";
import { Plus, StarOutline } from "heroicons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import blogImg1 from "../../assets/images/solidBg/Krubbs 02.jpg";
import blogImg2 from "../../assets/images/solidBg/krubbs 11.jpeg";
import blogImg3 from "../../assets/images/solidBg/Krubbs 03.jpg";
import t1 from "../../assets/images/t-1.png";
import t2 from "../../assets/images/t-2.png";
import t3 from "../../assets/images/t-3.png";
import t4 from "../../assets/images/t-4.png";
import cart from "../../assets/images/cart.png";
import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";
import { ArrowRightIcon } from "./landingIcons";
import { HeroCarousel } from "./HeroCarousel";
import { TrendingProducts } from "./TrendingProducts";
import { CustomizeToYourStyle } from "./CustomizeToYourStyle";

export default function Landing() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [sliderVisible, setSliderVisible] = useState(false);
	const sliderRef = useRef(null);
	
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setSliderVisible(entry.isIntersecting);
			},
			{ threshold: 0 }
		);
		if (sliderRef.current) {
			observer.observe(sliderRef.current);
		}
		return () => {
			if (sliderRef.current) {
				observer.unobserve(sliderRef.current);
			}
		};
	}, []);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
	}, [window.innerWidth]);

	const reviews = [
		{
			image: review1,
			review: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
			rating: [true, true, true, true, false],
		},
		{
			image: review2,
			review: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
			rating: [true, true, true, false, false],
		},
		{
			image: review3,
			review: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
			rating: [true, true, true, true, true],
		},
	];

	return (
		<main className="my-3 overflow-x-hidden mb-10">
			<section className="container mx-auto bg-red-300d px-3">
				<HeroCarousel />
			</section>
			<TrendingProducts />
			<CustomizeToYourStyle />
			<section className="container mx-auto px-3 pt-10 md:pt-0">
				<div className="flex gap-1.5 md:flex-col font-gilmerMedium text-linkBlue md:text-4xl font-bold md:font-medium justify-center md:justify-start text-3xl text-center whitespace-nowrap flex-wrap md:text-left w-fit mx-auto md:w-full">
					<div>Catch up with our weekly</div>
					<div className="space-x-2">
						<span className="font-bold font-gilmerBold md:font-gilmerMedium relative">
							Fashion
							<div className="bg-[#FFE438]/80 md:w-[8.5rem] h-3 absolute -z-10 bottom-[0.25rem] w-[7.2rem] md:bottom-[0.3rem]" />
						</span>
						<span>Blog</span>
					</div>
				</div>
				<div className="mt-7">
					<div className="font-gilmerMedium space-x-10 w-fit mx-auto md:w-full">
						<button className="transition-all duration-300 text-[#23293DB2] hover:text-[#23293D]">
							All Blogs
						</button>
						<button className="transition-all duration-300 font-gilmerBold text-[#23293D]">
							Trending
						</button>
						<button className="transition-all duration-300 text-[#23293DB2] hover:text-[#23293D]">
							Latest
						</button>
					</div>
					<div className="mt-8 overflow-hidden">
						{screenWidth >= 992 && (
							<div className="flex gap-10">
								{" "}
								{/* LG IS THE BREAK POINT */}
								<a
									href="#"
									className="bg-cardAsh rounded-md w-fit border mx-auto md:m-0 border-linkBlue/10"
								>
									<div className="border border-b-linkBlue/30 w-fit rounded-md max-w-[400px] overflow-hidden">
										<img
											src={blogImg1}
											alt=""
											className="hover:scale-110 object-cover rounded-md max-w-[400px] h-[510px] transition-all duration-300"
											draggable={false}
										/>
									</div>
									<div className="px-6 pt-4 text-linkBlue max-w-[400px]">
										Reasons why you should <br /> own
										customize wears.
										<div className="text-sm mt-2 text-ellipsis overflow-hidden max-h-28 ">
											{/* <div className="text-sm mt-2 text-ellipsis h-28s whitespace-nowrap overflow-hidden"> */}
											{/* USE JS HERE TO TRUNCATE THE CHARS */}
											Morem ipsum dolor sit amet,
											consectetur adipiscing elit. Nunc
											vulputate libero et velit interdum,
											ac aliquet odio mattis.... Morem
											ipsum dolor sit amet, consectetur
											adipiscing elit. Nunc vulputate
											libero et velit interdum, ac aliquet
											odio mattis....
										</div>
									</div>
								</a>
								<div className="h-full space-y-3 w-full">
									<div className="bg-cardAsh rounded-md h-1/2 w-fits w-full border border-linkBlue/10">
										<a href="#">
											<div className="w-fits max-w-[500px]s h-[250px] overflow-hidden rounded-md w-full">
												<img
													src={blogImg2}
													alt=""
													className="object-cover rounded-md w-[800px]s h-[250px] hover:scale-110 transition-all duration-300 w-full"
													draggable={false}
												/>
											</div>
											<div className="px-6 p-4 text-linkBlue max-w-[500px] overflow-hidden text-ellipsis w-full">
												Popular Myth about Game console
												<div className="text-sm mt-2 text-ellipsis h-10 whitespace-nowrap overflow-hidden">
													Morem ipsum dolor sit amet,
													consectetur adipiscing elit.
													Nunc vulputate libero et
													velit interdum, ac aliquet
													odio mattis....
												</div>
											</div>
										</a>
									</div>
									<div className="flex">
										<div className="bg-cardAsh rounded-md max-w-[350px]  border border-linkBlue/10">
											<div className="rounded-md overflow-hidden max-w-[350px]">
												<img
													src={blogImg3}
													alt=""
													className="object-cover rounded-md w-[800px] h-[200px] hover:scale-110 transition-all duration-300"
													draggable={false}
												/>
											</div>
											<div className="px-6 p-4 text-linkBlue">
												Different ways to style your
												hoodie
												<div className="text-sm mt-2 text-ellipsis h-10 whitespace-nowrap overflow-hidden">
													Morem ipsum dolor sit amet,
													consectetur adipiscing elit.
													Nunc vulputate libero et
													velit interdum, ac aliquet
													odio mattis....
												</div>
											</div>
										</div>
										<div className="w-full items-center justify-center flex">
											<div className="flex items-center">
												<button className="flex items-center justify-center text-linkBlue border border-linkBlue/50 rounded-full px-4 py-2 hover:bg-linkBlue hover:text-white transition-all duration-300 gap-1 group">
													<div>Read More</div>
													<div className="group-hover:translate-x-0.5 transition-all duration-300">
														<ArrowRightIcon
															className={`w-4 h-4`}
														/>
													</div>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{screenWidth < 992 && (
							<div className="h-[697px]" ref={sliderRef}>
								{sliderVisible && (
									<Swiper
										loop={false}
										slidesPerView={"auto"}
										spaceBetween={10}
										autoplay={{
											delay: 2000,
											disableOnInteraction: false,
										}}
										modules={[Autoplay]}
									>
										<SwiperSlide className="max-w-lg">
											<a href="#">
												<div className="bg-cardAsh rounded-md h-[697px] border border-linkBlue/10">
													<div className="rounded-md overflow-hidden border-b border-linkBlue/10">
														<img
															src={blogImg1}
															alt=""
															className="rounded-md h-[600px] object-cover hover:scale-110 transition-all duration-300"
														/>
													</div>
													<div className="px-6 pt-4 text-linkBlue pb-4 space-y-2">
														<div className="text-center font-gilmerBold">
															Reasons why you
															should own customize
															wears.
														</div>
														<div className="text-sm text-center">
															Morem ipsum dolor
															sit amet,
															consectetur
															adipiscing elit.
															Nunc vulputate
															libero et velit
															interdum, ac aliquet
															odio mattis....
														</div>
													</div>
												</div>
											</a>
										</SwiperSlide>
										<SwiperSlide className="max-w-lg">
											<a href="#">
												<div className="bg-cardAsh rounded-md h-[697px] border border-linkBlue/10">
													<div className="rounded-md overflow-hidden border-b border-linkBlue/10">
														<img
															src={blogImg2}
															alt=""
															className="h-[600px] rounded-md object-cover hover:scale-110 transition-all duration-300 w-full max-w-lg"
														/>
													</div>
													<div className="px-6 pt-4 text-linkBlue pb-4 space-y-2">
														<div className="text-center font-gilmerBold">
															Popular Myth about
															Airpods
														</div>
														<div className="text-sm text-center">
															Morem ipsum dolor
															sit amet,
															consectetur
															adipiscing elit.
															Nunc vulputate
															libero et velit
															interdum, ac aliquet
															odio mattis....
														</div>
													</div>
												</div>
											</a>
										</SwiperSlide>
										<SwiperSlide className="max-w-lg">
											<a href="#">
												<div className="bg-cardAsh rounded-md h-[697px] border border-linkBlue/10">
													<div className="rounded-md overflow-hidden border-b border-linkBlue/10">
														<img
															src={blogImg3}
															alt=""
															className="h-[600px] rounded-md object-cover hover:scale-110 transition-all duration-300 w-full max-w-lg"
														/>
													</div>
													<div className="px-6 pt-4 text-linkBlue pb-4 space-y-2">
														<div className="text-center font-gilmerBold">
															Different ways to
															style your hoodie.
														</div>
														<div className="text-sm text-center">
															Morem ipsum dolor
															sit amet,
															consectetur
															adipiscing elit.
															Nunc vulputate
															libero et velit
															interdum, ac aliquet
															odio mattis....
														</div>
													</div>
												</div>
											</a>
										</SwiperSlide>
										<SwiperSlide className="max-w-lg m-auto">
											<div className="bg-cardAsh border border-linkBlue/10 rounded-md w-full items-center justify-center flex h-[600px]">
												<div className="flex items-center">
													<a
														href="#"
														className="flex items-center justify-center text-linkBlue border border-linkBlue/50 rounded-full px-4 py-2 hover:bg-linkBlue hover:text-white transition-all duration-300 gap-1 group"
													>
														<div>Read More</div>
														<div className="group-hover:translate-x-0.5 transition-all duration-300">
															<ArrowRightIcon
																className={`w-4 h-4`}
															/>
														</div>
													</a>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								)}
							</div>
						)}
					</div>
				</div>
			</section>
			<section className="container mx-auto px-3 mt-12">
				<div className="text-linkBlue">
					<div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-3">
						<div className="font-gilmerMedium text-4xl flex gap-2 md:flex-col md:gap-0 mx-auto md:m-0">
							<div>Meet Our</div>
							<span className="font-bold font-gilmerBold md:font-gilmerMedium relative">
								Partners
								<div className="bg-[#FFE438]/80 md:w-[9.3rem] h-3 absolute -z-10 bottom-[0.25rem] w-[9.5rem] md:bottom-[0.3rem]" />
							</span>
						</div>
						<div>
							<button className="bg-white rounded-full border border-linkBlue/20 px-3 py-1 font-gilmerRegular text-sm shadow-[2px_2px_4px_rgba(41,_45,_50,_0.15)] transition-all duration-300 hover:scale-105">
								Know Them
							</button>
						</div>
					</div>
					<div className="text-sm mt-3 text-center md:text-left">
						Morem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odio
						mattis. Class aptent taciti sociosqu ad litora torquent
						per conubia nostra, per inceptos himenaeos. Curabitur
						tempus urna at turpis condimentum lobortis.
					</div>
				</div>
				<div className="text-[#23293D] flex overflow-x-auto flex-1 pt-10 partners">
					<div className="min-h-min flex gap-4">
						<div className="bg-cardAsh w-fit rounded-md border border-linkBlue/10 overflow-hidden">
							<div>
								<img
									src={t1}
									alt=""
									className="w-[260px] max-w-sm h-[400px] object-cover border-b border-linkBlue/10"
								/>
							</div>
							<div className="px-3 py-2">
								<p className="font-gilmerBold">Gabriel Boaz</p>
								<p className="text-sm">Founder</p>
							</div>
						</div>
						<div className="bg-cardAsh w-fit rounded-md border border-linkBlue/10 overflow-hidden">
							<div>
								<img
									src={t2}
									alt=""
									className="w-[260px] max-w-sm h-[400px] object-cover border-b border-linkBlue/10"
								/>
							</div>
							<div className="px-3 py-2">
								<p className="font-gilmerBold">Adidas</p>
								<p className="text-sm">Brand Influencer </p>
							</div>
						</div>
						<div className="bg-cardAsh w-fit rounded-md border border-linkBlue/10 overflow-hidden">
							<div>
								<img
									src={t3}
									alt=""
									className="w-[260px] max-w-sm h-[400px] object-cover border-b border-linkBlue/10"
								/>
							</div>
							<div className="px-3 py-2">
								<p className="font-gilmerBold">Gordian Etim</p>
								<p className="text-sm">Co-Founder</p>
							</div>
						</div>
						<div className="bg-cardAsh w-fit rounded-md border border-linkBlue/10 overflow-hidden">
							<div>
								<img
									src={t4}
									alt=""
									className="w-[260px] max-w-sm h-[400px] object-cover border-b border-linkBlue/10"
								/>
							</div>
							<div className="px-3 py-2">
								<p className="font-gilmerBold">PSam</p>
								<p className="text-sm">Brand Strategist</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto mt-12 text-linkBlue px-3">
				<div className="flex gap-1.5 md:flex-col font-gilmerMedium text-linkBlue md:text-4xl font-bold md:font-medium justify-center md:justify-start text-3xl text-center whitespace-nowrap flex-wrap md:text-left w-fit mx-auto md:w-full">
					<div>Earn as you</div>
					<div className="space-x-2">
						<span className="font-bold font-gilmerBold md:font-gilmerMedium relative">
							Shop With Us.
							<div className="bg-[#FFE438]/80 md:w-[15.2rem] h-3 absolute -z-10 bottom-[0.25rem] w-[12.8rem] md:bottom-[0.3rem]" />
						</span>
					</div>
				</div>
				<div className="bg-cardAsh rounded-sm p-6 flex items-center mt-6 md:flex-row flex-col border border-linkBlue/10 relative">
					<div className="w-fit">
						<img
							src={cart}
							alt=""
							className="max-w-md"
							draggable={false}
						/>
					</div>
					<div className="max-w-md md:space-y-14 text-center md:text-left space-y-8 relative z-10">
						Become a Dropshipper or Wholesaler just by reselling our
						products.
						<br />
						Want to know about our Drop shipping and Wholesale
						policy?
						<div>
							<button className="shadow-buttonShadow rounded-full text-sm text-linkBlue border border-linkBlue/20 px-5 py-1.5 bg-white hover:bg-white/80 transition-all duration-300 active:scale-95 md:w-fit w-full">
								Check Here
							</button>
						</div>
					</div>
					<div className="absolute font-gilmerOutline text-7xl md:block right-0 hidden">
						<div>Drop</div>
						<div>Shipping</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto px-3 mt-12">
				<div className="flex justify-between items-center mb-7">
					<div className="text-linkBlue text-4xl max-w-md md:text-left text-center font-gilmerMedium">
						What do our Customers have to say?
					</div>
					<div className="hidden md:block">
						<button className="border-linkBlue/10 rounded-full bg-white px-5 py-1 border text-sm flex items-center justify-center gap-1 transition-all duration-300 active:scale-95 shadow-buttonShadow">
							<span>Add a review</span>
							<span>
								<Plus />
							</span>
						</button>
					</div>
				</div>
				<div className="text-[#23293D] flex overflow-x-auto flex-1 pt-10 partners gap-4 flex-col md:flex-row md:space-y-0 space-y-10">
					{reviews.map((review, index) => (
						<div
							key={index}
							className="bg-cardAsh w-full rounded-md border border-linkBlue/10 max-w-md relative mx-auto"
						>
							<div className="-translate-y-1/2">
								<img
									src={review.image}
									alt=""
									className="mx-auto border rounded-full border-linkBlue/10"
									draggable={false}
								/>
							</div>
							<div className="text-center text-sm text-linkBlue -translate-y-1/2">
								{review.review}
							</div>
							<div className="text-[#FFE438] w-fit mx-auto flex gap-2 pb-3">
								{review.rating.map((star, index) => (
									<StarOutline
										className={`${
											star
												? "fill-[#FFE438]"
												: "fill-white"
										} h-4 w-4`}
										key={index}
									/>
								))}
							</div>
						</div>
					))}
					<div className="block md:hidden -translate-y-1/2">
						<button className="border-linkBlue/10 rounded-full bg-white px-5 py-1 border text-sm flex items-center justify-center gap-1 transition-all duration-300 active:scale-95 shadow-buttonShadow w-full max-w-md mx-auto">
							<span>Add a review</span>
							<span>
								<Plus />
							</span>
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
