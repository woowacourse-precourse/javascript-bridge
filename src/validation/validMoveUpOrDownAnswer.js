const MESSAGE = require("../constant/message");

const validMoveUpOrDownAnswer = (answer) => {
  if (!isValidAnswer(answer)) throw new Error(MESSAGE.ERROR.ANSWER_IS_MUST_BE_U_OR_D);
};

const isValidAnswer = (answer) => {
  return answer === "U" || answer === "D";
};

module.exports = validMoveUpOrDownAnswer;
