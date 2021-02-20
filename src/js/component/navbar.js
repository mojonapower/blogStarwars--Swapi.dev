import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);
	return (
		<nav className="navbar navbar-light bg-light mb-3 ml-5">
			<Link to="/">
				<img
					src="https://www.flaticon.com/svg/vstatic/svg/1087/1087191.svg?token=exp=1613836092~hmac=e2b4fd749c86c6325d68d3d06189f634"
					width="80px"
				/>
				<span className="navbar-brand mb-0 h1">React Starwars</span>
			</Link>
			<div className="mr-5">
				<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle caret>Favoritos</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header>Tus Personas</DropdownItem>
						<DropdownItem text>Favorites</DropdownItem>
						<DropdownItem divider />
						<DropdownItem header>Tus planetas</DropdownItem>
						<DropdownItem text>Favorites</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</nav>
	);
};
