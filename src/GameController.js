const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class GameController {
    #bridgeGame;
    #bridgeSize;
    #bridge;

    start() {
        OutputView.startMessage();
        this.bridgeSize();
    }

    bridgeSize() {
        try {
            this.#bridgeSize = InputView.readBridgeSize();
            if (this.#bridgeSize.status === true) {
                this.#bridge = BridgeMaker.makeBridge(parseInt(this.#bridgeSize.data), BridgeRandomNumberGenerator.generate);
                this.createBridge(this.#bridge)
            }
        }
        catch {
            OutputView.errorMessage();
            this.bridgeSize();
        }
    }

    createBridge(bridge) {
        this.#bridgeGame = new BridgeGame(bridge, this.#bridgeSize.data);
        this.movingBridge();
    }

    movingBridge() {
        const moving = InputView.readMoving();
        if (moving.status === true) {
            const result = this.#bridgeGame.move(moving.data);
            this.progressGame(result.currentStatus, result.progressStatus, result.retryCount);
        }
    }

    progressGame(currentStatus, progressStatus, retryCount) {
        OutputView.printMap(this.#bridge, currentStatus);
        if (progressStatus === 'end')
            OutputView.printResult(this.#bridgeGame, true);
        else if (progressStatus === 'correct') 
            this.movingBridge();
        else if (progressStatus === 'not correct')
            this.gameOver();
    }

    gameOver() {
        const command = InputView.readGameCommand();
        OutputView.printResult(this.#bridgeGame, false);
        if (command === 'R') {
            this.#bridgeGame.retry();
            this.movingBridge();
        }
    }
}

module.exports = GameController;