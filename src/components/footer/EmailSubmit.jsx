export function EmailSubmit({ handleSubmit, handleMailChange }) {
	return (
		<div className="bg-red-300s max-w-lg w-full pt-1">
			<form
				onSubmit={handleSubmit}
				className="bg-white rounded-full w-full max-w-lg flex p-1 pl-2 text-linkBlue"
			>
				<input
					onChange={handleMailChange}
					name="email"
					type="email"
					placeholder="yourmail@mail.com"
					className="w-full p-2 rounded-md bg-transparent focus:outline-none"
				/>
				<button className="bg-linkBlue/95 text-white p-2 rounded-full hover:bg-linkBlue transition-all duration-300">
					Subscribe
				</button>
			</form>
		</div>
	);
}
