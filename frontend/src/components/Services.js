import React, { useState } from "react";
import serviceImg1 from "./images/serviceImg1.png";
import serviceImg2 from "./images/serviceImg2.png";
import serviceImg3 from "./images/serviceImg3.png";

function Services() {
	const [openIndex, setOpenIndex] = useState(null);

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
	};

	const faqStyle = {
		background: "rgba(255,255,255,0.05)",
		padding: "20px",
		borderRadius: "10px",
		marginBottom: "15px",
		fontFamily: "Inter",
		cursor: "pointer",
	};

	const answerStyle = {
		marginTop: "10px",
		color: "#bcc4cf",
		fontSize: "14px",
	};

	const services = [
		{
			title: "Robotics Kits & Training",
			img: serviceImg1,
		},
		{
			title: "AI & IoT Education",
			img: serviceImg2,
		},
		{
			title: "STEM & STEAM Programs",
			img: serviceImg3,
		},
		{
			title: "Lab Setup Solutions",
			img: "URL_FOR_LABS",
		},
		{
			title: "Internship & Skill Development",
			img: "URL_FOR_INTERNSHIP",
		},
		{
			title: "Technical Support & Maintenance",
			img: "URL_FOR_SUPPORT",
		},
		{
			title: "Workshops & Innovation Events",
			img: "URL_FOR_WORKSHOPS",
		},
	];

	const faqs = [
		{
			q: "What services do you offer?",
			a: "We specialize in customized white-label solutions, turning your ideas into fully developed products tailored to your requirements. Alongside this, we work with government schools and private colleges to deliver workshops and training programs and provide B2B services by supplying robotics kits in bulk for industrial and institutional needs.",
		},
		{
			q: "Do you work with schools and institutions?",
			a: "Yes, we collaborate with institutions and schools through tender-based programs. Once a tender is approved by the relevant authorities, we deliver our services in accordance with the specified requirements, ensuring quality and compliance at every stage.",
		},
		{
			q: "Do you offer customized training or products?",
			a: "Absolutely, we design customized kits and training modules based on your needs.",
		},
		{
			q: "How can I contact you?",
			a: "You can reach us via phone, email, or WhatsApp from the contact page.",
		},
		{
			q: "What are your business hours?",
			a: "We operate Monday to Saturday from 9:00 AM to 6:00 PM.",
		},
		{
			q: "What kind of training kits do you offer and are they beginner friendly?",
			a: "We offer beginner to advanced level kits with guided learning modules.",
		},
	];

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="text-center mb-5">
					<h1 style={{ fontFamily: "Orbitron", marginTop: "40px" }}>
						Services We Provide
					</h1>
					<p style={para}>
						Empowering innovation through robotics, AI and hands-on learning.
					</p>
				</div>
				<div className="row mb-5">
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
									style={{ borderRadius: "10px" }}
								/>
								<h5 style={{ fontFamily: "Inter", fontSize: "x-large" }}>
									{service.title}
								</h5>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mb-4">
					<h2 style={{ fontFamily: "Orbitron" }}>FAQs</h2>
				</div>
				<div className="row">
					{faqs.map((faq, index) => (
						<div className="col-12" key={index}>
							<div
								style={faqStyle}
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}>
								<strong>
									{faq.q}
									{openIndex === index ? "▲" : "▼"}
								</strong>
								{openIndex === index && <p style={answerStyle}>{faq.a}</p>}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
