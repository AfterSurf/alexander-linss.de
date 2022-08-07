import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav('About');
	console.log("about")
	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div>
				<h3>ABOUT</h3>
				<div className={"aboutBorder"}>
					<p>IT</p>
					<p>|</p>
					<p>PRIVAT</p>
				</div>
			</div>
		</section>
	);
};

export default About;
