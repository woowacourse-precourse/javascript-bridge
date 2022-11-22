const { ERROR, KEY, UTILS } = require("./constant");

const Validate = {
  movingValidate(move)  {
    if (!(move === KEY.MOVE_UP || move === KEY.MOVE_DOWN)) {
      throw ERROR.MOVING_ERROR;
    }
  },
  bridgeValidate (bridgeLength)  {
    if (/[^0-9]/g.test(bridgeLength)) {
      throw ERROR.BRIDGE_ERROR;
    }
    if (Number(bridgeLength) < UTILS.BRIDGE_MIN || Number(bridgeLength) > UTILS.BRIDGE_MAX) {
      throw ERROR.BRIDGE_ERROR;
    }
  },
  restartValidate (restart)  {
    if (!(restart === KEY.RESTART || restart === KEY.END)) {
      throw ERROR.RESTART_ERROR;
    }
  },
};

module.exports = Validate;