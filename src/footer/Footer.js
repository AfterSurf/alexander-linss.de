import "./Footer.css";

export default function footer(props) {
  return (
    <>
      <div className="footer">
        <p
          onClick={() => {
            props.setShowImpressum(!props.showImpressum);
          }}
         className="impressum">
          Impressum
        </p>
        <p> &copy; 2024 Alexander Linß</p>
      </div>
    </>
  );
}
