const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, STRUCTURE } = require("./constant/message.js");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation.js");
const { printResult, printMap } = require("./OutputView.js");

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

    // 다리 생성 이벤트
    createBridgeGame(size) {
        const bridgeGame = new BridgeGame(makeBridge(size, generate));
        this.readMoving(bridgeGame);
    },

    // 이동 이벤트
    playMoving(bridgeGame, move) {
        const isKeyUp = bridgeGame.move(move);
        if (bridgeGame.isBadMove(isKeyUp)) {
            return this.fail(bridgeGame, isKeyUp);
        }

        if (bridgeGame.isClear()) {
            return this.clear(bridgeGame, isKeyUp);
        }

        this.goodMove(bridgeGame, isKeyUp);
    },

    fail(bridgeGame, isKeyUp) {
        bridgeGame.pushBridgeTrace(isKeyUp, STRUCTURE.BAD);
        printMap(bridgeGame);

        this.readGameCommand(bridgeGame);
    },

    clear(bridgeGame, isKeyUp) {
        bridgeGame.pushBridgeTrace(isKeyUp, STRUCTURE.GOOD);

        return printResult(bridgeGame, MESSAGE.SUCCESS);
    },

    goodMove(bridgeGame, isKeyUp) {
        bridgeGame.pushBridgeTrace(isKeyUp, STRUCTURE.GOOD);
        printMap(bridgeGame);

        this.readMoving(bridgeGame);
    },

    // 재시작 이벤트
    playGameCommand(bridgeGame, answer) {
        if (bridgeGame.questionRetry(answer)) {
            return this.readMoving(bridgeGame);
        }
        printResult(bridgeGame, MESSAGE.FAIL);
    },
};

module.exports = InputView;
