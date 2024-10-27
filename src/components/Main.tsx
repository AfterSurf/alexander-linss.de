import React from 'react';
import Impressum  from "./Impressum"
import LandingPage from "./LandingPage"
import styles from "./Page.module.css"

type MainInputProps = {
    showImpressum: boolean,
	setShowImpressum: Function
}

const Main = ({showImpressum,setShowImpressum}:MainInputProps) => 
{
	return (
		<>
			{showImpressum ? <Impressum showImpressum={!showImpressum} setShowImpressum={setShowImpressum}/> : <></>}
			<main className={styles.mainStyle}>
				<LandingPage />
			</main>
		</>
	);
}

export default Main;