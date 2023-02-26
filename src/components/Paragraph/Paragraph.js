import "./Paragraph.css";

const Paragraph = (props) => {
  if (props.children != null)
    return <p className="Paragraph">{props.children}</p>;
};

export default Paragraph;
