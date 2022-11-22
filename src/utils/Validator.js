const { Console } = require('@woowacourse/mission-utils');
const {ERROR_MESSAGES, BRIDGE, RESTART} = require('./Constants');

const Validator = {

    validateBridgeSize(bridgeSize) {
        if(3 > bridgeSize || 20 < bridgeSize) {
            Console.print(ERROR_MESSAGES.BRIDGE_SIZE);
            throw ERROR_MESSAGES.BRIDGE_SIZE
        }
    },

    validateMoving(moving) {
        if(moving != BRIDGE.UP && moving != BRIDGE.DOWN){
            Console.print(ERROR_MESSAGES.MOVING);
            throw ERROR_MESSAGES.MOVING
        }
    },

    validateRestart(decide) {
        if(decide != RESTART.TRUE && decide != RESTART.FASLE){
            Console.print(ERROR_MESSAGES.RESTART);
            throw ERROR_MESSAGES.RESTART
        }
    }
}

module.exports = Validator;