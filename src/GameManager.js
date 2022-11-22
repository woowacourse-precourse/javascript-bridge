const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MESSAGE, USER_ANSWER } = require('./const.js');

class GameManager {
    #isSuccessArray
    #totalAttempt

    constructor() {
        this.Game = new BridgeGame();
        this.#isSuccessArray = [];
        this.#totalAttempt = 1;
    }

    startGame() {
        OutputView.displayMessage(MESSAGE.GAME_START);
        this.getInputBridgeLength();
    }

    getInputBridgeLength() {
        InputView.readBridgeSize((bridgeSize) => {
            try {
                Validator.validateBridgeSize(bridgeSize);
                let bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
                this.getMoveDirection(bridge, 0)
            } catch(error) {
                OutputView.displayMessage(error.message)
                this.getInputBridgeLength();
            }
        })
    }

    getMoveDirection(bridge) {
        InputView.readMoving((moveDirection) => {
            try {
                Validator.validateMoveDirection(moveDirection);
                this.#isSuccessArray = this.Game.move(bridge, this.#isSuccessArray, moveDirection);
                this.afterMove(bridge);
            } catch(error) {
                OutputView.displayMessage(error.message);
                this.getMoveDirection(bridge);
            }            
        })
    }

    afterMove(bridge) {
        let currLocation = this.#isSuccessArray.length - 1;
        OutputView.printMap(bridge, this.#isSuccessArray)
        if(!this.#isSuccessArray[currLocation]) return this.getRetryCommand(bridge);
        if(currLocation < bridge.length - 1) return this.getMoveDirection(bridge);
        return this.quitGame(bridge);
    }

    getRetryCommand(bridge) {
        InputView.readGameCommand((isRetry) => {
            try {
                Validator.validateGameCommand(isRetry);
                this.afterGetRetryCommand(bridge, isRetry);
            } catch(error) {
                OutputView.displayMessage(error.message);
                this.getRetryCommand(bridge);
            }            
        })
    }

    afterGetRetryCommand(bridge, isRetry) {
        if(isRetry === USER_ANSWER.RETRY) {
            this.#totalAttempt++;
            this.#isSuccessArray = this.Game.retry();
            this.getMoveDirection(bridge);
        }
        if(isRetry === USER_ANSWER.QUIT) this.quitGame(bridge)
    }

    quitGame(bridge) {
        OutputView.printResult(bridge, this.#isSuccessArray, this.#totalAttempt);
    }
}

module.exports = GameManager;