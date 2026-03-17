import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/ElectroNova_logo_trial.png";

function Navbar() {
	const navbarStyle = {
		// backgroundColor: "#3C4858",
		backgroundColor: "transparent",
		padding: "15px 30px",
		fontFamily: "Georgia, serif",
		position: "fixed",
		backgroundColor: "transparent",
		padding: "20px 30px",
		fontFamily: "Georgia, serif",
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		zIndex: "1000",
	};

	const mainLogoStyle = {
		height: "125px",

		height: "125px",
		width: "auto",
		borderRadius: "0px",
		width: "auto",
		borderRadius: "5px",
	};

	const navLinkStyle = {
		fontSize: "20px",
		margin: "0 20px",
		color: "#fff",
		cursor: "pointer",
	};

	const iconStyle = {
		fontSize: "24px",
		color: "#fff",
		marginLeft: "20px",
		cursor: "pointer",
	};
	return (
		<>
			<nav className="navbar navbar-expand-lg" style={navbarStyle}>
				&ensp;
				<Link to="/">
					<img
						src={logo}
						alt="ElectroNova Systems logo"
						style={mainLogoStyle}
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/about"
								style={navLinkStyle}>
								&ensp;About
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/products" style={navLinkStyle}>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact-us" style={navLinkStyle}>
								Contact
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/our-achievements"
								style={navLinkStyle}>
								Achievements
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/training-kits"
								style={navLinkStyle}>
								Training Kits
							</Link>
						</li>
					</ul>
					<div className="d-flex">
						<Link
							to="mailto:electronovasystemspvtltd@gmail.com"
							target="_blank"
							rel="noreferrer">
							<i className="fa-regular fa-envelope" style={iconStyle}></i>
						</Link>
						&ensp;&ensp;
						<Link
							to="https://www.linkedin.com/company/electronova-systems-pvt-ltd"
							target="_blank"
							rel="noreferrer">
							<i className="fa-brands fa-linkedin" style={iconStyle}></i>
						</Link>
						&ensp;&ensp;
						<Link
							to="https://www.instagram.com/electronovasystem/"
							target="_blank"
							rel="noreferrer">
							<i className="fa-brands fa-instagram" style={iconStyle}></i>
						</Link>
						&ensp;&ensp;
						<Link to="https://twitter.com" target="_blank" rel="noreferrer">
							<i className="fa-brands fa-x-twitter" style={iconStyle}></i>
						</Link>
						&ensp;&ensp;
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
