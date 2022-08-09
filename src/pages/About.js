import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import { Link } from "react-router-dom";

const About = () => {
	const aboutRef = useNav('About');
	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div>
				<div className={"aboutBorder"}>
					<Link to="/it">IT</Link>
					<p className={"aboutStrich"} >|</p>
					<Link to="/privat">PRIVAT</Link>
				</div>
			</div>
		</section>
	);
};

export default About;

