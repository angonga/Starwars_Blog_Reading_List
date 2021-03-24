import React, { useContext } from "react";
//import PropTypes from "prop-types";//
//import { useParams } from "react-router-dom";//
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function People() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row p-2 w-6">
				<div className="cards-container d-flex justify-content-between">
					{store.people.map((element, index) => {
						return (
							<div
								key={index}
								className="card col-4 card-img-top"
								style={{ width: "3cm", padding: "0.5cm", margin: "0.5cm" }}>
								<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<ul className="characters">
										<li>Gender: {element.gender}</li>
										<li>Eye color: {element.eye_color}</li>
										<li>Hair color: {element.hair_color}</li>
									</ul>
									<Link to={"/people_detailed/" + index} className="btn btn-outline-primary">
										Learn More!
									</Link>
									<button
										onClick={() => {
											alert("ya casi lo logramos jaja");
										}}
										type="button"
										className="btn btn-outline-warning float-right">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
