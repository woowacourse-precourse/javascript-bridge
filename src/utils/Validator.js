const {ERROR_MESSAGES} = require('./Constants');

const Validator = {

    validateBridgeSize(bridgeSize) {
        if(3 > bridgeSize || 20 < bridgeSize) {
            throw ERROR_MESSAGES.BRIDGE_SIZE
        }
    }
}

module.exports = Validator;