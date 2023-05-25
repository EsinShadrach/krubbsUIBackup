import { Link } from "react-router-dom";

export function NavBrand({ logo }) {
	return (<div className="flex items-center justify-center w-full font-bold translate-x-3 md:w-fit md:translate-x-0">
		<Link to="/">
			<img src={logo} alt="" className="w-14 h-14 wbg-blue-100" />
		</Link>
	</div>);
}
