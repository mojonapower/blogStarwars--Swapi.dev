import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../component/button";
const CardPeople = props => {
	const id = props.id;
	let heart = "\u2665";
	const { store, actions } = useContext(Context);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://i.pinimg.com/originals/5d/04/7a/5d047a62a40ce67ede42ff1cfa4ddca1.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="">
				<h5 className="card-title">{props.objeto.name}</h5>

				<Link to={`/persona/${id}`}>
					<Button />
				</Link>
				<Link onClick={() => actions.addFavorite(props.objeto.name, "persona")}>
					<label type="button" className="btn btn-outline-danger float-right mr-5">
						{heart}
					</label>
				</Link>
			</div>
		</div>
	);
};

CardPeople.propTypes = {
	objeto: PropTypes.object,
	id: PropTypes.number
};
export default CardPeople;
