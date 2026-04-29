import React from "react";
import trainingkit1 from "./images/trainingkit1.png";
import trainingkit2 from "./images/trainingkit2.png";
import trainingkit3 from "./images/trainingkit3.png";
import robowork1 from "./images/robowork1.png";
import robowork2 from "./images/robowork2.png";
import robowork3 from "./images/robowork3.png";
import threedwork1 from "./images/3dwork1.png";
import threedwork2 from "./images/3dwork2.png";
import threedwork3 from "./images/3dwork3.png";
import androidwork1 from "./images/androidwork1.png";
import androidwork2 from "./images/androidwork2.png";
import androidwork3 from "./images/androidwork3.png";
import aeromodel_work1 from "./images/aeromodel_work1.png";
import aeromodel_work2 from "./images/aeromodel_work2.png";
import aeromodel_work3 from "./images/aeromodel_work3.png";
import drone1 from "./images/drone1.png";
import drone2 from "./images/drone2.png";
import drone3 from "./images/drone3.png";
import drone4 from "./images/drone4.png";

function Training() {
	const trainingkit = [
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
					<br />
					<br />
					<br />
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
					{trainingkit.map((service, index) => (
						<div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
							<div
								style={cardStyle}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "scale(1.05)";
									e.currentTarget.style.boxShadow =
										"0 10px 30px rgb(243, 239, 239)";
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

				<div className="row mb-5 justify-content-center">
					<h1
						style={{
							fontFamily: "Orbitron",
							marginTop: "40px",
							textAlign: "center",
						}}>
						Robotic Workshop
					</h1>

					<br />
					<br />
					<br />
					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={robowork1}
								alt="Robotics"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={robowork2}
								alt="AI & IoT"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={robowork3}
								alt="STEM"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>
				</div>

				<br />
				<br />
				<br />
				<br />
				<div className="row mb-5 text-center">
					<h1 style={{ fontFamily: "Orbitron", textAlign: "center" }}>
						3D Printing Workshop
					</h1>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={threedwork1}
								alt="3d workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={threedwork2}
								alt="3D Workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={threedwork3}
								alt="Robotics"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className="row mb-5 text-center">
					<h1 style={{ fontFamily: "Orbitron", textAlign: "center" }}>
						Android Development Workshop
					</h1>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={androidwork1}
								alt="android dev workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={androidwork2}
								alt="android dev Workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={androidwork3}
								alt="android dev workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />

				<div className="row mb-5 text-center">
					<h1 style={{ fontFamily: "Orbitron", textAlign: "center" }}>
						Aeromodelling Workshop in IIT Kanpur{" "}
					</h1>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={aeromodel_work1}
								alt="aeromodelling workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={aeromodel_work2}
								alt="aeromodelling Workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={aeromodel_work3}
								alt="aeromodelling workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>
				</div>

				<br />
				<br />
				<br />
				<br />

				<div className="row mb-5 text-center">
					<h1 style={{ fontFamily: "Orbitron", textAlign: "center" }}>
						Mini Drone Workshop at Engineering College
					</h1>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={drone1}
								alt="mini drone workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={drone2}
								alt="Mini drone Workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={drone3}
								alt="mini drone workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.07)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<img
								src={drone4}
								alt="mini drone workshop"
								className="img-fluid mb-3"
								style={{
									borderRadius: "10px",
									height: "220px",
									width: "100%",
									objectFit: "cover",
									boxShadow: "0 5px 10px rgb(243, 239, 239)",
								}}
							/>
						</div>
					</div>
				</div>

				<br />
				<br />
			</div>
		</div>
	);
}

export default Training;
