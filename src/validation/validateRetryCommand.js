const BRIDGE = require("../constant/constants");
const MESSAGE = require("../constant/message");

const validateRetryCommand = (answer) => {
  if (!isValidAnswer(answer)) throw new Error(MESSAGE.ERROR.ANSWER_IS_MUST_BE_R_OR_Q);
};

const isValidAnswer = (answer) => {
  return answer === BRIDGE.KEYWORDS.RETRY || answer === BRIDGE.KEYWORDS.QUIT;
};

module.exports = validateRetryCommand;
