const ERROR_MESSAGE = require("./constants").ERROR_MESSAGE;

const ErrorChecker = {
    checkBridgeSizeValidation(number) {
        if (isNaN(number)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
        if (!Number.isInteger(Number(number))) throw new Error(ERROR_MESSAGE.NOT_AN_INTEGER);
        if (number < 3 || number > 20) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_OF_BRIDGE_SIZE);
        return true;
    },
}

module.exports = ErrorChecker;