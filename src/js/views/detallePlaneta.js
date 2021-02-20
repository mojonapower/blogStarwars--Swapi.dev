import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";

export const Planeta = props => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		actions.loadPlanet();
	}, []);
	return (
		<div className="container">
			{store.planets.map((planet, i) => {
				if (i == id) {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title"> {planet.name}</h5>
								<p className="card-text">
									<ul>
										<li>{planet.height}</li>
										<li>{planet.mass}</li>
										<li>{planet.gender}</li>
									</ul>
								</p>
								<Link to="/">Volver</Link>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
};
