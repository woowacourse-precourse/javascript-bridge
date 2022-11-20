const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message.js");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation.js");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    /**
     * 다리의 길이를 입력받는다.
     */
    readBridgeSize() {
        Console.readLine(MESSAGE.SIZE, (size) => {
            const isErrorBridgeSize = Validation.checkBridgeSizeInput(size);
            if (isErrorBridgeSize) {
                return this.readBridgeSize();
            }
            const bridgeGame = new BridgeGame(makeBridge(size, generate));
            this.readMoving(bridgeGame);
        });
    },

    /**
     * 사용자가 이동할 칸을 입력받는다.
     */
    readMoving(bridgeGame) {
        Console.readLine(MESSAGE.MOVE, (move) => {
            const isErrorMoving = Validation.checkMoveInput(move);
            if (isErrorMoving) {
                return this.readMoving(bridgeGame);
            }
            if (bridgeGame.isBadMove(move)) {
                bridgeGame.showFailBridge(move);
                return this.readGameCommand(bridgeGame);
            }
            if (bridgeGame.isSuccess(move)) {
                return bridgeGame.showResult(MESSAGE.SUCCESS);
            }
            bridgeGame.move(move);
            this.readMoving(bridgeGame);
        });
    },

    /**
     * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
     */
    readGameCommand(bridgeGame) {
        Console.readLine(MESSAGE.RESTART, (answer) => {
            const isErrorGameCommand = Validation.checkGameCommandInput(answer);
            if (isErrorGameCommand) {
                return this.readGameCommand(bridgeGame);
            }
            if (bridgeGame.questionRetry(answer)) {
                return this.readMoving(bridgeGame);
            }
            return bridgeGame.showResult(MESSAGE.FAIL);
        });
    },
};

module.exports = InputView;
