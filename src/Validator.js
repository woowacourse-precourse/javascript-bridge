const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { MESSAGE, ERROR, BRIDGE } = require('./const.js')

const Validator = {
    validateBridgeSize(bridgeSize) {
        if(isNaN(bridgeSize)) throw new Error(ERROR.HEADER+ERROR.BRIDGE_LENGTH);
        if(bridgeSize < BRIDGE.LENGTH_RANGE_LEFT ||
            bridgeSize > BRIDGE.LENGTH_RANGE_RIGHT) throw new Error(ERROR.HEADER+ERROR.BRIDGE_LENGTH);
    },

}

module.exports = Validator;

