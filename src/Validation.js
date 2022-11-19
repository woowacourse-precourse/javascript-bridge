const { Console } = require("@woowacourse/mission-utils");
const { ERROR, OPTION, KEY } = require("./constant/message.js");

class Validation {
    static checkBridgeSizeInput(size) {
        // console.log("Validation.checkBridgeSizeInput--------------------");
        const isValidNumber = this.checkNumber(size);
        const isValidSizeRange = this.checkSizeRange(size);
        if (isValidNumber || isValidSizeRange) {
            return true;
        }
        return false;
    }
    static checkNumber(number) {
        // console.log("Validation.checkNumber--------------------");
        const isInvalidNumber = !/^\d+$/g.test(number);
        try {
            if (isInvalidNumber) {
                throw ERROR.BRIDGE_INVALID_NUMBER;
            }
        } catch {
            Console.print(ERROR.BRIDGE_INVALID_NUMBER);
            return true;
        }
    }
    static checkSizeRange(size) {
        // console.log("Validation.checkSizeRange-------------------");
        const isValidRange = size < OPTION.MINIMUM_LENGTH || size > OPTION.MAXIMUM_LENGTH;
        try {
            if (isValidRange) {
                throw ERROR.BRIDGE_OVER_RANGE;
            }
        } catch {
            Console.print(ERROR.BRIDGE_OVER_RANGE);
            return true;
        }
    }

    static checkMoveInput(move) {
        // console.log("Validation.checkMoveInput-------------------");
        const isNotKeyUp = move !== KEY.UP;
        const isNotKeyDown = move !== KEY.DOWN;
        if (isNotKeyUp || isNotKeyDown) {
            return true;
        }
        throw new Error(ERROR.MOVE);
    }

    static checkRestartInput(answer) {
        // console.log("Validation.checkRestartInput-------------------");
        const isNotKeyRestart = answer !== KEY.RESTART;
        const isNotKeyQuit = answer !== KEY.QUIT;
        if (isNotKeyRestart || isNotKeyQuit) {
            return true;
        }
        throw new Error(ERROR.RESTART);
    }
}

module.exports = Validation;
