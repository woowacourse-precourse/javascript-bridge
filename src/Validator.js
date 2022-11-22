const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { ERROR, BRIDGE, USER_ANSWER } = require('./const.js')

const Validator = {
    /**
     * @param {number} bridgeSize 다리의 길이
     */
    validateBridgeSize(bridgeSize) {
        if(isNaN(bridgeSize)) throw new Error(ERROR.HEADER+ERROR.BRIDGE_LENGTH);
        if(bridgeSize < BRIDGE.LENGTH_RANGE_LEFT ||
            bridgeSize > BRIDGE.LENGTH_RANGE_RIGHT) throw new Error(ERROR.HEADER+ERROR.BRIDGE_LENGTH);
    },

    /**
     * @param {string} moveDirection 다리 이동 방향
     */
    validateMoveDirection(moveDirection) {
        if(moveDirection != BRIDGE.INPUT_RANGE[0] &&
            moveDirection != BRIDGE.INPUT_RANGE[1]) throw new Error(ERROR.HEADER+ERROR.MOVE_DIRECTION);
    },

    /**
     * @param {string} isRetry 게임 재시작 여부
     */
    validateGameCommand(isRetry) {
        if(isRetry != USER_ANSWER.RETRY &&
            isRetry != USER_ANSWER.QUIT) throw new Error(ERROR.HEADER+ERROR.MOVE_DIRECTION);
    }
}

module.exports = Validator;

