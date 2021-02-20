import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../component/button";
const CardPlanet = props => {
	let heart = "\u2665";
	const id = props.id;
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://static.vecteezy.com/system/resources/previews/000/190/846/original/planet-illustrations-vector.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="">
				<h5 className="card-title">{props.objeto.name}</h5>

				<Link to={`/planeta/${id}`}>
					<Button />
				</Link>

				<Link onClick={() => actions.addFavorite(props.objeto.name, "planeta")}>
					<label type="button" className="btn btn-outline-danger float-right mr-5">
						{heart}
					</label>
				</Link>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	objeto: PropTypes.object,
	id: PropTypes.number
};
export default CardPlanet;
