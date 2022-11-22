const { DEFAULTS } = require('./Constants');

const Utils = {
  getLastValue(arr, idx) {
    return arr[idx][arr[idx].length - 1];
  },

  isLastValueFail(gameLog) {
    if (
      Utils.getLastValue(gameLog, 0) !== DEFAULTS.CAN_MOVE &&
      Utils.getLastValue(gameLog, 1) !== DEFAULTS.CAN_MOVE
    ) {
      return true;
    }
    return false;
  },

  isLastValueSuccess(gameLog) {
    if (
      Utils.getLastValue(gameLog, 0) !== DEFAULTS.CANT_MOVE &&
      Utils.getLastValue(gameLog, 1) !== DEFAULTS.CANT_MOVE
    ) {
      return true;
    }
    return false;
  },
};
module.exports = Utils;
