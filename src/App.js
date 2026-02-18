import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Connect from "./components/Connect";
import Services from "./components/Services";
import Training from "./components/Training";
import Achievements from "./components/Achievements";

function ElectroNova() {
	return (
		<div className="electronova">
			<Navbar />
		</div>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ElectroNova />} />
				<Route path="/" element={<Navbar />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/connect-with-us" element={<Connect />} />
				<Route path="/services" element={<Services />} />
				<Route path="/training" element={<Training />} />
				<Route path="/achievements" element={<Achievements />} />
			</Routes>
		</Router>
	);
}

export default App;
