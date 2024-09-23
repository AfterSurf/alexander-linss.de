import React from 'react';
import { LandingPage, Impressum } from './';
// import './Page.css';
import styles from "./Page.module.css"

const Main = (props) => 
{
	return (
	<>
		{props.showImpressum ? <Impressum setShowImpressum={props.setShowImpressum}/> : <></>}
		<main className={styles.mainStyle}>
			<LandingPage />
		</main>
	</>
	);
}

export default Main;