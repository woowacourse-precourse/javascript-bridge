const { BRIDGE_MESSAGE, GAME_MESSAGE } = require('../constants');

const OutputUtils = {
  convertToMapMessage(square) {
    if (square === true) return BRIDGE_MESSAGE.CROSSABLE;
    if (square === false) return BRIDGE_MESSAGE.UNCROSSABLE;

    return BRIDGE_MESSAGE.NOT_SELECTED;
  },

  stringifyBridgeMap(bridge) {
    const convertedBridge = bridge
      .map((square) => OutputUtils.convertToMapMessage(square))
      .join(BRIDGE_MESSAGE.SEPARATOR);
    return BRIDGE_MESSAGE.START + convertedBridge + BRIDGE_MESSAGE.END;
  },

  convertToWinMessage(isWin) {
    if (isWin) return GAME_MESSAGE.WIN;

    return GAME_MESSAGE.FAIL;
  },
};

module.exports = OutputUtils;
