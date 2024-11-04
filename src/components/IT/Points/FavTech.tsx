import styles from "./Points.module.scss";

const FavTech = () => {
  return (
    <div className={styles.favTech_text}>
      <div>Am liebsten arbeite ich aktuell mit: </div>
      <ul>
        <li>React.js / Next.js</li>
        <li>Node.js</li>
        <li>CSS modules</li>
        <li>Figma</li>
      </ul>
      <br/>
      <div>Hier eine Website von mir:<a href="https://licht-musik.eu/" target="_blank" rel="noreferrer">LICHT</a></div>
    </div>
  );
};

export default FavTech;
