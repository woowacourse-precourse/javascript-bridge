const { BRIDGE_GAME_OPTION, ERROR } = require('./Constant/Constant');
class BridgeValidtion {

  static validateBridge(bridge) {
    if(Number(bridge) < BRIDGE_GAME_OPTION.MIN_NUMBER 
    || Number(bridge) > BRIDGE_GAME_OPTION.MAX_NUMBER) {
      throw (ERROR.LENGTH_SCOPE)
    }
    if(Number.isNaN(Number(bridge))) {
      throw (ERROR.LENGTH_TPYE)
    }
  }
  
  static validateSelect(select) {
    if(select.length !== 1 ) {
      throw (ERROR.MOVING_SCOPE)
    }
    if(select !== BRIDGE_GAME_OPTION.UP && select !== BRIDGE_GAME_OPTION.DWON) {
      throw (ERROR.MOVING_TPYE)
    }
  }

  static validateResult(select) {
    if(select !== BRIDGE_GAME_OPTION.RETRY && select !== BRIDGE_GAME_OPTION.END) {
      throw (ERROR.RETRY_TPYE)
    }
  }
}

module.exports = BridgeValidtion;