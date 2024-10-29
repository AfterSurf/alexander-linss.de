import { useNav } from "../../customHooks/useNav";
import styles from "./itStyles.module.css";

import Points from "./Points/Points";
import Why from "./Points/Why";
import FavTech from "./Points/FavTech";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeItContainer">
      <div className={styles.PointsContainer}>

        {textComponent}
          <Points
            className={styles.gridElement2}
            title="Warum diese Seite"
            alternativTitle="Darum diese Seite"
            Component={<Why />}
          />
          <Points
            className={styles.gridElement3}
            title="Wo bin ich zu Hause"
            alternativTitle="Hier bin ich zu Hause"
            Component={<FavTech />}
          />
        
        {profileComponent4}
        {profileComponent5}
      </div>
    </section>
  );
};

var text = `Das ist der technischen Teil der Website.`;
text = "AAA";

function getTextComponent(text: string, className: string) {
return (  <>
  <pre className={styles[className]}>
    <h3>{text}</h3>
  </pre>
</>)
}


const textComponent = getTextComponent("Technics","gridElement1")

const profileComponent4 = (
  <>
    <div className={styles["gridElement4"]}>
      <pre>
        <div className={styles.socialmedia}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/alexander-lin%C3%9F/"
          >
            Linked:in
          </a>
        </div>
      </pre>
    </div>
  </>
);

const profileComponent5 = (
  <>
    <div className={styles["gridElement5"]}>
      <pre>
        <div className={styles.socialmedia}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AfterSurf/"
          >
            Git:Hub
          </a>
        </div>
      </pre>
    </div>
  </>
);


export default Home;
