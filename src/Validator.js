const { ERROR_MESSAGE } = require('../constants/Message');
const GAME_SETTING = require('../constants/Setting');

const Validator = {
  bridgeSize(inputValue) {
    const typeToNumber = Number(inputValue);
    if (Number.isNaN(typeToNumber))
      throw Error(ERROR_MESSAGE.bridgeSizeOnlyNumber);
    if (
      typeToNumber < GAME_SETTING.bridgeSizeMin ||
      typeToNumber > GAME_SETTING.bridgeSizeMax
    )
      throw Error(ERROR_MESSAGE.bridgeSizeRange);
  },
  moving(inputValue) {
    if (!(inputValue === GAME_SETTING.up || inputValue === GAME_SETTING.dowm))
      throw Error(ERROR_MESSAGE.movingOnlyUOrD);
  },
  retryOrQuit(inputValue) {
    if (
      !(inputValue === GAME_SETTING.retry || inputValue === GAME_SETTING.quit)
    ) {
      throw Error(ERROR_MESSAGE.retryOnlyROrQ);
    }
  },
};

module.exports = Validator;
