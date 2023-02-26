import "./H5Title.css";

const H5Title = (props) => {
  if (props.children != null)
    return <h5 className="H5Title">{props.children}</h5>;
};

export default H5Title;
