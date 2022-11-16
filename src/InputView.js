const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    /**
     * 다리의 길이를 입력받는다.
     * @returns {number}
     */
    readBridgeSize() {
        MissionUtils.Console.readLine(
            "다리의 길이를 입력해주세요.\n",
            (input) => {
                return this.checkBridgeSize(input);
            }
        );
    },
    /**
     * 다리 길이 입력에 대한 검사
     * @param {string} input
     * @returns {number}
     */
    checkBridgeSize(input) {
        if (Number.isNaN(input + "."))
            throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
        const int = Number(input);
        if (int < 3 || int > 20)
            throw new Error(
                "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다."
            );
        return int;
    },
    /**
     * 사용자가 이동할 칸을 입력받는다.
     */
    readMoving() {},

    /**
     * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
     */
    readGameCommand() {},
};

module.exports = InputView;
