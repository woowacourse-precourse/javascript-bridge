const MissionUtils = require('@woowacourse/mission-utils')

/**
 * 에러를 출력하는 역할을 한다.
 */
const ErrorView = {
    /**
     * 에러를 출력한다.
     * @param {string} message 
     */
    printError(message) {
        MissionUtils.Console.print(message);
    }
}

module.exports = ErrorView;