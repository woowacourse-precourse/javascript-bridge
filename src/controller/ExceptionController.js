const OutputView = require("../view/OutputView");

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
        if(!Number.isInteger(integerSize)) throw '[ERROR] 다리 길이는 숫자를 입력해야 합니다.';
    },

    rangeCheck(size) {
        const integerSize = Number(size);
        if(integerSize < 3 || integerSize > 20) throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    },

    movingException(moving) {
        try {
            this.movingCheck(moving);
        } catch (e) {
            OutputView.printError(e);
            return false;
        }
        return true;
    },

    movingCheck(moving) {
        if(moving !== 'U' && moving !== 'D') throw '[ERROR] "U" 혹은 "D"를 입력하여 주세요.'
    },

    retryingException(answer) {
        try {
            this.retryAnswerCheck(answer);
        } catch (e) {
            OutputView.printError(e);
            return false;
        }
        return true;
    },

    retryAnswerCheck(answer) {
        if(answer !== 'R' && answer !== 'Q') throw '[ERROR] "R" 혹은 "Q"를 입력하여 주세요.'
    }
};

module.exports = ExceptionController;

