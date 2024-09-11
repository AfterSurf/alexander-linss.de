import "./Aufgabe.css";

const Aufgabe = (props) => {
  const { title, description, img, link2project } = props;

  return (
    <div>
      <h1 className="aufgabenTitle">{title}</h1>
      <a href={link2project} target="_blank">
        <img className="aufgabenImage" src={img} />
      </a>
      <p className="aufgabenText">{description}</p>
    </div>
  );
};

export default Aufgabe;
