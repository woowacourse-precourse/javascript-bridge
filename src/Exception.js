const { Console } = require("@woowacourse/mission-utils");

isNotInRange = (size) => {
  return size < 3 || size > 20;
};

isNotNumber = (number) => {
  return isNaN(number);
};

checkBridgeSize = (size) => {
  try {
    if (isNotNumber(size)) throw new Error("[ERROR] 숫자를 입력해주세요");
    if (isNotInRange(size))
      throw new Error("[ERROR] 다리 길이는 3이상 20이하여야 합니다.");
  } catch (error) {
    Console.print(error.message);
    return true;
  }
};

checkInput = (space) => {
  return space === "U" || space === "D" ? true : false;
};

checkSpace = (space) => {
  try {
    if (!checkInput(space)) throw new Error("[ERROR] U 또는 D를 입력해주세요.");
  } catch (error) {
    Console.print(error.message);
    return true;
  }
};

checkRestartInput = (restart) => {
  return restart === "R" || restart === "Q" ? true : false;
};

checkRestart = (restart) => {
  try {
    if (!checkRestartInput(restart))
      throw new Error("[ERROR] R 또는 Q를 입력해주세요.");
  } catch (error) {
    Console.print(error.message);
    return true;
  }
};

module.exports = {
  checkBridgeSize,
  checkSpace,
  checkRestart
};
