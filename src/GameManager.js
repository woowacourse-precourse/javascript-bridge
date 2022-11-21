const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MESSAGE } = require('./const.js');


class GameManager {

    constructor() {
        this.Game = new BridgeGame();
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

    getMoveDirection(bridge, location) {
        InputView.readMoving((moveDirection) => {
            try {
                Validator.validateMoveDirection(moveDirection);
                this.afterMove(bridge,location,this.Game.move(bridge,location,moveDirection));
            } catch(error) {
                OutputView.displayMessage(error.message);
                this.getMoveDirection(bridge);
            }            
        })
    }

    afterMove(bridge, location, isSuccess) {
        OutputView.printMap(bridge, location+1, isSuccess);
        if(isSuccess) return this.getMoveDirection(bridge, location+1);
        // to retry;
    }



}

module.exports = GameManager;