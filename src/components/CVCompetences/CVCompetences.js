import Collapsible from "react-collapsible";
import "./CVCompetences.css";
import competencesInfo from "../jsons/competencesData.json";
import H2Title from "../H2Title/H2Title";
import H6Title from "../H6Title/H6Title";
import OrizontalBars from "../OrizontalBars/OrizontalBars";

function CVCompetences() {
  const contents = [
    { title: "Competenze linguistiche", skill: "lang" },
    { title: "Competenze informatiche", skill: "hard" },
    { title: "Linguaggi conosciuti", skill: "prog" },
    { title: "Competenze trasversali", skill: "soft" },
  ];

  const toReturn = [];

  competencesInfo.sort(function (a, b) {
    return a.key - b.key;
  });

  let keyNr = 0;
  contents.forEach((element) => {
    toReturn.push(
      <Collapsible
        trigger={<H2Title>{"+  " + element.title}</H2Title>}
        triggerWhenOpen={<H2Title>{"-  " + element.title}</H2Title>}
        open={true}
        key={"Skilltype" + keyNr++}
      >
        <div id={element.skill}>{filterSkillsBy(element.skill)}</div>
      </Collapsible>
    );
  });

  return toReturn;
}

function filterSkillsBy(skill) {
  let skillLevelPresence = false;
  let printCompetences = [];
  let commaCounter = 0;

  competencesInfo.forEach((element) => {
    element.skillLevel === null
      ? (skillLevelPresence = true)
      : (skillLevelPresence = false);

    if (element.h6Title != null && element.skillType === skill) {
      if (skillLevelPresence === true && element.skillLevel === null)
        commaCounter++;

      printCompetences.push(
        <div key={"Skilltype " + element.key}>
          {commaCounter === 0 || commaCounter === 1 ? null : (
            <span className="commas">,</span>
          )}
          <H6Title>{element.h6Title}</H6Title>
          <div>
            {element.skillLevel != null ? (
              <OrizontalBars level={element.skillLevel} max={6} />
            ) : null}
          </div>
        </div>
      );
    }
  });
  return printCompetences;
}

export default CVCompetences;
