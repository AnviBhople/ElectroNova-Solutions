import { Link } from "react-router-dom";

function Footer() {
	const footerStyle = {
		padding: "30px 40px",

		fontFamily: "Georgia, serif",
		// marginTop: "40px",
	};

	const centerText = {
		textAlign: "center",
		marginBottom: "20px",
		color: " #fff",
		fontSize: "14px",
	};
	const iconStyle = {
		fontSize: "25px",
		color: "white",
		fontWeight: "normal",
		cursor: "pointer",
	};
	const bottomSection = {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		flexWrap: "wrap",
		color: "#fff",
		gap: "380px", // controls spacing between left and right
	};

	const rightSection = {
		textAlign: "right",
	};

	const socialIcons = {
		display: "flex",
		color: " #fff",
		gap: "5px",
		marginTop: "10px",
		justifyContent: "flex-end",
		fontSize: "20px",
	};

	return (
		<footer style={footerStyle}>
			<div style={centerText}>©2025 Electronova Systems</div>

			<div style={bottomSection}>
				<div>
					<h4> &ensp;&ensp; Our Location</h4>
					<p>
						<i className="fa-solid fa-map-pin" style={iconStyle}></i> &ensp;
						House No. 45/2, At Post Gajanan Township, <br />
						&ensp;&ensp; &ensp;Kathora, Amravati- (444602), Maharashtra
					</p>
				</div>

				<div style={rightSection}>
					<h4>Reach Us &ensp;&ensp;</h4>
					<p>
						{" "}
						<i className="fa-regular fa-envelope" style={iconStyle}></i>
						&ensp;electronova@gmail.com
					</p>

					<div style={socialIcons}>
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
						&ensp;&ensp; &ensp;&ensp;
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
