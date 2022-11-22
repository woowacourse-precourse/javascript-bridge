const { MESSAGE, STRUCTURE, ERROR } = require("./constant/message.js");
const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
    printMap(bridgeGame) {
        const bridgeTrace = bridgeGame.makeBridgeTraceForPrint();
        Console.print(STRUCTURE.ENTRANCE + bridgeTrace[0] + STRUCTURE.EXIT);
        Console.print(STRUCTURE.ENTRANCE + bridgeTrace[1] + STRUCTURE.EXIT);
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
        Console.print(ERROR.BRIDGE_INVALID_NUMBER);
    },

    printErrorBridgeSize() {
        Console.print(ERROR.BRIDGE_OVER_RANGE);
    },

    printErrorMoving() {
        Console.print(ERROR.MOVE);
    },

    printErrorGameCommand() {
        Console.print(ERROR.RESTART);
    },
};

module.exports = OutputView;
