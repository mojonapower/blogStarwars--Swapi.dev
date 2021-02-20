import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
//componentes
import CardPeople from "../component/cardPeople";
import CardPlanet from "../component/cardPlanet";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
	}, []);

	console.log(store.peoples);

	return (
		<div className=" container">
			<hr />
			<h3>People</h3>
			<div className="align-items-center" text-center mt5>
				<div className="d-flex flex-row p-4" style={{ width: "1000px", overflow: "auto" }}>
					{store.peoples.map((people, i) => {
						return (
							<div key={i}>
								<CardPeople objeto={people} id={i} />
							</div>
						);
					})}
				</div>
			</div>

			<hr />
			<h3>Planets</h3>
			<div className="align-items-center" text-center mt5>
				<div className="d-flex flex-row p-4" style={{ width: "1000px", overflow: "auto" }}>
					{store.planets.map((planet, i) => {
						return (
							<div key={i}>
								<CardPlanet objeto={planet} id={i} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
