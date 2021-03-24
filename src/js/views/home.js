import React, { useContext } from "react";
import "../../styles/home.scss";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//aqui se colocan el people.map
	return (
		<div className="todo" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/39608.jpg")` }}>
			<div className="container ">
				<h1 style={{ paddingTop: "0.7cm" }}>Characters</h1>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
					<div>
						<People />
					</div>
				</div>
				<h1 style={{ paddingTop: "0.7cm" }}>Planets </h1>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
					<div>
						<Planets />
					</div>
				</div>
			</div>
		</div>
	);
};
