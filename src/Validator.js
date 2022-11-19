const { Console } = require("@woowacourse/mission-utils");

const validateReadBridgeSize = (bridgeSize) => {
  try {
    if (isNaN(bridgeSize)) throw { ment: "는 숫자로 입력해야 합니다." };
    if (bridgeSize < 3 || bridgeSize > 20)
      throw { ment: "의 범위는 3부터 20까지여야 합니다." };
    return true;
  } catch (e) {
    Console.print("[ERROR] 다리 길이" + e.ment);
    return false;
  }
};

const validateReadMoving = (upOrDown) => {
  try {
    if (upOrDown !== "U" && upOrDown !== "D")
      throw { ment: "이동할 칸에는 대문자 U 혹은 D만 입력할 수 있습니다." };
    return true;
  } catch (e) {
    Console.print("[ERROR] " + e.ment);
    return false;
  }
};

const validateReadGameCommand = (retry) => {
  try {
    if (retry !== "R" && retry !== "Q")
      throw { ment: "재시도 여부에는 대문자 R 혹은 Q만 입력할 수 있습니다." };
    return true;
  } catch (e) {
    Console.print("[ERROR] " + e.ment);
    return false;
  }
};

module.exports = {
  validateReadBridgeSize,
  validateReadMoving,
  validateReadGameCommand,
};
