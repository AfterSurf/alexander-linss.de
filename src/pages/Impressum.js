import React from 'react';
import './Impressum.css';


const Impressum = (props) => {

    if(props.impressumState === true) {
                return (
                    <div>
                        <div className="overlay_d_0"> 
                            <div className="overlay-content_d">
                            </div>
                        </div>
                    </div>
                )
    } else {
                return (
                    <div>
                        <div  className="overlay_desktop impressum"> 
                            <div className="impressumStyles">
                                <div className="closeImpressum" onClick={() => props.setShowImpressum(false)}>x</div> 
                                <div>IMPRESSUM</div>
                                <br></br>
                                <em>verantwortlich für alle inhalte dieser internetseite:</em>
                                <br></br>
                                <br></br>
                                <div>Mister KAI</div>
                                <div>KAIstraße 99</div>
                                <div>20251 KAIburg</div>
                                <br></br>
                                <div>+49 131 2040000</div>
                                <div>schöne@adresse-desing.eu</div>
                                <br></br>
                                <br></br>
                                <em>haftung für links: </em>
                                <br></br>
                                <br></br>
                                <div>unser angebot enthält links zu externen webseiten dritter, auf deren inhalte</div>
                                <div>wir keinen einfluss haben. deshalb können wir für diese fremden inhalte auch keine</div>
                                <div>gewähr übernehmen. für die inhalte der verlinkten seiten ist stets der jeweilige</div>
                                <div>anbieter oder betreiber der seiten verantwortlich. die verlinkten seiten wurden</div>
                                <div>zum zeitpunkt der verlinkung auf mögliche  rechtsverstöße überprüft. rechtswidrige</div>
                                <div>inhalte waren zum zeitpunkt der verlinkung nicht erkennbar. eine permanente</div>
                                <div>inhaltliche kontrolle der verlinkten seiten ist jedoch ohne konkrete anhaltspunkte</div>
                                <div>einer rechtsverletzung nicht zumutbar. bei bekanntwerden von rechtsverletzungen</div>
                                <div>werden wir derartige links umgehend entfernen.</div>
                                <br></br>
                                <div><em>gestaltung:</em> Gesta lte</div>
                                <div>schöne@adresse-desing.eu</div>
                                <br></br>
                                <div><em>programmierung:</em> alexander linß</div>
                                <div>alexanderlinss@web.de</div>
                                <br></br>
                                <div><em>fotografie:</em> Foto GRaf</div>
                                <div>schöne@adresse-desing.eu</div>
                                <br></br>
                                <div>&#9400; 2021 Alexander Linß</div>
                            </div>
                        </div>
                    </div>
                )
    }
}

export default Impressum; 