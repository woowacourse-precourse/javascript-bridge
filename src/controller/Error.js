/**
 * 에러 문구를 가지고 있는 객체
 */
const ERROR = Object.freeze({
    BRIDGE_SIZE_OUT_BOUNDARY: "[ERROR] 3이상 20이하 사이의 숫자여야 합니다.\n",
    BRIDGE_SIZE_NOT_NUMBER: "[ERROR] 입력값은 숫자여야 합니다.\n",
    INVALID_MOVE_TYPE: "[ERROR] 입력값은 U 또는 D 여야합니다.\n",
    INVALID_COMMAND: '[ERROR] 입력값은 R 또는 Q 여야합니다.\n',
    FAIL_MOVE: '[ERROR] 건널 수 없는 곳 입니다.\n'
});

/**
 * 에러 타입에 따라 실행해야할 에러 핸들링 메서드들
 */
const ERROR_HANDLING = Object.freeze({
    "[ERROR] 3이상 20이하 사이의 숫자여야 합니다.\n": (bridgeGame, message) => {
        const ErrorView = require('../view/ErrorView');
        const InputView = require('../view/InputView');
        ErrorView.printError(message);
        InputView.readBridgeSize(bridgeGame);
    },
    "[ERROR] 입력값은 숫자여야 합니다.\n": (bridgeGame, message) => {
        const ErrorView = require('../view/ErrorView');
        const InputView = require('../view/InputView');
        ErrorView.printError(message);
        InputView.readBridgeSize(bridgeGame);
    },
    "[ERROR] 입력값은 U 또는 D 여야합니다.\n": (bridgeGame, message) => {
        const ErrorView = require('../view/ErrorView');
        const InputView = require('../view/InputView');
        ErrorView.printError(message);
        InputView.readMoving(bridgeGame);
    },
    '[ERROR] 건널 수 없는 곳 입니다.\n': (bridgeGame) => {
        const OutputView = require('../view/OutputView');
        const InputView = require('../view/InputView');
        OutputView.printMap(bridgeGame);
        InputView.readGameCommand(bridgeGame);
    },
    '[ERROR] 입력값은 R 또는 Q 여야합니다.\n': (bridgeGame, message) => {
        const ErrorView = require('../view/ErrorView');
        const InputView = require('../view/InputView');
        ErrorView.printError(message);
        InputView.readGameCommand(bridgeGame);
    }
});

module.exports = { ERROR, ERROR_HANDLING };