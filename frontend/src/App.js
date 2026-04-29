import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainApp from "./components/MainApp";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import Training from "./components/Training";
import Team from "./components/Team";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainApp />} />
				<Route path="/products" element={<Products />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/our-achievements" element={<Achievements />} />
				<Route path="/our-services" element={<Services />} />
				<Route path="/training-kits" element={<Training />} />
				<Route path="/team" element={<Team />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
