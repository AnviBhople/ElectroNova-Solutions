import { Link } from "react-router-dom";

function Navbar() {
	const navbarStyle = {
		backgroundColor: "#fff",
		padding: "20px 30px",
		fontFamily: "Georgia, serif",
		position: "relative",
	};

	const mainLogoStyle = {
		height: "150px",
		width: "auto",
		borderRadius: "25px",
	};

	const navLinkStyle = {
		color: "black",
		fontSize: "20px",
		margin: "0 20px",
		fontWeight: "bold",
	};

	const searchButtonStyle = {
		borderRadius: "10px",
		fontSize: "20px",
		fontWeight: "bold",
		height: "50px",
		width: "auto",
	};

	return (
		<nav className="navbar navbar-expand-lg" style={navbarStyle}>
			{/* <Link to="/">
				<img src="" alt="ElectroNova Systems Logo" style={mainLogoStyle} />
			</Link> */}
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mx-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/about" style={navLinkStyle}>
							About
						</Link>
					</li>

					{/* <li className="nav-item">
						<Link className="nav-link" to="/blogs" style={navLinkStyle}>
							Blogs
						</Link>
					</li> */}

					{/* <li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							to="/"
							role="button"
							data-toggle="dropdown"
							style={navLinkStyle}>
							Recommendations&ensp;&ensp;
						</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" to="/books" style={navLinkStyle}>
								Books
							</Link>
							<Link className="dropdown-item" to="/videos" style={navLinkStyle}>
								Videos
							</Link>
							<Link className="dropdown-item" to="/movies" style={navLinkStyle}>
								Movies
							</Link>
						</div>
					</li> */}

					<li className="nav-item">
						<Link className="nav-link" to="/connect" style={navLinkStyle}>
							Connect
						</Link>
					</li>

					{/* <li className="nav-item">
						<Link className="nav-link" to="/submit-here" style={navLinkStyle}>
							Submit your work
						</Link>
					</li> */}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
