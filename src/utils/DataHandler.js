const { BRIDGE_GAME } = require('../constants/values');

const DataHandler = {
  convertStringToDecimalNumber(string) {
    return parseInt(string, 10);
  },

  getSelectedIndex(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.UP_BRIDGE : BRIDGE_GAME.DOWN_BRIDGE;
  },

  getUnselectedIndex(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.DOWN_BRIDGE : BRIDGE_GAME.UP_BRIDGE;
  },
};

module.exports = DataHandler;
