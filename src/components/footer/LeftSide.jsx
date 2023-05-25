import { EmailSubmit } from "./EmailSubmit";

export function LeftSide({ handleSubmit, handleMailChange }) {
	return (
		<div className="w-full space-y-4 md:space-y-7">
			<div className="text-2xl text-center md:text-5xl md:text-left">
				<div className="hidden md:block">
					Liberty over <br /> your Wears.
				</div>
				<div className="block md:hidden">Liberty over your Wears.</div>
			</div>
			<div className="text-sm text-gray-300 md:text-left text-center space-y-2.5 md:space-y-1">
				<div>Want to get updates from us?</div>
				<div>Subscribe to your mailing list</div>
			</div>
			<EmailSubmit
				handleSubmit={handleSubmit}
				handleMailChange={handleMailChange}
			/>
		</div>
	);
}
