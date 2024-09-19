import React from 'react';
import { LandingPage, Impressum } from './';
import './Page.css';

const Main = (props) => 
{
	return (
	<>
		{props.showImpressum ? <Impressum setShowImpressum={props.setShowImpressum}/> : <></>}
		<main className="mainStyle">
			<LandingPage />
		</main>
	</>
	);
}

export default Main;