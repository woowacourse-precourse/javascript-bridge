const { Console } = require("@woowacourse/mission-utils");
const ERROR_IS_NUMBER_VALID = "[ERROR] 숫자만 입력해야 합니다.";
const ERROR_IS_RANGE_VALID =
  "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
const ERROR_IS_MOVING_COMMAND = "[ERROR] U 이나 D만 입력해야 합니다.";
const ERROR_IS_GAME_COMMAND = "[ERROR] R 이나 Q만 입력해야 합니다.";

const isNumberValid = (num) => {
  if (isNaN(num)) {
    throw new Error(ERROR_IS_NUMBER_VALID);
  }
};
const isRangeValid = (num) => {
  if (num < 3 || num > 20) {
    throw new Error(ERROR_IS_RANGE_VALID);
  }
};
const isBridgeSizeValid = (number) => {
  const num = Number(number);
  isNumberValid(num);
  isRangeValid(num);
};
const isMovingCommandValid = (input) => {
  if (input !== "U" && input !== "D") {
    throw new Error(ERROR_IS_MOVING_COMMAND);
  }
};
const isGameCommandValid = (input) => {
  if (input !== "R" && input !== "Q") {
    throw new Error(ERROR_IS_GAME_COMMAND);
  }
};
module.exports = {
  isBridgeSizeValid,
  isMovingCommandValid,
  isGameCommandValid,
};
