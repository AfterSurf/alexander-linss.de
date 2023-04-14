import "./Footer.css";

export default function footer(props) {
  return (
    <>
      <div className="footer">
        <p
          onClick={() => {
            props.setShowImpressum(!props.showImpressum);
          }}
        >
          Impressum
        </p>
        <p> &copy; 2022 Alexander Linß</p>
      </div>
    </>
  );
}
