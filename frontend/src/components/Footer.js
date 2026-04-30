import { Link } from "react-router-dom";
import bgImg from "./images/background_img.jpg";

function Footer() {
	const footerStyle = {
		padding: "40px 20px",
		fontFamily: "Georgia, serif",
		color: "#fff",
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
	};

	const centerText = {
		textAlign: "center",
		marginBottom: "30px",
		fontSize: "14px",
	};

	const iconStyle = {
		fontSize: "22px",
		color: "white",
		cursor: "pointer",
	};

	const sectionTitle = {
		marginBottom: "15px",
		marginRight: "20px",
	};

	const socialIcons = {
		display: "flex",
		gap: "15px",
		marginTop: "10px",
		fontSize: "20px",
	};

	return (
		<footer style={footerStyle}>
			<div style={centerText}>©2025 Electronova Systems</div>

			<div className="container">
				<div className="row text-center text-md-start">
					<div className="col-12 col-md-6 mb-4">
						<h4 style={sectionTitle}>Our Location</h4>

						<p>
							<i className="fa-solid fa-map-pin" style={iconStyle}></i> House
							No. 45/2, At Post Gajanan Township, <br />
							Kathora, Amravati - 444602, Maharashtra
						</p>
					</div>

					<div className="col-12 col-md-6 mb-4 text-md-end">
						<h4 style={sectionTitle}>Reach Us</h4>

						<p>
							<i className="fa-regular fa-envelope" style={iconStyle}></i>{" "}
							electronova@gmail.com
						</p>

						<div
							style={socialIcons}
							className="justify-content-center justify-content-md-end">
							<Link
								to="https://www.linkedin.com/company/electronova-systems-pvt-ltd"
								target="_blank"
								rel="noreferrer">
								<i className="fa-brands fa-linkedin" style={iconStyle}></i>
							</Link>

							<Link
								to="https://www.instagram.com/electronovasystem/"
								target="_blank"
								rel="noreferrer">
								<i className="fa-brands fa-instagram" style={iconStyle}></i>
							</Link>

							<Link to="https://twitter.com" target="_blank" rel="noreferrer">
								<i className="fa-brands fa-x-twitter" style={iconStyle}></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
