const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { ERROR, BRIDGE } = require('./const.js')

const Validator = {
    validateBridgeSize(bridgeSize) {
        if(isNaN(bridgeSize)) throw new Error(ERROR.HEADER+ERROR.BRIDGE_LENGTH);
        if(bridgeSize < BRIDGE.LENGTH_RANGE_LEFT ||
            bridgeSize > BRIDGE.LENGTH_RANGE_RIGHT) throw new Error(ERROR.HEADER+ERROR.BRIDGE_LENGTH);
    },

    validateMoveDirection(moveDirection) {
        if(moveDirection != BRIDGE.INPUT_RANGE[0] &&
            moveDirection != BRIDGE.INPUT_RANGE[1]) throw new Error(ERROR.HEADER+ERROR.MOVE_DIRECTION);
    }

}

module.exports = Validator;

