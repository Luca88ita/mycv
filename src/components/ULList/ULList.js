import "./ULList.css";

const ULList = (props) => {
  if (props.children != null) {
    return (
      <ul className="ULList">
        <li className="ULListLi">{props.children}</li>
      </ul>
    );
  }
};

export default ULList;
