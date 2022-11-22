const Message = require("./Message");
const MissionUtils = require("@woowacourse/mission-utils");

const readBridgeSizeValidate = (number) => {
  //1e1와 같은 숫자를 방지하기 위한 validation
  number
    .toString()
    .split("")
    .map((elem) => {
      if (isNaN(elem)) throw new Error(Message.ERROR.IS_NAN);
    });
  if (number < 3 || number > 20) throw new Error(Message.ERROR.OUT_OF_RANGE);
};

const resumeGameValidate = (answer) => {
  if (answer !== "Q" && answer !== "R")
    throw new Error(Message.ERROR.INVALIDATE_GAME);
};

const moveInputValidate = (answer) => {
  if (answer !== "U" && answer !== "D")
    throw new Error(Message.ERROR.INVALIDATE_MOVE);
};

module.exports = {
  readBridgeSizeValidate,
  resumeGameValidate,
  moveInputValidate,
};
