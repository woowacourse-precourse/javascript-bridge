const ERROR_MESSAGE = require("./constants").ERROR_MESSAGE;

const ErrorChecker = {
    checkBridgeSizeValidation(number) {
        if (isNaN(number)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
        if (!Number.isInteger(Number(number))) throw new Error(ERROR_MESSAGE.NOT_AN_INTEGER);
        if (number < 3 || number > 20) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_OF_BRIDGE_SIZE);
        return true;
    },

    checkValidChar(validChar1, validChar2, input) {
        if (input === validChar1 || input === validChar2) return true;
        throw new Error(ERROR_MESSAGE.NOT_A_VALID_CHAR(validChar1, validChar2));
    }
}

module.exports = ErrorChecker;