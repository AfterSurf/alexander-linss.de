import React from 'react';
import { Home, About, Contact, Impressum } from './';
import './Page.css';

const Main = (props) => 

{
	if(props.showImpressum ) {
		return (
		<>
			<Impressum setShowImpressum={props.setShowImpressum}/>
			<main className="mainStyle">
				<Home />
				<About />
				<Contact />
			</main>

		</>
		);
	} else {
		return (
			<main className="mainStyle">
				<Home />
				<About />
				<Contact />
			</main>
		);
	}

}


export default Main;
