import React from "react";
import { useNav } from "../../customHooks/useNav";
import styles from "./privatStyles.module.css";



// quote: https://www.goodreads.com/quotes/558213-learn-the-rules-like-a-pro-so-you-can-break

const Home = () => {
  const homeRef = useNav("Home");
  return (
    // id richtig benamen homePrivatContainer
    <section ref={homeRef} id="homeContainerPrivat">
      <pre>
        <div className={styles.homePrivatText}>


          <div>
          <h4 className={styles.aboutText}>"Learn the rules like a pro,</h4>
          <h4 className={styles.aboutText}>so you can break them like an artist."</h4>
          <h4 className={styles.aboutTextAutor}>- P. Picasso</h4>
        </div>

          <p>Gesagt, getan.</p>
          <br></br>
          <p>Das Coden gibt Freiheiten, gleichzeitig zu Recht</p>
          <p>etablierte Standards und best practices.</p>
          <p>
            Es gibt einem die Möglichkeit etwas zu erschaffen. 
          </p>
          <br></br>
          <p>
            Frontend bedeutet für mich Technik + Design. 
          </p>
        </div>
      </pre>
      {/* styles from page.css */}

    </section>
  );
};

export default Home;
