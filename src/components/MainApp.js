import React from "react";
import mainImg1 from "./images/mainImg.png";

function MainApp() {
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
	};

	const headingStyle = {
		fontSize: "52px",
		marginBottom: "20px",
	};

	const subHeadingStyle = {
		fontSize: "20px",
		marginBottom: "20px",
		color: "#cbd5f5",
	};

	const paragraphStyle = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#94a3b8",
	};

	const buttonContainer = {
		marginTop: "30px",
		display: "flex",
		gap: "15px",
	};

	const primaryBtn = {
		background: "#3b82f6",
		border: "none",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "white",
		cursor: "pointer",
		fontWeight: "500",
	};

	const secondaryBtn = {
		background: "transparent",
		border: "1px solid #3b82f6",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "#3b82f6",
		cursor: "pointer",
	};

	const rightStyle = {
		display: "flex",
		justifyContent: "center",
	};

	const imageWrapper = {
		background: "rgba(255,255,255,0.05)",
		padding: "20px",
		borderRadius: "20px",
		backdropFilter: "blur(10px)",
	};

	const imageStyle = {
		width: "400px",
		maxWidth: "100%",
		borderRadius: "12px",
		filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))",
	};

	return (
		<div style={heroStyle}>
			<div style={leftStyle}>
				<h1 style={headingStyle}>ELECTRONOVA SYSTEMS</h1>

				<h3 style={subHeadingStyle}>
					Engineering smart electronics and IoT solutions for a connected future
				</h3>

				<p style={paragraphStyle}>
					Building reliable electronic solutions with modern technology. Focused
					on innovation, functionality and real-world applications.
				</p>

				<div style={buttonContainer}>
					<button style={primaryBtn}>Explore Products</button>
					<button style={secondaryBtn}>Learn More</button>
				</div>
			</div>

			<div style={rightStyle}>
				<div style={imageWrapper}>
					<img src={mainImg1} alt="Electronics visual" style={imageStyle} />
				</div>
			</div>
		</div>
	);
}

export default MainApp;
