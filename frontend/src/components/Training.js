import React from "react";
import trainingkit1 from "./images/trainingkit1.png";
import trainingkit2 from "./images/trainingkit2.png";
import trainingkit3 from "./images/trainingkit3.png";

function Training() {
	const services = [
		{
			title: " ARDUINO KIT",
			img: trainingkit1,
		},
		{
			title: "IOT KIT",
			img: trainingkit2,
		},
		{
			title: "ROBOTIC KIT",
			img: trainingkit3,
		},
	];

	const sectionStyle = {
		background:
			"radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95))",
		color: "white",
		minHeight: "100vh",
		paddingTop: "120px",
		paddingBottom: "60px",
	};

	const cardStyle = {
		background: "rgba(255,255,255,0.05)",
		padding: "20px",
		borderRadius: "15px",
		backdropFilter: "blur(10px)",
		fontFamily: "Inter",
		textAlign: "center",
		height: "100%",
		transition: "all 0.3s ease",
		cursor: "pointer",
	};

	const para = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#bcc4cf",
		fontFamily: "Inter",
		textAlign: "center",
	};

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="text-center mb-5">
					<h1 style={{ fontFamily: "Orbitron", marginTop: "40px" }}>
						Our Training Kits
					</h1>
					<br />
					<p
						style={{
							fontWeight: "normal",
							fontSize: "20px",
							fontFamily: "Inter",
						}}>
						Fueling the Next Generation of Innovators
					</p>

					<p style={para}>
						Ignite curiosity through the power of hands-on creation. Our
						training kits are meticulously designed to transform complex
						subjects—Robotics, Artificial Intelligence, and the Internet of
						Things—into tangible, exciting learning experiences. We provide the
						tools, the logic, and the inspiration; your students provide the
						imagination to build a smarter future.{" "}
					</p>
				</div>

				<div className="row mb-5 justify-content-center">
					{services.map((service, index) => (
						<div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
							<div
								style={cardStyle}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "scale(1.05)";
									e.currentTarget.style.boxShadow =
										"0 10px 30px rgba(0,0,0,0.3)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "scale(1)";
									e.currentTarget.style.boxShadow = "none";
								}}>
								<img
									src={service.img}
									alt={service.title}
									className="img-fluid mb-3"
									style={{
										borderRadius: "10px",
										t: "220px",
										width: "100%",
										objectFit: "cover",
									}}
								/>
								<h5 style={{ fontFamily: "Orbitron", fontSize: "xx-large" }}>
									{service.title}
								</h5>
							</div>
						</div>
					))}
				</div>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default Training;
