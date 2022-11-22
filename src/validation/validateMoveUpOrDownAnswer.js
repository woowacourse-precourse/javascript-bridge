const BRIDGE = require("../constant/constants");
const MESSAGE = require("../constant/message");

const validateMoveUpOrDownAnswer = (answer) => {
  if (!isValidAnswer(answer)) throw new Error(MESSAGE.ERROR.ANSWER_IS_MUST_BE_U_OR_D);
};

const isValidAnswer = (answer) => {
  return answer === BRIDGE.KEYWORDS.UP || answer === BRIDGE.KEYWORDS.DOWN;
};

module.exports = validateMoveUpOrDownAnswer;
