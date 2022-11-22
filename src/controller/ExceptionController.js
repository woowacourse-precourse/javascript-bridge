const OutputView = require("../view/OutputView");
const ErrorMessage = require("../static/ErrorMessage");

const ExceptionController = {
    sizeException(size) {
        try {
            this.numberCheck(size);
            this.rangeCheck(size);
        } catch (e) {
            OutputView.printError(e);
            return false;
        }
        return true;
    },

    numberCheck(size) {
        const integerSize = Number(size);
        if(!Number.isInteger(integerSize)) throw ErrorMessage.numberError;
    },

    rangeCheck(size) {
        const integerSize = Number(size);
        if(integerSize < 3 || integerSize > 20) throw ErrorMessage.rangeError;
    },

    movingException(moving) {
        try {
            this.movingAnswerCheck(moving);
        } catch (e) {
            OutputView.printError(e);
            return false;
        }
        return true;
    },

    movingAnswerCheck(moving) {
        if(moving !== 'U' && moving !== 'D') throw ErrorMessage.movingAnswerError;
    },

    retryException(answer) {
        try {
            this.retryAnswerCheck(answer);
        } catch (e) {
            OutputView.printError(e);
            return false;
        }
        return true;
    },

    retryAnswerCheck(answer) {
        if(answer !== 'R' && answer !== 'Q') throw ErrorMessage.retryAnswerError;
    }
};

module.exports = ExceptionController;

