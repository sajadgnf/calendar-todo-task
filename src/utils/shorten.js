const shorter = (text) => {
  let splitText = text.split(" ");

  splitText = splitText.map((text) => {
    if (text === "seconds") text = " sec";
    if (text === "minutes") text = "m";
    if (text === "hours" || text === "hour") text = "h";
    if (text === "in") text = "";
    if (text === "a" && splitText[1] === "few") text = "";
    if (text === "an" || text === "a") text = "1";

    return text;
  });

  const newText = `${splitText[0]}${splitText[1]}${
    !splitText[0] ? splitText[2] : ""
  }`;
  return newText;
};

export default shorter;
