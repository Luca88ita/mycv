import "./H6Title.css";

const H6Title = (props) => {
  if (props.children != null)
    return <h6 className="H6Title">{props.children}</h6>;
};

export default H6Title;
