import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainApp from "./components/MainApp";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainApp />} />
				<Route path="/products" element={<Products />} />
				<Route path="/contact-us" element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
