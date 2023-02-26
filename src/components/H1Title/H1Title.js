import "./H1Title.css";

const H1Title = (props) => {
  if (props.children != null) {
    return <h1 className="H1Title">{props.children}</h1>;
  }
};

export default H1Title;
