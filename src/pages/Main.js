import React from 'react';
import { About, Impressum } from './';
import './Page.css';

const Main = (props) => 
{
		return (
		<>
			{props.showImpressum ? <Impressum setShowImpressum={props.setShowImpressum}/> : <></>}
			<main className="mainStyle">
				<About />
			</main>

		</>
		);

}

export default Main;