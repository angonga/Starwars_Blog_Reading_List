import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	/*const [favorites, setFavorites] = useState([]);*/
	const [newFavorites, setNewFavorites] = useState();
	const [counter, setCounter] = useState(0);

	//const addFavorites = () => {
	//	if (newFavorites == "") {
	//		alert("Enter your favorite character or planet");
	//	} else {
	//		setFavorites([...favorites, { label: "", done: false }]);
	//		setNewFavorites("");
	//		setCounter(counter + 1);
	//	} //cierra el else
	//}; //cierra agregar

	/*const deleteFavorites = i => {
		const newFavorites = [...favorites];
		newFavorites.splice(i, 1);
		setFavorites(newFavorites);
		setCounter(counter - 1);
		console.log(typeof counter);
	};*/

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link className="navbar-brand" to="/">
				<img
					src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
					width="90px"
					style={{ background: "#f8f9ed" }}
				/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle">Favorites</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((element, i) => {
							return (
								<li key={i}>
									{element}
									<button className="remove" onClick={() => actions.deleteFavorites(i)}>
										<i className="fas fa-trash" />
									</button>
								</li>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
