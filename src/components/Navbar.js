// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "./images/ElectroNova_logo_trial.png";
// import bgImage from "./images/background_img.jpg";

// function Navbar() {
// 	const navbarStyle = {
// 		backgroundImage: `url(${bgImage})`,
// 		backgroundSize: "cover",
// 		backgroundPosition: "center",
// 		backgroundRepeat: "no-repeat",
// 		position: "fixed",
// 		top: 0,
// 		left: 0,
// 		width: "100%",
// 		zIndex: 1000,
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "space-between",
// 		padding: "10px 40px", // reduced height
// 		fontFamily: "Georgia, serif",
// 	};

// 	const leftSection = {
// 		display: "flex",
// 		alignItems: "center",
// 		gap: "30px",
// 	};

// 	const logoStyle = {
// 		height: "100px", // 🔥 reduced from 125px
// 		width: "auto",
// 		borderRadius: "5px",
// 	};

// 	const linkContainer = {
// 		display: "flex",
// 		gap: "25px",
// 	};

// 	const linkStyle = {
// 		fontSize: "18px",
// 		color: "#fff",
// 		textDecoration: "none",
// 	};

// 	const iconContainer = {
// 		display: "flex",
// 		gap: "20px",
// 	};

// 	const iconStyle = {
// 		fontSize: "20px",
// 		color: "#fff",
// 		cursor: "pointer",
// 	};

// 	return (
// 		<nav style={navbarStyle}>
// 			{/* Left side */}
// 			<div style={leftSection}>
// 				<Link to="/">
// 					<img src={logo} alt="Logo" style={logoStyle} />
// 				</Link>

// 				<div style={linkContainer}>
// 					<Link to="/about" style={linkStyle}>
// 						About
// 					</Link>
// 					<Link to="/products" style={linkStyle}>
// 						Products
// 					</Link>
// 					<Link to="/contact-us" style={linkStyle}>
// 						Contact
// 					</Link>
// 					<Link to="/our-achievements" style={linkStyle}>
// 						Achievements
// 					</Link>
// 					<Link to="/training-kits" style={linkStyle}>
// 						Training Kits
// 					</Link>
// 				</div>
// 			</div>

// 			{/* Right side */}
// 			<div style={iconContainer}>
// 				<a href="mailto:electronovasystemspvtltd@gmail.com">
// 					<i className="fa-regular fa-envelope" style={iconStyle}></i>
// 				</a>
// 				<a
// 					href="https://www.linkedin.com/company/electronova-systems-pvt-ltd"
// 					target="_blank"
// 					rel="noreferrer">
// 					<i className="fa-brands fa-linkedin" style={iconStyle}></i>
// 				</a>
// 			</div>
// 		</nav>
// 	);
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/ElectroNova_logo_trial.png";

function Navbar() {
	const navbarStyle = {
		// backgroundColor: "#3C4858",
		backgroundColor: "transparent",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
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
