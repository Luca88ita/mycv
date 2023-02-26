import "./CVDrivingLicense.css";
import H2Title from "../H2Title/H2Title";
import H6Title from "../H6Title/H6Title";
import licenses from "../jsons/drivingLicenses.json";
import Collapsible from "react-collapsible";

function CVDrivingLicense() {
  let printLicenses = [];
  let commaCounter = 0;

  licenses.forEach((element) => {
    if (element.type != null) {
      commaCounter++;
      printLicenses.push(
        <div key={element.key}>
          {commaCounter === 1 ? null : <span className="commas">,</span>}
          <H6Title>{element.type}</H6Title>
        </div>
      );
    }
  });

  return (
    <Collapsible
      trigger={<H2Title>+ Patenti di guida</H2Title>}
      triggerWhenOpen={<H2Title>- Patenti di guida</H2Title>}
      open={true}
    >
      <div id="drivingLicenses">{printLicenses}</div>
    </Collapsible>
  );
}

export default CVDrivingLicense;
