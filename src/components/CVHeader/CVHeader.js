import "./CVHeader.css";
import H1Title from "../H1Title/H1Title";
import H2Title from "../H2Title/H2Title";
import elementsToChange from "../jsons/elementsChangedByTheme.json";
import ThemeChangeButton from "../themesChanger/ThemesChangerButton";
import user from "../jsons/headerData.json";
import personalInfo from "../jsons/personalInfos.json";

function CVHeader() {
  const theme1 = "light-theme";
  const theme2 = "dark-theme";
  const elementList = elementsToChange;
  let age = ageControl(personalInfo);

  return (
    <>
      <header className="CVHeader">
        <ThemeChangeButton
          firstTheme={theme1}
          secondTheme={theme2}
          elementList={elementList}
        >
          <img id="proPic" src={user.profPicLink} alt="profile picture" />
        </ThemeChangeButton>
        <div>
          <H1Title>
            {user.firstName} {user.lastName}
          </H1Title>
          <H2Title>{age} anni</H2Title>
        </div>
      </header>
    </>
  );
}

export default CVHeader;

function ageControl(table) {
  var ageDifMs = Date.now() - convertBd(table);
  var ageDate = new Date(ageDifMs);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age;
}

function convertBd(table) {
  let bdArray = [];
  let bdDate;
  let bdString;
  table.forEach((element) => {
    if (element.h5Title === "Data di nascita") {
      bdArray = element.paragraph.split(" ");
      bdString =
        getMonthFromString(bdArray[1]) + "/" + bdArray[0] + "/" + bdArray[2];
      bdDate = new Date(Date.parse(bdString));
    }
  });
  return bdDate;
}

function getMonthFromString(month) {
  switch (month) {
    case "Gennaio":
      return 1;
    case "Febbraio":
      return 2;
    case "Marzo":
      return 3;
    case "Aprile":
      return 4;
    case "Maggio":
      return 5;
    case "Giugno":
      return 6;
    case "Luglio":
      return 7;
    case "Agosto":
      return 8;
    case "Settembre":
      return 9;
    case "Ottobre":
      return 10;
    case "Novembre":
      return 11;
    case "Dicembre":
      return 12;
    default:
      break;
  }
}
