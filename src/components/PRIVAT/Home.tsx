import { useNav } from "../../customHooks/useNav";
import style from "./Home.module.scss"

// quote: https://www.goodreads.com/quotes/558213-learn-the-rules-like-a-pro-so-you-can-break

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeContainerPrivat" className={style.homeContainerPrivat}>
      <div className={style.titel}>Privat</div>
      {/* <pre> */}
        <div className={style.homePrivatText}>
          <div className={style.quote}>
            <h4 className={style.aboutText}>"Learn the rules like a pro,</h4>
            <h4 className={style.aboutText}>
              so you can break them like an artist."
            </h4>
            <h4 className={style.aboutTextAutor}>- P. Picasso</h4>
          </div>
          <div className={style.ownWords}>
            <p>Gesagt, getan.</p>
            <br></br>
            <p>Das Coden gibt mir die Freiheit kreativ zu arbeiten und etwas zu erschaffen.</p>
            <p>Umso besser man wird, um so mehr Möglichkeiten eröffnen sich.</p>
            <p>Das motiviert nicht stehen zu bleiben und sich engagiert weiter zu entwickeln.</p>
            <br></br>
            <p>Frontend bedeutet für mich Technik plus Design.</p>
          </div>
        </div>
      {/* </pre> */}
    </section>
  );
};

export default Home;
