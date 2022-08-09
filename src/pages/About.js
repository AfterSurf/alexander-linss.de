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
					{/* <p>IT</p> */}
					<Link to="/it">IT</Link>
					<p className={"aboutStrich"} >|</p>
					{/* <p>PRIVAT</p> */}
					<Link to="/test">PRIVAT</Link>
				</div>
			</div>
		</section>
	);
};


const sendPage = (dir) => {

}
export default About;

