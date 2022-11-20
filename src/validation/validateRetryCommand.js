const MESSAGE = require("../constant/message");

const validateRetryCommand = (answer) => {
  if (!isValidAnswer(answer)) throw new Error(MESSAGE.ERROR.ANSWER_IS_MUST_BE_R_OR_Q);
};

const isValidAnswer = (answer) => {
  return answer === "R" || answer === "Q";
};

module.exports = validateRetryCommand;
