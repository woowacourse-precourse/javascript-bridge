const { MESSAGE, STRUCTURE, ERROR } = require("./constant/message.js");
const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
    printMap(bridgeGame) {
        const bridgeTrace = bridgeGame.makeBridgeTraceForPrint();
        bridgeTrace.forEach((trace) => Console.print(STRUCTURE.ENTRANCE + trace + STRUCTURE.EXIT));
        Console.print("");
    },

    printResult(bridgeGame, result) {
        const gameCount = bridgeGame.getGameCount();
        Console.print(MESSAGE.FINISH);
        OutputView.printMap(bridgeGame);
        Console.print(MESSAGE.CLEAR + result);
        Console.print(MESSAGE.TRY + gameCount);
        Console.close();
    },

    printStart() {
        Console.print(MESSAGE.START);
    },

    // Error Message
    printErrorInvalidNumber() {
        Console.print(ERROR.INVALID_NUMBER);
    },

    printErrorBridgeSize() {
        Console.print(ERROR.BRIDGE_RANGE);
    },

    printErrorMoving() {
        Console.print(ERROR.MOVE);
    },

    printErrorGameCommand() {
        Console.print(ERROR.RESTART);
    },
};

module.exports = OutputView;
