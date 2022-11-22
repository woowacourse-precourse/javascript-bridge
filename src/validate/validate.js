const isUpDown = (userInput) => {
  return userInput === "U" || userInput === "D" ? true : false;
};

const checkNum = (userInput) => {
  const number = parseInt(userInput);
  return isNaN(number);
};

const checkNumRange = (userInput) => {
  const number = parseInt(userInput);
  return number >= 3 && number <= 20;
};

const isWrongAnswer = (check) => {
  const [upList, downList] = check;
  return upList.includes("X") || downList.includes("X") ? true : false;
};

const reStartCheck = (userInput) => {
  return userInput === "R" || userInput === "Q" ? true : false
};

module.exports = { isUpDown, checkNum, checkNumRange, isWrongAnswer, reStartCheck };
