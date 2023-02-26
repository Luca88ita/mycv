import CVExperience from "../CVExperience/CVExperience";
import "./CVRightSide.css";

function CVRightSide() {
  return (
    <div className="CVRightSide">
      <CVExperience title={"Qualcosa su di me"} label={"intro"} />
      <CVExperience title={"Esperienze lavorative"} label={"jobs"} />
      <CVExperience title={"Educazione"} label={"edu"} />
    </div>
  );
}

export default CVRightSide;
