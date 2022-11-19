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

module.exports = { validateReadBridgeSize };
