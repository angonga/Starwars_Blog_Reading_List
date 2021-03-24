import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetailed = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<h1 className="display-4"> {store.people[params.theid].name}</h1> <hr className="my-4" />
			<div className="card mb-3" style={{ maxWidth: "5cm;" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/800x600" style={{ width: "5cm" }} alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.people[params.theid].name}</h5>
							<p className="card-text">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container" style={{ height: "2cm", padding: "0.5cm" }}>
				<div className="row">
					<div className="col-sm-2">
						<strong>Name: </strong>
						{store.people[params.theid].name}
					</div>
					<div className="col-sm-2">
						<strong>Birth Year: </strong>
						{store.people[params.theid].birth_year}
					</div>
					<div className="col-sm-2">
						<strong>Gender: </strong>
						{store.people[params.theid].gender}
					</div>
					<div className="col-sm-2">
						<strong>Height: </strong>
						{store.people[params.theid].height}
					</div>
					<div className="col-sm-2">
						<strong>Skin Color: </strong>
						{store.people[params.theid].skin_color}
					</div>
					<div className="col-sm-2">
						<strong>Eye Color:</strong>
						{store.people[params.theid].eye_color}
					</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

/*Single.propTypes = {
	match: PropTypes.object
};*/
