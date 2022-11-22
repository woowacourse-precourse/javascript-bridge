const Print = require('./Print');
const OutputView  = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const { BridgeLengthInput, DirectionChoiceInput, RetryInput} = require('./Validator/Validator');

class GameManager {
    #bridgeGame


    constructor() {
        this.#bridgeGame = new BridgeGame();
    }

    startGame() {
        Print.StartMessage();
        this.getBridgeLength();
    }

    getBridgeLength() {
        InputView.readBridgeSize(this.isValidLength.bind(this));
    }

    isValidLength(userInput) {
        this.bridgeLengthInput = new BridgeLengthInput();
        try {
            this.bridgeLengthInput.check();
            this.generateBridge(userInput);
        } catch{
            this.getBridgeLength();
        }
    }

    generateBridge(userInput) {
        this.#bridgeGame.createBridge(userInput);
        this.playRound();
    }
    
    playRound() {
    }
    
}

module.exports = GameManager;