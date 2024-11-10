import { useNav } from "../../customHooks/useNav";
import style from "./Home.module.scss"

import Points from "./points/Points";
import Why from "./points/Why";
import FavTech from "./points/FavTech";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeItContainer" className={style.homeItContainer}>
      <div className={style.PointsContainer}>
        {textComponent}
        <Points
          className={style.gridElement2}
          title="Warum diese Seite"
          alternativTitle="Darum diese Seite"
          Component={<Why />}
        />
        <Points
          className={style.gridElement3}
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

const textComponent = (
  <>
    <div className={style.gridElement1}>
      <h3>Technics</h3>
    </div>
  </>
);

const profileComponent4 = (
  <>
    <div className={style.gridElement4}>
      {/* <pre> */}
        <div className={style.socialmedia}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/alexander-lin%C3%9F/"
          >
            Linked:in
          </a>
        </div>
      {/* </pre> */}
    </div>
  </>
);

const profileComponent5 = (
  <>
    <div className={style.gridElement5}>
      {/* <pre> */}
        <div className={style.socialmedia}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AfterSurf/"
          >
            Git:Hub
          </a>
        </div>
      {/* </pre> */}
    </div>
  </>
);

export default Home;
