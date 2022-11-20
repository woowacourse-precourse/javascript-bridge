const { ERROR_MESSAGE, BRIDGE } = require("../Constant");
const { Console } = require("@woowacourse/mission-utils");
const bridgeLengthValidate = (input) => {
  try {
    if (input < 3 || input > 20) throw new Error(ERROR_MESSAGE.range);
    if (isNaN(input)) throw new Error(ERROR_MESSAGE.notNumber);
  } catch (err) {
    Console.print(err.message);
    return true;
  }
};
const userMoveInput = (input) => {
  const isRight = (input) => input === "U" || input === "D";
  try {
    if (!isRight(input)) throw new Error(ERROR_MESSAGE.moving);
  } catch (err) {
    Console.print(err.message);
    return true;
  }
};
const gameRestartInput = (input) => {
  const isRight = (input) => input === "R" || input === "Q";
  try {
    if (!isRight(input)) throw new Error(ERROR_MESSAGE.restart);
  } catch (err) {
    Console.print(err.message);
    return true;
  }
};
const determineGameRestart = (moveLists) => {
  const [upList, downList] = moveLists;
  return (
    upList.includes(BRIDGE.wrong_direction) ||
    downList.includes(BRIDGE.wrong_direction)
  );
};
module.exports = {
  bridgeLengthValidate,
  userMoveInput,
  gameRestartInput,
  determineGameRestart,
};
