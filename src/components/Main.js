import React from 'react';
import Impressum  from "./Impressum"
import LandingPage from "./LandingPage"
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