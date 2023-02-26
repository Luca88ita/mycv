import "./OrizontalBars.css";

const OrizontalBars = ({ level, max }) => {
  let printBar = [];
  let i = 0;
  while (i < max) {
    i < level
      ? printBar.push(<div key={printBar + " " + i + "/" + max} className="fullBar"></div>)
      : printBar.push(<div key={printBar + " " + i + "/" + max} className="emptyBar"></div>);
    i++;
  }
  return <div className="OrizontalBars">{printBar}</div>;
};

export default OrizontalBars;
