const ERROR = require('./ERROR_MESSAGE');

const ErrorHandler = {
    isValid(input) {
        return !isNaN(input);
    },

    isBridgeSizeCorrect(input) {
        const regex = /^[0-9]+$/;
        if (input < 3 | input > 20) {
            throw new Error(ERROR.LENGTH_ERROR);
        }
        if (!regex.test(input)) {
            throw new Error(ERROR.INPUT_ERROR);
        }
    },

    isRetryCorrect(input) {
        if (input != "R" | input != "Q") {
            throw new Error(ERROR.RETRY_ERROR);
        }
    },

    isStringCorrect(input) {
        if (input != "U" | input != "D") {
            throw new Error(ERROR.MOVE_ERROR);
        }
    }
}

module.exports = ErrorHandler;