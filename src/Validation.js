const { Console } = require("@woowacourse/mission-utils");
const { ERROR, OPTION, KEY } = require("./constant/message.js");

class Validation {
    static checkBridgeSizeInput(size) {
        const isValidNumber = this.checkNumber(size);
        const isValidSizeRange = this.checkBridgeSizeRange(size);
        if (isValidNumber || isValidSizeRange) {
            return true;
        }
        return false;
    }
    static checkNumber(number) {
        const isNotNumber = !/^\d+$/g.test(number);
        try {
            if (isNotNumber) {
                throw new Error(ERROR.BRIDGE_INVALID_NUMBER);
            }
        } catch {
            Console.print(ERROR.BRIDGE_INVALID_NUMBER);
            return true;
        }
    }
    static checkBridgeSizeRange(size) {
        const isNotValidRange = size < OPTION.MINIMUM_LENGTH || size > OPTION.MAXIMUM_LENGTH;
        try {
            if (isNotValidRange) {
                throw new Error(ERROR.BRIDGE_OVER_RANGE);
            }
        } catch {
            Console.print(ERROR.BRIDGE_OVER_RANGE);
            return true;
        }
    }

    static checkMoveInput(move) {
        const isKeyUp = move === KEY.UP;
        const isKeyDown = move === KEY.DOWN;
        if (isKeyUp || isKeyDown) {
            return false;
        }
        try {
            throw new Error(ERROR.MOVE);
        } catch {
            Console.print(ERROR.MOVE);
            return true;
        }
    }

    static checkRestartInput(answer) {
        const isKeyRestart = answer === KEY.RESTART;
        const isKeyQuit = answer === KEY.QUIT;
        if (isKeyRestart || isKeyQuit) {
            return false;
        }
        try {
            throw new Error(ERROR.RESTART);
        } catch {
            Console.print(ERROR.RESTART);
            return true;
        }
    }
}

module.exports = Validation;
