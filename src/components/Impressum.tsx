import styles from "./Impressum.module.css"

const text =
<>
    <div className={styles.textLines}>
        <div>unser angebot enthält links zu externen webseiten dritter, auf deren inhalte</div>
        <div>wir keinen einfluss haben. deshalb können wir für diese fremden inhalte auch keine</div>
        <div>gewähr übernehmen. für die inhalte der verlinkten seiten ist stets der jeweilige</div>
        <div>anbieter oder betreiber der seiten verantwortlich. die verlinkten seiten wurden</div>
        <div>zum zeitpunkt der verlinkung auf mögliche  rechtsverstöße überprüft. rechtswidrige</div>
        <div>inhalte waren zum zeitpunkt der verlinkung nicht erkennbar. eine permanente</div>
        <div>inhaltliche kontrolle der verlinkten seiten ist jedoch ohne konkrete anhaltspunkte</div>
        <div>einer rechtsverletzung nicht zumutbar. bei bekanntwerden von rechtsverletzungen</div>
        <div>werden wir derartige links umgehend entfernen.</div>
    </div>
    <div className={styles.textFlow}>
        unser angebot enthält links zu externen webseiten dritter, auf deren inhalte
        wir keinen einfluss haben. deshalb können wir für diese fremden inhalte auch keine
        gewähr übernehmen. für die inhalte der verlinkten seiten ist stets der jeweilige
        anbieter oder betreiber der seiten verantwortlich. die verlinkten seiten wurden
        zum zeitpunkt der verlinkung auf mögliche  rechtsverstöße überprüft. rechtswidrige
        inhalte waren zum zeitpunkt der verlinkung nicht erkennbar. eine permanente
        inhaltliche kontrolle der verlinkten seiten ist jedoch ohne konkrete anhaltspunkte
        einer rechtsverletzung nicht zumutbar. bei bekanntwerden von rechtsverletzungen
        werden wir derartige links umgehend entfernen.
    </div>
</>

type ImpressumInputProps = {
    showImpressum: boolean,
    setShowImpressum: Function
}

const Impressum = ({showImpressum,setShowImpressum}:ImpressumInputProps) => {

    if(showImpressum === true) {
                return (
                    <div>
                        <div className={styles.overlay_d_0}> 
                        </div>
                    </div>
                )
    } else {
                return (
                    <div>
                        <div  className={`${styles.overlay_desktop} ${styles.impressum}`}> 
                            <div className={styles.impressumStyles}>
                               <div className={styles.titleLine}> 
                                IMPRESSUM
                                <div className={styles.closeImpressum} onClick={() => setShowImpressum(false)}>x</div> 
                                </div>
                                <br></br>
                                <em>verantwortlich für alle inhalte dieser internetseite:</em>
                                <br></br>
                                <br></br>
                                <div>alexander linß</div>
                                <div>wiedebachstraße 12</div>
                                <div>04277 leipzig</div>
                                <br></br>
                                <div>+49 157 78955216</div>
                                <div>alexanderlinss@web.de</div>
                                <br></br>
                                <br></br>
                                <em>haftung für links: </em>
                                <br></br>
                                <br></br>
                                {text}
                                <br></br>
                                <br></br>
                                <div><em>programmierung:</em></div>
                                <div> alexander linß</div>
                                <br></br>
                                <div><em>fotografien:</em></div>
                                <div>franz schumann</div>
                                <div>daniel kipshagen</div>
                                <br></br>
                                <div>&#9400; 2024 Alexander Linß</div>
                            </div>
                        </div>
                    </div>
                )
    }
}

export default Impressum; 