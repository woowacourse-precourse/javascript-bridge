const { ERROR_MESSAGE } = require("./utils/constans");
const { Console } = require("@woowacourse/mission-utils");

const Validater = {
  bridgeSize: (bridgeSize) => {
    // 3, 20 상수화?
    if (bridgeSize < 3 || bridgeSize > 20 || Number.isNaN(bridgeSize)) {
      throw Console.print(ERROR_MESSAGE.BRIDGE_SIZE);
    }
  },
};

module.exports = Validater;
