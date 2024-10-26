import { useNav } from "../../customHooks/useNav";
import styles from "./privatStyles.module.css";

// quote: https://www.goodreads.com/quotes/558213-learn-the-rules-like-a-pro-so-you-can-break

const Home = () => {
  const homeRef = useNav("Home");
  return (
    // id richtig benamen homePrivatContainer
    <section ref={homeRef} id="homeContainerPrivat">
      <div className={styles.titel}>Privat</div>
      <pre>
        <div className={styles.homePrivatText}>
          <div className={`${styles.quote} ${styles.titel2}`}>
            <h4 className={styles.aboutText}>"Learn the rules like a pro,</h4>
            <h4 className={styles.aboutText}>
              so you can break them like an artist."
            </h4>
            <h4 className={styles.aboutTextAutor}>- P. Picasso</h4>
          </div>
          <div className={`${styles.ownWords} ${styles.titel2}`}>
            <p>Gesagt, getan.</p>
            <br></br>
            <p>Das Coden gibt mir die Freiheit kreativ zu arbeiten und etwas zu erschaffen.</p>
            <p>Umso besser man wird, um so mehr Möglichkeiten eröffnen sich.</p>
            <p>Das motiviert nicht stehen zu bleiben und sich engagiert weiter zu entwickeln.</p>
            <br></br>
            <p>Frontend bedeutet für mich Technik plus Design.</p>
          </div>
        </div>
      </pre>
    </section>
  );
};

export default Home;
