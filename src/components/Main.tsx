import React from 'react';
import Impressum  from "./impressum/Impressum"
import LandingPage from "./landingPage/LandingPage"
import { getImpressumProps } from "./types/types"


const Main = ({showImpressum,setShowImpressum}:getImpressumProps) => 
{
	return (
		<>
			{showImpressum ? <Impressum showImpressum={showImpressum} setShowImpressum={setShowImpressum}/> : <></>}
			<main>
				<LandingPage />
			</main>
		</>
	);
}

export default Main;