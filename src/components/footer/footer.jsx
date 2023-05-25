import { useState } from "react";
import logo from "../../assets/images/krubbs.png";


import { Socials } from "./Socials";
import { LeftSide } from "./LeftSide";
export default function Footer() {
	const [email, setEmail] = useState({
		email: "",
	});

	function handleSubmit(event) {
		event.preventDefault();
		const stringified = JSON.stringify(email);
		console.log(stringified);
	}

	function handleMailChange(event) {
		event.preventDefault();
		const { name, value } = event.target;
		setEmail((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	return (
		<footer className="bg-linkBlue text-white font-gilmerMedium border border-linkBlue/[0.15]">
			<div className="container mx-auto p-3 pt-10 divide-y-4 divide-gray-300/25 space-y-6 md:space-y-12">
				<div className="flex justify-between md:flex-row flex-col space-y-5 md:space-y-0">
					<LeftSide
						handleSubmit={handleSubmit}
						handleMailChange={handleMailChange}
					/>
					<Socials />
				</div>
				<div className="pt-5">
					<div className="flex items-center justify-between w-fit md:w-full mx-auto">
						<div>
							<img src={logo} className="w-16 h-16" alt="" />
						</div>
						<div>@2023. All Rights Reserved.</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
