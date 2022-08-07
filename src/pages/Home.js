import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');
	console.log("home")
	return (
		<section ref={homeRef} id='homeContainer'>
			<div className="homeText">
				<h3>HOME</h3>
				<p>Hier bist du zu hause</p>
				<p>Hier bist du zu hause</p>
				<p>Hier bist du zu hause</p>
				<p>Hier bist du zu hause</p>
			</div>
		</section>
	);
};

export default Home;
