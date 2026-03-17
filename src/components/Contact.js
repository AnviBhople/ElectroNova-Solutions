import React from "react";

function Contact() {
	const heroStyle = {
		display: "grid",
		gridTemplateColumns: "1.2fr 1fr",
		alignItems: "center",
		padding: "120px 10%",
		gap: "60px",
		color: "white",
		background: "radial-gradient(circle at top right, #1e3a8a, #020617)",
	};

	const leftStyle = {
		maxWidth: "550px",
		border: "2px solid black",
	};
	const rightStyle = {
		display: "flex",
		justifyContent: "center",
		marginTop: "20px",
		border: "2px solid black",
	};
	return (
		<>
			<div className="hero-section" style={heroStyle}>
				<div className="leftStyle" style={leftStyle}>
					<h1>Call</h1>
				</div>
				<div className="rightStyle" style={rightStyle}></div>
			</div>
		</>
	);
}

export default Contact;
