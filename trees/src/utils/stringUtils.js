export const addPeriods = (nodeName, level) => {
  const [firstLetter, ...restLettersArray] = nodeName;
  const restLetters = restLettersArray.join("");
  const periodString = [...Array(level)].map((_, index) => ".").join("");

  return `${firstLetter}${periodString}${restLetters}`;
};
