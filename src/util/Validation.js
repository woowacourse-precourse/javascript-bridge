const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const { ERROR_MESSAGE, BRIDGE, DIRECTION, COMMAND } = require("./Constant");

const validateBridge = (bridgeInput) => {
    try {
        if (Number.isNaN(bridgeInput)) throw new Error(ERROR_MESSAGE.BRIDGE_TYPE);
        if (!(BRIDGE.MIN_LENGTH <= bridgeInput && bridgeInput <= BRIDGE.MAX_LENGTH)) throw new Error(ERROR_MESSAGE.BRIDGE_RANGE);
    } catch (err) {
        Console.print(err.message);
        return true;
    }
}

const validateMove = (move) => {
    try {
        if (!(move === DIRECTION.UP || move === DIRECTION.DOWN)) throw new Error(ERROR_MESSAGE.MOVE);
    } catch (err) {
        Console.print(err.message);
        return true;
    }
}

const validateCommand = (command) => {
    try {
        if (!(command === COMMAND.RESTART || command === COMMAND.QUIT)) throw new Error(ERROR_MESSAGE.COMMAND);
    } catch (err) {
        Console.print(err.message);
        return true;
    }
}

module.exports = { validateBridge, validateMove, validateCommand };