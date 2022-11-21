const Print = require('./Print');
const OutputView  = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { Console } = require('@woowacourse/mission-utils');

class GameManager {
    #bridgeGame
    #bridgeLength

    constructor() {
        this.#bridgeGame = new BridgeGame();
        this.#bridgeLength = 0;
    }

    start() {
        Print.StartMessage();
        Print.Blank();
        InputView.readBridgeSize(this.#bridgeLength);
        Print.UserInput(this.#bridgeLength);
    }
}

module.exports = GameManager;