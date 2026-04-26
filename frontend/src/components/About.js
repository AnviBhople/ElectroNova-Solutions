import React from "react";
function About() {
	const [active, setActive] = React.useState(0);

	const pageStyle = {
		background: "linear-gradient(135deg, #0a1a3a, #0f2c5c)",
		color: "#ffffff",
		paddingTop: "140px",
		fontFamily: "Orbitron",
		textAlign: "center",
	};

	const sectionStyle = {
		padding: "60px 80px",
		fontFamily: "Inter",
		textAlign: "center",
	};

	const headingStyle = {
		fontSize: "2.5rem",
		marginBottom: "20px",
		letterSpacing: "1px",
		textAlign: "center",
	};

	const textStyle = {
		color: "#cbd5e1",
		lineHeight: "1.8",
		fontSize: "16px",
		fontFamily: "Inter",
	};

	const heroStyle = {
		textAlign: "center",
		padding: "80px 20px",
	};

	const splitStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: "40px",
		flexWrap: "wrap",
		textAlign: "center",
	};

	const imageStyle = {
		width: "380px",
		borderRadius: "20px",
		boxShadow: "0 0 25px rgba(0,183,255,0.3)",
	};

	const cardContainer = {
		display: "flex",
		gap: "30px",
		flexWrap: "wrap",
	};

	const cardStyle = {
		flex: "1",
		minWidth: "280px",
		padding: "25px",
		borderRadius: "15px",
		background: "rgba(255,255,255,0.05)",
		backdropFilter: "blur(10px)",
		fontFamily: "Inter",
		transition: "0.3s",
	};

	const listStyle = {
		marginTop: "15px",
		fontFamily: "Inter",
	};

	const ctaStyle = {
		textAlign: "center",
		padding: "80px 20px",
		fontFamily: "Inter",
	};

	const buttonStyle = {
		marginTop: "20px",
		padding: "12px 30px",
		background: "#007bff",
		border: "none",
		borderRadius: "8px",
		color: "#fff",
		fontSize: "16px",
		fontFamily: "Inter",
		cursor: "pointer",
	};

	return (
		<div style={pageStyle}>
			<section style={heroStyle}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "15px",
					}}>
					<i
						className="bi bi-person-circle"
						style={{ fontSize: "42px", color: "#00bfff" }}></i>
					<h1 style={{ fontSize: "3.5rem" }}>About Us</h1>
				</div>
				<p style={textStyle}>
					Empowering innovation through Robotics, AI, IoT, and future-ready
					education.
				</p>
			</section>

			<section style={sectionStyle}>
				<h2 style={headingStyle}>Who We Are</h2>
				<p style={textStyle}>
					ElectroNova System is a leading organization dedicated to advancing
					Robotics, Artificial Intelligence (AI), Internet of Things (IoT), and
					STEM & STEAM education. We provide high-quality robotics kits,
					training solutions, and lab setup services designed to promote
					hands-on learning and innovation.
				</p>
			</section>

			{/* 🔹 WHAT WE DO */}
			<section style={{ ...sectionStyle, ...splitStyle }}>
				<div>
					<h2 style={headingStyle}>What We Do?</h2>
					<p style={textStyle}>
						We design and deliver innovative learning solutions that bring
						technology and creativity together. Our focus is on empowering
						students, educators, and institutions through advanced tools,
						training, and infrastructure.
					</p>

					<ul style={listStyle}>
						<li> Robotics Kits & Tools</li>
						<li> Training Programs & Workshops</li>
						<li> Lab Setup Services</li>
						<li> Internship & Project-Based Learning</li>
					</ul>
				</div>

				<img src="/images/robot-arm.png" alt="robot" style={imageStyle} />
			</section>
			{/* 🔹 WHAT YOU WILL LEARN */}
			<section style={sectionStyle}>
				<h2 style={headingStyle}>What You Will Learn</h2>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "20px",
						flexWrap: "wrap",
						marginTop: "30px",
					}}>
					{[
						"Robotics ",
						"Artificial Intelligence & ML",
						"IoT & Smart Technologies",
						"Innovation & Project Building",
					].map((item, index) => (
						<button
							key={index}
							onClick={() => setActive(index)}
							style={{
								padding: "12px 25px",
								borderRadius: "30px",
								border: "1px solid #00bfff",
								background: active === index ? "#00bfff" : "transparent",
								color: active === index ? "#000" : "#fff",
								cursor: "pointer",
								transition: "all 0.3s ease",
								transform:
									active === index ? "translateY(-6px)" : "translateY(0)",
								boxShadow:
									active === index ? "0 8px 20px rgba(0,183,255,0.6)" : "none",
								fontFamily: "Inter",
							}}>
							{item}
						</button>
					))}
				</div>
			</section>

			{/* 🔹 OUR IMPACT */}
			<section style={sectionStyle}>
				<h2 style={headingStyle}>Our Impact</h2>
				<p style={textStyle}>
					We collaborate with private institutions, government schools, and Atal
					Tinkering Labs (ATLs) to establish world-class innovation labs. Our
					goal is to inspire creativity, problem-solving, and technological
					thinking from an early stage.
				</p>
			</section>

			{/* 🔹 MISSION & VISION */}
			<section style={sectionStyle}>
				<div style={cardContainer}>
					<div style={cardStyle}>
						<h3>Our Mission</h3>
						<p style={textStyle}>
							To empower students and institutions with practical,
							future-focused technological education.
						</p>
					</div>

					<div style={cardStyle}>
						<h3>Our Vision</h3>
						<p style={textStyle}>
							To create a generation of innovators and technology leaders
							through experiential learning.
						</p>
					</div>
				</div>
			</section>

			{/* 🔹 WHY US */}
			<section style={sectionStyle}>
				<h2 style={headingStyle}>Why Choose Us</h2>
				<ul>
					<li> Hands-on, project-based learning</li>
					<li> Industry-relevant training</li>
					<li>Innovation-focused approach</li>
					<li> Real-world exposure</li>
					<li> Customized solutions</li>
				</ul>
			</section>

			{/* 🔹 CTA */}
			<section style={ctaStyle}>
				<h2>Let’s Build the Future Together</h2>
				<button style={buttonStyle}>Contact Us</button>
			</section>
		</div>
	);
}

export default About;
