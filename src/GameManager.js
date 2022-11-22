const {Console} = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class GameManager {
    constructor() {
        this.inputView = InputView;
        this.outputView = OutputView;
        this.bridgeGame = null;
    }
    setBridgeAnswer() {
        let size;
        while(!size) {
            try {
                size = this.inputView.readBridgeSize();
            } catch (err) {
                Console.print(err.message);
            }
        }
        const bridgeAnswer = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

        this.bridgeGame = new BridgeGame(size, bridgeAnswer);
    }

    setMoving() {
        let moving;
        while(!moving) {
            try {
                moving = this.inputView.readMoving();
            } catch (err) {
                Console.print(err.message);
            }
        }
        return moving;
    }

    setGameCommand() {
        let gameCommand;
        while(!gameCommand) {
            try {
                gameCommand = this.inputView.readGameCommand();
            } catch (err) {
                Console.print(err.message);
            }
        }
        return gameCommand;
    }
}

module.exports = GameManager;