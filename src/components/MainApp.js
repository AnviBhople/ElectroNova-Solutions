import React from "react";
import { Link } from "react-router-dom";
import mainImg1 from "./images/mainImg1.png";
import mainImg2 from "./images/mainImg2.png";
import mainImg3 from "./images/mainImg3.png";

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
		fontFamily: "Orbitron",
	};

	const subHeadingStyle = {
		fontSize: "20px",
		marginBottom: "20px",
		color: "#cbd5f5",
		fontFamily: "Inter",
	};

	const paragraphStyle = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#94a3b8",
		fontFamily: "Inter",
	};

	const buttonContainer = {
		marginTop: "30px",
		display: "flex",
		gap: "15px",
	};

	const primaryBtn = {
		background: "#3b82f6",
		fontFamily: "Inter",

		border: "none",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "white",
		cursor: "pointer",
		fontWeight: "500",
	};

	const secondaryBtn = {
		background: "transparent",
		fontFamily: "Inter",

		border: "1px solid #3b82f6",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "#3b82f6",
		cursor: "pointer",
	};

	const rightStyle = {
		display: "flex",
		justifyContent: "center",
		marginTop: "20px",
	};

	const imageWrapper = {
		background: "rgba(255,255,255,0.05)",
		padding: "20px",
		borderRadius: "20px",
		backdropFilter: "blur(10px)",
	};
	const secondaryHeads = {
		fontFamily: "Orbitron",
	};
	const imageStyle = {
		width: "400px",
		maxWidth: "100%",
		borderRadius: "12px",
		marginBottom: "50px",
		filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))",
	};

	const para = {
		fontSize: "18px",
		wordSpacing: "5px",
		fontFamily: "Inter",
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
					<Link to="/products">
						<button style={primaryBtn}>Explore Products</button>
					</Link>
					<Link to="/about">
						<button style={secondaryBtn}>Learn More</button>{" "}
					</Link>
				</div>
			</div>
			<div style={rightStyle}>
				<div style={imageWrapper}>
					<img src={mainImg1} alt="Electronics visual" style={imageStyle} />
				</div>
			</div>
			<div style={rightStyle}>
				<img src={mainImg2} alt="" style={imageStyle} />
			</div>
			<div style={leftStyle}>
				<h1 style={secondaryHeads}>What We Do</h1>
				<br />
				<p style={para}>
					At Electronova System, we design and deliver innovative learning
					solutions that bring technology and creativity together. Our focus is
					on empowering students, educators, and institutions through advanced
					educational tools, training, and infrastructure in the fields of
					Robotics, AI, IoT, STEM & STEAM Education
				</p>
			</div>
			<div style={rightStyle}>
				<img src={mainImg3} alt="" style={imageStyle} />
			</div>
			<div style={leftStyle}>
				<h1 style={secondaryHeads}>Why Us?</h1>
				<br />
				<p style={para}>
					lectronova System stands out for its commitment to innovation,
					quality, and handson learning. We offer complete Robotics, AI, IoT,
					STEM & STEAM education solutions — from lab setup to training and
					certification. With expert trainers, industry-driven curriculum, and
					durable learning kits, we ensure students gain practical, future-ready
					skills. Our strong partnerships with private, government, and Atal
					Tinkering Labs reflect our reliability and excellence in delivering
					impactful education.
				</p>
			</div>
			//services //testimonials ask them for //mobile responsiveness
		</div>
	);
}

export default MainApp;
