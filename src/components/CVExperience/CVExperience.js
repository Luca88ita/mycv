import "./CVExperience.css";
import Collapsible from "react-collapsible";
import H2Title from "../H2Title/H2Title";
import H5Title from "../H5Title/H5Title";
import H6Title from "../H6Title/H6Title";
import Paragraph from "../Paragraph/Paragraph";
import myData from "../jsons/expData.json";
import ULList from "../ULList/ULList";

const CVExperience = ({ title, label }) => {
  const collapsedElements = [];
  let keyId = 0;

  myData.forEach((element) => {
    const temp = [];

    // adds all the elements having the same label in a temp array
    if (element.title === label) {
      temp.push(
        <div key={"exp-content" + keyId++}>
          <H5Title>{element.h5Title}</H5Title>
          <H6Title title={element.h6Title} />
          <Paragraph>{element.paragraph}</Paragraph>
        </div>
      );
    }

    // adds the temp array elements to the list in case of a list
    collapsedElements.push(
      <div key={"exp" + keyId++}>
        {element.li === true && element.title === label ? (
          <ULList key={"ULList" + temp.toString}>{temp}</ULList>
        ) : (
          temp
        )}
      </div>
    );
  });

  return (
    <Collapsible
      trigger={<H2Title>{"+  " + title}</H2Title>}
      triggerWhenOpen={<H2Title>{"-  " + title}</H2Title>}
      open={true}
    >
      {collapsedElements}
    </Collapsible>
  );
};

export default CVExperience;
