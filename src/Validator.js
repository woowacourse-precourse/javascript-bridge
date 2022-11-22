const { Console } = require("@woowacourse/mission-utils");
const { VALIDATOR_CONSTANT, INPUT_KEYS } = require("../utils/constants");

const validateReadBridgeSize = (bridgeSize) => {
  try {
    if (isNaN(bridgeSize)) throw { ment: VALIDATOR_CONSTANT.BRIDGE_SIZE_NOT_NUMBER };
    if (bridgeSize < VALIDATOR_CONSTANT.MIN_BRIDGE_SIZE || bridgeSize > VALIDATOR_CONSTANT.MAX_BRIDGE_SIZE) throw { ment: VALIDATOR_CONSTANT.BRIDGE_SIZE_RANGE_ERROR };
    return true;
  } catch (e) {
    Console.print(VALIDATOR_CONSTANT.ERROR_MENT + e.ment);
    return false;
  }
};

const validateReadMoving = (moveKey) => {
  try {
    if (moveKey !== INPUT_KEYS.UP && moveKey !== INPUT_KEYS.DOWN) throw { ment: VALIDATOR_CONSTANT.MOVEKEY_FORM_ERROR };
    return true;
  } catch (e) {
    Console.print(VALIDATOR_CONSTANT.ERROR_MENT + e.ment);
    return false;
  }
};

const validateReadGameCommand = (retryKey) => {
  try {
    if (retryKey !== INPUT_KEYS.RETRY && retryKey !== INPUT_KEYS.QUIT) throw { ment: VALIDATOR_CONSTANT.RETRYKEY_FORM_ERROR };
    return true;
  } catch (e) {
    Console.print(VALIDATOR_CONSTANT.ERROR_MENT + e.ment);
    return false;
  }
};

module.exports = {
  validateReadBridgeSize,
  validateReadMoving,
  validateReadGameCommand,
};
