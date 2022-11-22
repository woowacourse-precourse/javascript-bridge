const { BRIDGE_GAME_OPTION, ERROR } = require('./Constant/Constant');

const BridgeValidtion = {

  validateBridge(bridge) {
    if (Number(bridge) < BRIDGE_GAME_OPTION.MIN_NUMBER 
    || Number(bridge) > BRIDGE_GAME_OPTION.MAX_NUMBER) {
      throw (ERROR.LENGTH_SCOPE)
    }
    if (Number.isNaN(Number(bridge))) {
      throw (ERROR.LENGTH_TPYE)
    }
  },

  validateSelect(select) {
    if (select !== BRIDGE_GAME_OPTION.UP && select !== BRIDGE_GAME_OPTION.DWON) {
      throw (ERROR.MOVING_TPYE)
    }
  },

  validateResult(select) {
    if (select !== BRIDGE_GAME_OPTION.RETRY && select !== BRIDGE_GAME_OPTION.END) {
      throw (ERROR.RETRY_TPYE)
    }
  },
};

module.exports = BridgeValidtion;