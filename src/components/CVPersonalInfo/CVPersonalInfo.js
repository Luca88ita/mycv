import Collapsible from "react-collapsible";
import ALink from "../ALink/ALink";
import H2Title from "../H2Title/H2Title";
import H5Title from "../H5Title/H5Title";
import Paragraph from "../Paragraph/Paragraph";
import "./CVPersonalInfo.css";
import personalInfos from "../jsons/personalInfos.json";

function CVPersonalInfo() {
  const printPersonalInfo = [];
  var lines;
  personalInfos.sort(function (a, b) {
    return a.key - b.key;
  });

  personalInfos.forEach((element) => {
    lines = element.paragraph;
    const printContacts = [];
    let i = 0;
    if (lines != null) {
      printPersonalInfo.push(
        <div key={"PersInfo" + element.key + i++}>
          <div>
            <H5Title>{element.h5Title}</H5Title>
            {element.type === "text" ? (
              <Paragraph>{element.paragraph}</Paragraph>
            ) : (
              <>
                {lines.forEach((line) => {
                  printContacts.push(
                    <div key={"linkId " + element.key + i++}>
                      <Paragraph>
                        <ALink
                          link={line}
                          target={"_blank"}
                          rel={null}
                          type={element.type}
                        />
                      </Paragraph>
                    </div>
                  );
                })}
                {printContacts}
              </>
            )}
          </div>
        </div>
      );
    }
  });

  return (
    <Collapsible
      trigger={<H2Title>+ Informazioni personali</H2Title>}
      triggerWhenOpen={<H2Title>- Informazioni personali</H2Title>}
      open={true}
    >
      <div>{printPersonalInfo}</div>
    </Collapsible>
  );
}

export default CVPersonalInfo;
