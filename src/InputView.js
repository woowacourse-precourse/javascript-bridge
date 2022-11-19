const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message.js");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation.js");
const OutputView = require("./OutputView.js");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    /**
     * 다리의 길이를 입력받는다.
     */
    readBridgeSize() {
        // console.log("InputView.readBridgeSize-----------");
        Console.readLine(MESSAGE.SIZE, (size) => {
            OutputView.printSpaceLine();
            this.hasSizeError(size);

            const bridgeGame = new BridgeGame(makeBridge(size, generate));
            this.readMoving(bridgeGame);
        });
    },

    hasSizeError(size) {
        const isBridgeSizeError = Validation.checkBridgeSizeInput(size);
        if (isBridgeSizeError) {
            return this.readBridgeSize();
        }
    },

    /**
     * 사용자가 이동할 칸을 입력받는다.
     */
    readMoving(bridgeGame) {
        // console.log("InputView.readMoving-----------");
        Console.readLine(MESSAGE.MOVE, (move) => {
            Validation.checkMoveInput(move);
            if (bridgeGame.isBadMove(move)) {
                bridgeGame.showFail(move);
                this.readGameCommand(bridgeGame);
            } else {
                if (bridgeGame.isSuccess(move)) {
                    bridgeGame.showSuccess(move);
                } else {
                    bridgeGame.move(move);
                    this.readMoving(bridgeGame);
                }
            }
        });
    },

    /**
     * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
     */
    readGameCommand(bridgeGame) {
        // console.log("InputView.readGameCommand-----------");
        Console.readLine(MESSAGE.RESTART, (answer) => {
            Validation.checkRestartInput(answer);
            if (bridgeGame.retry(answer)) {
                this.readMoving(bridgeGame);
            } else {
                bridgeGame.showFinish();
            }
        });
    },
};

module.exports = InputView;
