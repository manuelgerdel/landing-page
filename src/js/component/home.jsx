import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Gridcards from "./Gridcards.jsx";
import FooterBar from "./FooterBar.jsx";


const Home = () => {
	return (
		<>
			<Navbar />
			<Card />
			<Gridcards />
			<FooterBar />
		</>
	);
};

export default Home;
