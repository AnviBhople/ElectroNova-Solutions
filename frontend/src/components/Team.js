import React from "react";
import bgImg from "./images/background_img.jpg";
import arjunImg from "./images/arjunImg.png";
import shreyashImg from "./images/shreyashImg.png";
import mohImg from "./images/mohImg.png";

function Team() {
	const sectionStyle = {
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		color: "white",
		minHeight: "100vh",
		padding: "80px 0",
	};

	const cardStyle = {
		backgroundColor: "rgba(255, 255, 255, 0.05)",
		backdropFilter: "blur(10px)",
		borderRadius: "20px",
		border: "1px solid rgba(255, 255, 255, 0.1)",
		padding: "20px",
		textAlign: "center",
		transition: "all 0.3s ease",
	};

	const imgStyle = {
		width: "200px",
		height: "200px",
		borderRadius: "50%",
		objectFit: "cover",
		marginBottom: "15px",
		border: "3px solid #3b82f6",
		boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
	};

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="text-center mb-5">
					<h1
						style={{
							fontFamily: "Orbitron",
							letterSpacing: "4px",
							fontWeight: "bold",
							marginTop: "100px",
						}}>
						OUR CORE TEAM
					</h1>
				</div>

				<div className="row g-4 justify-content-center mb-5">
					<div className="col-10 col-sm-6 col-lg-3">
						<div style={{ ...cardStyle, border: "2px solid #3b82f6" }}>
							<img
								src={arjunImg}
								alt="Arjun Mahore"
								style={imgStyle}
								className="mx-auto d-block"
							/>{" "}
							<h4 style={{ fontFamily: "Orbitron", fontSize: "1.1rem" }}>
								ARJUN MAHORE
							</h4>
							<p className="text-primary fw-bold small">CEO & FOUNDER</p>
						</div>
					</div>
					<div className="col-10 col-sm-6 col-lg-3">
						<div style={{ ...cardStyle, border: "2px solid #3b82f6" }}>
							<img
								src={shreyashImg}
								alt="Shreyash Gawande"
								style={imgStyle}
								className="mx-auto d-block"
							/>{" "}
							<h4 style={{ fontFamily: "Orbitron", fontSize: "1.1rem" }}>
								SHREYASH GAWANDE
							</h4>
							<p className="text-primary fw-bold small">CEO & FOUNDER</p>
						</div>
					</div>
				</div>

				<div className="row justify-content-center mb-5">
					<div className="col-10 col-sm-6 col-lg-3 text-center">
						<div style={cardStyle}>
							<img
								src={mohImg}
								alt="Moh. Akhtar"
								style={imgStyle}
								className="mx-auto d-block"
							/>
							<h4 style={{ fontFamily: "Orbitron", fontSize: "1.1rem" }}>
								MOH. ATHAR
							</h4>
							<p className="text-info small">MANAGING DIRECTOR</p>
						</div>
					</div>
				</div>

				<div className="row g-3 justify-content-center">
					{[
						{ name: "KOMAL AUJEKAR", role: "HR MANAGER" },
						{ name: "KOMAL SUNE", role: "ACCOUNTANT HEAD" },
						{ name: "YUVRAJ DESHMUKH", role: "R & D HEAD" },
						{ name: "SANSKAR WANVE", role: "GRAPHIC DESIGNER" },
						{ name: "SUHANI AUJEKAR", role: "HARDWARE TESTING" },
						{ name: "SHREYASH KORDE", role: "EMBEDDED DEVELOPER" },
						{ name: "AKSHAY THAKARE", role: "MARKETING CO-ORDINATOR" },
						{ name: "ROSHAN JUMALE", role: "SOCIAL MEDIA SPECIALIST" },
					].map((member, index) => (
						<div className="col-6 col-md-4 col-lg-3" key={index}>
							<div style={{ ...cardStyle, padding: "15px" }}>
								<div
									style={{ ...imgStyle, width: "100px", height: "100px" }}
									className="mx-auto bg-secondary"></div>
								<h6
									style={{ fontFamily: "Orbitron", fontSize: "0.9rem" }}
									className="mb-1">
									{member.name}
								</h6>
								<p
									className="text-white-50 small mb-0"
									style={{ fontSize: "0.7rem" }}>
									{member.role}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Team;
