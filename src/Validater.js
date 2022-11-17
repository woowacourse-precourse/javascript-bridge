const { ERROR_MESSAGE, BRIDGE } = require("./utils/constans");
const { Console } = require("@woowacourse/mission-utils");

const Validater = {
  bridgeSize: (bridgeSize) => {
    if (Number.isNaN(bridgeSize) || !isCorrectBrigeSize(bridgeSize)) {
      throw Console.print(ERROR_MESSAGE.BRIDGE_SIZE);
    }
  },

  isCorrectBrigeSize(bridgeSize) {
    return (
      BRIDGE.SIZE.MINIMUN <= bridgeSize && bridgeSize <= BRIDGE.SIZE.MAXIMUM
    );
  },
};

module.exports = Validater;
