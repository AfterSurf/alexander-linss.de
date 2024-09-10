import "./Aufgabe.css";

const aufgabe = (props) => {
  const { title, description, img, link2project } = props;

  return (
    <div>
      <h1 className="aufgabenTitle">{title}</h1>
      <img className="aufgabenImage" src={img} />
      <p className="aufgabenText">{description}</p>
    </div>
  );
};

export default aufgabe;
