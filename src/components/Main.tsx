import React from 'react';
import Impressum  from "./Impressum"
import LandingPage from "./LandingPage"
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