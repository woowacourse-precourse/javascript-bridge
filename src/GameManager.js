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

    start() {

    }
    
    playRound() {
    }
    
}

module.exports = GameManager;