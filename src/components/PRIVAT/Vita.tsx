import { useNav } from "../../customHooks/useNav";
import style from "./Vita.module.scss";
import image from "../../pictures/alex_bw.jpg";

const Vita = () => {
  const contactRef = useNav("Vita");
  return (
    <section ref={contactRef} id="vitaContainerPrivat" className={style.vitaContainerPrivat}>
      <div>
        <div className={style.vitaText}>
          <h3>Vita</h3>
          <p>2024 immer noch verliebt in JavaScript und das Web </p>
          <p>2023 Frontend in e-commerce</p>
          <p>2022 Frontend in Healthtech </p>
          <p>
            seit 2021 Vollzeit Frontend (react.js, next.js, vue.js, html und css
            )
          </p>
          <p>2019 Vollzeit Webdevelopement (Node.js, docker, ...)</p>
          <br></br>
          <p>2019 Master of Science - Business Information Systems </p>
          <p>
            2016 Bachelor - Business Information Systems (Coding since 2014 -
            etliche Werkstudentenjobs seit dem, react.js, node.js, java etc.){" "}
          </p>
          <p>2014 Bachelor - Sports and Economics</p>
        </div>
      </div>

      <img className={style.vitaPic} src={image} alt="unsplash-img" />
    </section>
  );
};

export default Vita;