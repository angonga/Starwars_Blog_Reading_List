import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link className="navbar-brand" to="/">
				<img
					src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
					width="90px"
					style={{ background: "#f8f9ed" }}
				/>
			</Link>

			<Dropdown isOpen={dropdownOpen} toggle={toggle} title={store.favorites.length}>
				<DropdownToggle caret>Favorites</DropdownToggle>
				<DropdownMenu>
					{store.favorites.map((element, i) => {
						return (
							<li key={i}>
								<DropdownItem>
									{element.name}
									<button className="remove" onClick={() => actions.deleteFavorites(i)}>
										<i className="fas fa-trash" />
									</button>
								</DropdownItem>
							</li>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
