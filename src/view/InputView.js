const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    bridgeSize: 0,

    setting() {
        this.readBridgeSize();
    },

    getValues() {
        return { bridgelength: this.bridgelength };
    },

    /**
     * 다리의 길이를 입력받는다.
     */
    readBridgeSize() {
        Console.readLine('다리의 길이를 입력해주세요.\n', (number) => {
            this.validateBridgeSize(number);
            this.bridgeSize = number;
        });
    },

    /**
     * 사용자가 이동할 칸을 입력받는다.
     */
    readMoving() {},

    /**
     * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
     */
    readGameCommand() {},

    validateBridgeSize(number) {
        this.isNumber(number);
        this.isRange(number);
    },
    isNumber(number) {
        if (isNaN(+number)) throw new Error('[ERROR]');
    },
    isRange(number) {
        if (+number < 3 || +number > 30) throw new Error('[ERROR]');
    },
};

module.exports = InputView;
