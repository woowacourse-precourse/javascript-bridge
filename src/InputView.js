const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message.js");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation.js");
const { printResult } = require("./OutputView.js");

const InputView = {
    readBridgeSize() {
        Console.readLine(MESSAGE.SIZE, (size) => {
            const isErrorBridgeSize = Validation.checkBridgeSizeInput(size);
            isErrorBridgeSize ? this.readBridgeSize() : this.createBridgeGame(size);
        });
    },

    readMoving(bridgeGame) {
        Console.readLine(MESSAGE.MOVE, (move) => {
            const isErrorMoving = Validation.checkMoveInput(move);
            isErrorMoving ? this.readMoving(bridgeGame) : this.playMoving(bridgeGame, move);
        });
    },

    readGameCommand(bridgeGame) {
        Console.readLine(MESSAGE.RESTART, (answer) => {
            const isErrorGameCommand = Validation.checkGameCommandInput(answer);
            isErrorGameCommand ? this.readGameCommand(bridgeGame) : this.playGameCommand(bridgeGame, answer);
        });
    },

    createBridgeGame(size) {
        const bridgeGame = new BridgeGame(makeBridge(size, generate));
        this.readMoving(bridgeGame);
    },

    playMoving(bridgeGame, move) {
        if (bridgeGame.isBadMove(move)) {
            return this.readGameCommand(bridgeGame);
        }
        if (bridgeGame.isSuccess(move)) {
            return printResult(bridgeGame, MESSAGE.SUCCESS);
        }
        bridgeGame.move(move);
        this.readMoving(bridgeGame);
    },

    playGameCommand(bridgeGame, answer) {
        if (bridgeGame.questionRetry(answer)) {
            return this.readMoving(bridgeGame);
        }
        printResult(bridgeGame, MESSAGE.SUCCESS);
    },
};

module.exports = InputView;
