const MissionUtils = require('@woowacourse/mission-utils')

const ErrorView = {
    printError(message) {
        MissionUtils.Console.print(message);
    }
}

module.exports = ErrorView;