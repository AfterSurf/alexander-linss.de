import React from 'react';
import { Home,  Contact, Impressum } from '..';
import '../Page.css';

const PRIVAT = (props) => 

{
	if(props.showImpressum ) {
		return (
		<>
			<Impressum setShowImpressum={props.setShowImpressum}/>
			<main className="mainStyle">
				<Home />
				<Contact />
			</main>

		</>
		);
	} else {
		return (
			<main className="mainStyle">
				<Home />
				<Contact />
			</main>
		);
	}

}


export default PRIVAT;
