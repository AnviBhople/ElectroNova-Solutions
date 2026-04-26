import React from "react";
import { Link } from "react-router-dom";
import mainImg1 from "./images/mainImg1.png";
import mainImg2 from "./images/mainImg2.png";
import mainImg3 from "./images/mainImg3.png";
import bgImg from "./images/background_img.jpg";

function MainApp() {
	const sectionStyle = {
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		color: "white",
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
		flexWrap: "wrap",
	};

	const primaryBtn = {
		background: "#3b82f6",
		border: "none",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "white",
		cursor: "pointer",
		fontWeight: "500",
		fontFamily: "Inter",
	};

	const secondaryBtn = {
		background: "transparent",
		border: "1px solid #3b82f6",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "#3b82f6",
		cursor: "pointer",
		fontFamily: "Inter",
	};

	const imageWrapper = {
		background: "rgba(255,255,255,0.05)",
		padding: "20px",
		borderRadius: "20px",
		backdropFilter: "blur(10px)",
		display: "inline-block",
		marginTop: "20px",
	};

	return (
		<div className="container-fluid" style={sectionStyle}>
			<div className="container py-5" style={{ paddingTop: "110px" }}>
				<div className="row align-items-center my-5">
					<div className="col-12 col-md-6 text-center text-md-start">
						<h1 style={headingStyle}>ELECTRONOVA SYSTEMS</h1>

						<h3 style={subHeadingStyle}>
							Engineering smart electronics and IoT solutions for a connected
							future
						</h3>

						<p style={paragraphStyle}>
							Building reliable electronic solutions with modern technology.
							Focused on innovation, functionality and real-world applications.
						</p>

						<div style={buttonContainer}>
							<Link to="/products">
								<button style={primaryBtn}>Explore Products</button>
							</Link>

							<Link to="/about-us">
								<button style={secondaryBtn}>Learn More</button>
							</Link>
						</div>
					</div>

					<div className="col-12 col-md-6 text-center mt-4 mt-md-0">
						<div style={imageWrapper}>
							<img
								src={mainImg1}
								className="img-fluid"
								alt="Electronics visual"
							/>
						</div>
					</div>
				</div>

				<div className="row my-5 align-items-center">
					<div className="col-12 col-md-6 text-center">
						<div style={imageWrapper}>
							<img src={mainImg2} className="img-fluid" alt="Visual 2" />
						</div>
					</div>

					<div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
						<h1 style={{ fontFamily: "Orbitron" }}>What We Do</h1>
						<br />
						<p style={paragraphStyle}>
							At Electronova System, we design and deliver innovative learning
							solutions that bring technology and creativity together. Our focus
							is on empowering students, educators, and institutions through
							advanced educational tools, training, and infrastructure in the
							fields of Robotics, AI, IoT, STEM & STEAM Education.
						</p>
					</div>
				</div>

				<div className="row my-5 align-items-center">
					<div className="col-12 col-md-6 text-center text-md-start">
						<h1 style={{ fontFamily: "Orbitron" }}>Why Us?</h1>
						<br />
						<p style={paragraphStyle}>
							Electronova System stands out for its commitment to innovation,
							quality, and hands on learning. We offer complete Robotics, AI,
							IoT, STEM & STEAM education solutions — from lab setup to training
							and certification. With expert trainers, industry-driven
							curriculum, and durable learning kits, we ensure students gain
							practical, future-ready skills. Our strong partnerships with
							private, government, and Atal Tinkering Labs reflect our
							reliability and excellence in delivering impactful education.
						</p>
					</div>

					<div className="col-12 col-md-6 text-center mt-4 mt-md-0">
						<div style={imageWrapper}>
							<img src={mainImg3} className="img-fluid" alt="Visual 3" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainApp;
