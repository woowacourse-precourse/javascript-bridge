const OutputView = require("./OutputView");

const Exception = {
    lengthException(length) {
        try {
            this.numberCheck(length);
            this.rangeCheck(length);
        } catch (e) {
            OutputView.printError(e);
            return false;
        }
        return true;
    },

    numberCheck(value) {
        if (!Number.isInteger(Number(value))) {
            throw '[ERROR] 다리 길이는 숫자를 입력해야 합니다.';
        }
    },

    rangeCheck(value) {
        const number = Number(value);
        if (number < 3 || number > 20) {
            throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
        }
    },
};

module.exports = Exception;

