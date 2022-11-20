const MissionUtils = require("@woowacourse/mission-utils");

const isInteger = (number) => {
  return number % 1 === 0;
};

const isBetweenThreeTwenty = (number) => {
  return number >= 3 && number <= 20;
};

const checkBridgeSize = (number) => {
  try {
    if (!isInteger(number)) throw new Error("[ERROR] 정수 숫자");
    if (!isBetweenThreeTwenty(number)) throw new Error("[ERROR] 3~20 숫자");
  } catch {
    MissionUtils.Console.print("[ERROR]");
    return true;
  }
};

const checkMovement = (string) => {
  try {
    if (!(string === "U" || string === "D")) throw new Error("[ERROR] U나 D");
  } catch {
    MissionUtils.Console.print("[ERROR]");
    return true;
  }
};

const checkRestart = (string) => {
  try {
    if (!(string === "R" || string === "Q")) throw new Error("[ERROR] R이나 Q");
  } catch {
    MissionUtils.Console.print("[ERROR]");
    return true;
  }
};

module.exports = {
  checkBridgeSize,
  checkMovement,
  checkRestart,
};
