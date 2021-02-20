import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";

export const Persona = props => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		actions.loadPeople();
	}, []);
	return (
		<div className="container">
			{store.peoples.map((people, i) => {
				if (i == id) {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title"> {people.name}</h5>
								<p className="card-text">
									<ul>
										<li>{people.height}</li>
										<li>{people.mass}</li>
										<li>{people.gender}</li>
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
