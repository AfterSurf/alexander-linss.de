import React from 'react';
import Impressum  from "./impressum/Impressum"
import LandingPage from "./landingPage/LandingPage"
import styles from "./Page.module.css"
import { getImpressumProps } from "./types/types"


const Main = ({showImpressum,setShowImpressum}:getImpressumProps) => 
{
	return (
		<>
			{showImpressum ? <Impressum showImpressum={showImpressum} setShowImpressum={setShowImpressum}/> : <></>}
			<main className={styles.mainStyle}>
				<LandingPage />
			</main>
		</>
	);
}

export default Main;