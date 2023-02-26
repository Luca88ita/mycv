import CVCompetences from "../CVCompetences/CVCompetences";
import CVDrivingLicense from "../CVDrivingLicense/CVDrivingLicense";
import CVHeader from "../CVHeader/CVHeader";
import CVHobbies from "../CVHobbies/CVHobbies";
import CVPersonalInfo from "../CVPersonalInfo/CVPersonalInfo";
import "./CVLeftSide.css";

function CVLeftSide() {
  return (
    <>
      <div className="CVLeftSide">
        <CVHeader />
        <CVPersonalInfo />
        <CVCompetences />
        <CVDrivingLicense />
        <CVHobbies />
      </div>
    </>
  );
}

export default CVLeftSide;
