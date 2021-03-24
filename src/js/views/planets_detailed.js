import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetailed = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4"> {store.planets[params.theid].name}</h1>
			<hr className="my-4" />
			<div className="card mb-3" style={{ maxWidth: "540px;" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
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
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
						<strong>Name: </strong>
						{store.planets[params.theid].name}
					</div>
					<div className="col-sm-2">
						<strong>Climate: </strong>
						{store.planets[params.theid].climate}
					</div>
					<div className="col-sm-2">
						<strong>Population: </strong>
						{store.planets[params.theid].population}
					</div>
					<div className="col-sm-2">
						<strong>Orbital_Period: </strong>
						{store.planets[params.theid].orbital_period}
					</div>
					<div className="col-sm-2">
						<strong>Rotation_Period</strong>
						{store.planets[params.theid].rotation_period}
					</div>
					<div className="col-sm-2">
						<strong>Diameter: </strong>
						{store.planets[params.theid].diameter}
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
