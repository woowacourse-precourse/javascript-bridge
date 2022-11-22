const { ERROR, OPTION, KEY } = require("./constant/message.js");
const { printErrorMoving, printErrorBridgeSize, printErrorInvalidNumber, printErrorGameCommand } = require("./OutputView.js");

class Validation {
    static checkBridgeSizeInput(size) {
        const isValidNumber = this.checkNumber(size);
        const isValidSizeRange = this.checkBridgeSizeRange(size);
        return isValidNumber || isValidSizeRange === true;
    }

    static checkNumber(number) {
        const isNotNumber = !/^\d+$/g.test(number);
        try {
            if (isNotNumber) {
                throw new Error(ERROR.INVALID_NUMBER);
            }
        } catch {
            printErrorInvalidNumber();
            return true;
        }
    }
    static checkBridgeSizeRange(size) {
        const isNotValidRange = size < OPTION.MIN_LENGTH || size > OPTION.MAX_LENGTH;
        try {
            if (isNotValidRange) {
                throw new Error(ERROR.BRIDGE_RANGE);
            }
        } catch {
            printErrorBridgeSize();
            return true;
        }
    }

    static checkMoveInput(move) {
        if (move === KEY.UP || move === KEY.DOWN) {
            return false;
        }
        try {
            throw new Error(ERROR.MOVE);
        } catch {
            printErrorMoving();
            return true;
        }
    }

    static checkGameCommandInput(input) {
        if (input === KEY.RESTART || input === KEY.QUIT) {
            return false;
        }
        try {
            throw new Error(ERROR.RESTART);
        } catch {
            printErrorGameCommand();
            return true;
        }
    }
}

module.exports = Validation;
