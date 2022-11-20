const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message.js");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation.js");

const InputView = {
    readBridgeSize() {
        Console.readLine(MESSAGE.SIZE, (size) => {
            const isErrorBridgeSize = Validation.checkBridgeSizeInput(size);
            if (isErrorBridgeSize) {
                return this.readBridgeSize();
            }
            this.createBridgeGame(size);
        });
    },

    createBridgeGame(size) {
        const bridgeGame = new BridgeGame(makeBridge(size, generate));
        this.readMoving(bridgeGame);
    },

    readMoving(bridgeGame) {
        Console.readLine(MESSAGE.MOVE, (move) => {
            const isErrorMoving = Validation.checkMoveInput(move);
            if (isErrorMoving) {
                return this.readMoving(bridgeGame);
            }
            this.playMoving(bridgeGame, move);
        });
    },

    playMoving(bridgeGame, move) {
        if (bridgeGame.isBadMove(move)) {
            return this.readGameCommand(bridgeGame);
        }
        if (bridgeGame.isSuccess(move)) {
            return bridgeGame.showResult(MESSAGE.SUCCESS);
        }
        bridgeGame.move(move);
        this.readMoving(bridgeGame);
    },

    readGameCommand(bridgeGame) {
        Console.readLine(MESSAGE.RESTART, (answer) => {
            const isErrorGameCommand = Validation.checkGameCommandInput(answer);
            if (isErrorGameCommand) {
                return this.readGameCommand(bridgeGame);
            }
            this.playGameCommand(bridgeGame, answer);
        });
    },

    playGameCommand(bridgeGame, answer) {
        if (bridgeGame.questionRetry(answer)) {
            return this.readMoving(bridgeGame);
        }
        bridgeGame.showResult(MESSAGE.FAIL);
    },
};

module.exports = InputView;
