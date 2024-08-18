import "./Aufgabe.css";

const aufgabe = (props) => {
  const { title, description, img, link2project } = props;

  return (
    <div>
      <h2>{title}</h2>
      <img className="aufgabenImage" src={img} />
      <p>{description}</p>
    </div>
  );
};

export default aufgabe;
