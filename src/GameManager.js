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
        Console.Print('다리 건너기 게임을 시작합니다.');
        this.setBridgeLength();
    }

    setBridgeLength() {
        InputView.readBridgeSize(this.isValidLength.bind(this));
    }

    isValidLength(userInput) {
        this.bridgeLengthInput = new BridgeLengthInput(userInput);
        if (!this.bridgeLengthInput.check()) {
            return this.setBridgeLength();
        }
        return this.generateBridge(userInput);
    }

    generateBridge(userInput) {
        this.#bridgeGame.createBridge(userInput);
    }
    
    playRound() {
        // InputView.readMoving(this) 
    }
    
}

module.exports = GameManager;