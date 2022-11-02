const shorter = (text) => {
  const splitText = text.split(" ");
  let time = "";
  let key = "";

  splitText[0] === "an" || splitText[0] === "a"
    ? (time = 1)
    : (time = splitText[0]);
  splitText[1] === "few" ? (time = "few ") : (time = splitText[0]);

  if (splitText[1] === "minutes") key = "m";
  if (splitText[2] === "seconds") key = "sec";
  if (splitText[1] === "hours" || splitText[1] === "hour") key = "h";

  const newText = `${time}${key}`;

  return newText;
};

export default shorter;
