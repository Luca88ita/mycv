import "./ALink.css";

function linkCheck(link, target, rel, type) {
  const temp = [];
  if (type === "mailto" || type === "tel") {
    temp.push(
      <a
        key={"ALink" + link + target + rel + type}
        className="ALink"
        href={type + ":" + link}
        target={null}
        rel={rel}
      >
        {link}
      </a>
    );
  } else {
    if (rel === null || rel === "") {
      temp.push(
        <a
          key={"ALink" + link + target + rel + type}
          className="ALink"
          href={link}
          target={target}
        >
          {link}
        </a>
      );
    } else {
      temp.push(
        <a
          key={"ALink" + link + target + rel + type}
          className="ALink"
          href={link}
          target={target}
          rel={rel}
        >
          {link}
        </a>
      );
    }
  }
  return temp;
}

const ALink = ({ link, target, rel, type }) => {
  if (link != null) return linkCheck(link, target, rel, type);
};

export default ALink;
