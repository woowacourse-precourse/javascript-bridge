const { Console } = require("@woowacourse/mission-utils");

const ErrorCheck = {
    checkSize(bridgeSize) {
        try{
            if (Number.isNaN(+bridgeSize)) {
                throw '[ERROR] 숫자만 입력하세요.';
            }

            if (parseInt(bridgeSize, 10) < 3 || parseInt(bridgeSize, 10) > 20) {
                throw '[ERROR] 다리의 길이는 3과 20 사이여야 합니다.';
            }

            return false;
        }
        catch(e) {
            Console.print(e);
            return true;
        }
    },

    checkUpDown(pointer) {
        try{
            if (pointer !== 'U' && pointer !== 'D') {
                throw '[ERROR] U또는 D만 입력하세요.';
            }

            return false;
        }
        catch(e) {
            Console.print(e);
            return true;
        }
    },

    checkRetryQuit(answer) {
        try {
            if (answer !== 'R' && answer !== 'Q') {
                throw '[ERROR] R또는 Q만 입력하세요.';
            }

            return false;
        }
        catch(e) {
            Console.print(e);
            return true;
        }
    },
};

module.exports = ErrorCheck;
