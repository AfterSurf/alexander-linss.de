import styles from "./Aufgabe.module.css";

type AufgabenInputProps = {
  title: string,
  description: string, 
  img: string,
  link2project: string
}

const Aufgabe = ({ title, description, img, link2project }: AufgabenInputProps) => {

  return (
    <div  className={styles.aufgabe}>
      <h1 className={styles.aufgabenTitle}>{title}</h1>
      <a href={link2project} target="_blank" rel="noreferrer">
        <img className={styles.aufgabenImage} src={img} alt="symbolic"/>
      </a>
      <p className={styles.aufgabenText}>{description}</p>
    </div>
  );
};

export default Aufgabe;
