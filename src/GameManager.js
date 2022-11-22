const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MESSAGE } = require('./const.js');


class GameManager {
    #isSuccessArray

    constructor() {
        this.Game = new BridgeGame();
        this.#isSuccessArray = [];
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
        OutputView.printMap(bridge, currLocation+1, this.#isSuccessArray[currLocation]);
        if(this.#isSuccessArray[currLocation]) return this.getMoveDirection(bridge);
        // to retry;
    }



}

module.exports = GameManager;