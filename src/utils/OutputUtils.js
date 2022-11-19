const { BRIDGE_MESSAGE, GAME_MESSAGE } = require('../constants');

const OutputUtils = {
  convertMapMessage(square) {
    if (square === true) return BRIDGE_MESSAGE.CROSSABLE;
    if (square === false) return BRIDGE_MESSAGE.UNCROSSABLE;

    return BRIDGE_MESSAGE.NOT_SELECTED;
  },

  stringifyMap(bridgeSide) {
    return bridgeSide
      .map((square) => OutputUtils.convertMapMessage(square))
      .join(BRIDGE_MESSAGE.SEPARATOR);
  },

  convertWinMessage(isWin) {
    if (isWin) return GAME_MESSAGE.SUCCESS;

    return GAME_MESSAGE.FAIL;
  },
};

module.exports = OutputUtils;
