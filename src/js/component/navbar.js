import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand text-light btn btn-dark mb-0 mx-2 h1">Contact Book</span>
			</Link>
			<div className="ml-auto">
				<Link to="/newcontact ">
					<button className="btn btn-secondary mx-2">New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
