import "./CVFooter.css";

function CVFooter() {
  const privacyPolicy =
    "Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base al D. Lgs. 196/2003, coordinato con il D. Lgs. 101/2018, e al Regolamento UE 2016/679 ai fini della ricerca e selezione del personale.";

  return (
    <>
      <footer className="CVFooter">
        <div>{privacyPolicy}</div>
      </footer>
    </>
  );
}

export default CVFooter;
