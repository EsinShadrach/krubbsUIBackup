import { TwitterIcon } from "./TwitterIcon";
import { FacebookIcon } from "./FacebookIcon";
import { InstagramIcon } from "./InstagramIcon";
import { WhatsappIcon } from "./WhatsappIcon";

export function Socials({}) {
	return (
		<div className="md:w-fit whitespace-nowrap text-sm text-right fill-white md:space-y-12 space-y-4 pt-3">
			<div className="flex items-center md:block justify-center gap-2 space-y-1">
				<div>Follow Our Socials:</div>
				<div className="flex justify-end md:gap-4 gap-2.5 items-center">
					<a href="#" className="w-6 h-6">
						<div className="fill-white text-white">
							<FacebookIcon />
						</div>
					</a>
					<a href="#" className="w-6 h-6">
						<div className="fill-white text-white">
							<TwitterIcon />
						</div>
					</a>
					<a href="#" className="w-6 h-6">
						<div className="fill-white text-white">
							<InstagramIcon />
						</div>
					</a>
				</div>
			</div>
			<div className="flex items-center justify-center gap-3 md:flex-col md:items-end flex-wrap md:gap-4">
				Chat with Kiane from Krubbs here:
				<div className="flex items-center gap-1 justify-end">
					<div className="w-6 h-6">
						<WhatsappIcon />
					</div>
					<div className="cursor-pointer">
						<a href="#">0902020209292</a>
					</div>
				</div>
			</div>
		</div>
	);
}
