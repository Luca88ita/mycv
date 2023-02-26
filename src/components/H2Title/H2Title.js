import "./H2Title.css";

const H2Title = (props) => {
  if (props.children != null)
    return <h2 className="H2Title">{props.children}</h2>;
};

export default H2Title;
