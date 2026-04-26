import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
		padding: "30px",
		borderRadius: "15px",
		backdropFilter: "blur(10px)",
		fontFamily: "Inter",
		textAlign: "center",
	};

	const buttonStyle = {
		background: "#3b82f6",
		border: "none",
		padding: "10px 20px",
		borderRadius: "8px",
		color: "white",
		cursor: "pointer",
		fontFamily: "Inter",
		fontSize: "larger",
		marginRight: "10px",
		marginTop: "10px",
	};

	const inputStyle2 = {
		width: "400px",
		padding: "10px",
		marginBottom: "15px",
		borderRadius: "8px",
		border: "none",
		outline: "none",
		fontFamily: "Inter",
	};
	const inputStyle = {
		width: "100%",
		padding: "10px",
		marginBottom: "15px",
		borderRadius: "8px",
		border: "none",
		outline: "none",
		fontFamily: "Inter",
	};
	const para = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#bcc4cf",
		fontFamily: "Inter",
	};

	const addStyle = {
		fontFamily: "Inter",
		fontSize: "larger",
	};

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="text-center mb-5">
					<h1 style={{ fontFamily: "Orbitron", marginTop: "20px" }}>
						Contact Us
					</h1>
					<p style={para}>We’d love to hear from you. Reach out anytime.</p>
				</div>

				<div className="row mb-5">
					<div className="col-12 col-md-6 mb-4">
						<div style={cardStyle}>
							<h3 style={{ fontFamily: "Orbitron" }}>Get In Touch</h3>
							<br />
							<p>📞 +91 7821826676</p>
							<br />
							<p>📞 +91 7796179037</p>
							<br />
							<p>📧 electronova@gmail.com</p>

							<Link to="tel:+917821826676">
								<button style={buttonStyle}>Call Now</button>
							</Link>

							<Link
								to="https://wa.me/917821826676"
								target="_blank"
								rel="noreferrer">
								<button style={buttonStyle}>WhatsApp</button>
							</Link>

							<Link to="mailto:electronova@gmail.com">
								<button style={buttonStyle}>Email Us</button>
							</Link>
						</div>
					</div>

					<div className="col-12 col-md-6 mb-4">
						<div style={cardStyle}>
							<h3 style={{ fontFamily: "Orbitron" }}>Our Address</h3>
							<br />
							<p style={addStyle}>
								📍House No. 45/2, Gajanan Township, Kathora, <br />
								Amravati - 444602, Maharashtra, India
							</p>
							<br />
							<h3 style={{ fontFamily: "Orbitron" }}>Business Hours</h3>
							<p style={addStyle}>
								Monday – Saturday <br />
								9:00 AM – 6:00 PM
							</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<div style={cardStyle}>
							<h3 style={{ fontFamily: "Orbitron" }}>Send Us a Message</h3>
							<br />
							<form>
								<input
									type="text"
									placeholder="Your Name"
									className="form-control mb-3"
									style={inputStyle2}
								/>

								<input
									type="email"
									placeholder="Your Email"
									className="form-control mb-3"
									style={inputStyle2}
								/>

								<textarea
									placeholder="Your Message"
									rows="5"
									className="form-control mb-4"
									style={inputStyle}></textarea>

								<button type="submit" style={buttonStyle}>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
