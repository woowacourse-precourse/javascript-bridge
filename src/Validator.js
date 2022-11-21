const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { MESSAGE, ERROR, BRIDGE } = require('./const.js')

const Validator = {
    validateBridgeSize(bridgeSize) {
        if(isNaN(bridgeSize) || !Number.isInteger(bridgeSize)) throw Error;
        if(bridgeSize < BRIDGE.LENGTH_RANGE_LEFT ||
            bridgeSize > BRIDGE.LENGTH_RANGE_RIGHT) throw Error;
    },

}

module.exports = Validator;

