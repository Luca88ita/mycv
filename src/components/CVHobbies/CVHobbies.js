import Collapsible from "react-collapsible";
import H2Title from "../H2Title/H2Title";
import H6Title from "../H6Title/H6Title";
import "./CVHobbies.css";
import hobbies from "../jsons/hobbies.json";

function CVHobbies() {
  let printHobbies = [];
  let commaCounter = 0;

  hobbies.forEach((element) => {
    if (element.type != null) {
      commaCounter++;
      printHobbies.push(
        <div key={element.key}>
          {commaCounter === 1 ? null : <span className="commas">,</span>}
          <H6Title>{element.type}</H6Title>
        </div>
      );
    }
  });

  return (
    <Collapsible
      trigger={<H2Title>+ Hobbies</H2Title>}
      triggerWhenOpen={<H2Title>- Hobbies</H2Title>}
      open={true}
    >
      <div id="hobbies">{printHobbies}</div>
    </Collapsible>
  );
}

export default CVHobbies;
