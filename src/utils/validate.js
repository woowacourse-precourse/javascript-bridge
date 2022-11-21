const { Console } = require("@woowacourse/mission-utils");

const isNumber = (input) => isNaN(input);
const isOverBridgeRange = (input) => input < 3 || input > 20;

const bridgeLength = function bridgeLengthValidation(input, callback) {
  try {
    if (isNumber(input)) throw new Error("숫자만 입력 가능합니다.");
    if (isOverBridgeRange(input))
      throw new Error("3 ~ 20사이의 숫자만 입력 가능합니다.");
    return true;
  } catch (e) {
    Console.print(`[ERROR]${e}`);
    callback();
    return false;
  }
};

const bridgeDirection = function bridgeDirectionValidation(input, callback) {
  try {
    if (input !== "U" && input !== "D")
      throw new Error("U 또는 D만 입력 가능합니다.");
    return true;
  } catch (e) {
    Console.print(`[ERROR]${e}`);
    callback();
    return false;
  }
};

const gameContinue = function gameContinueValidation(input, callback) {};

module.exports = {
  bridgeLength,
  bridgeDirection,
  gameContinue,
};
