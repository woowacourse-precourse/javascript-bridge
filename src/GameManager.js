const Print = require('./Print');
const OutputView  = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { Console } = require('@woowacourse/mission-utils');

class GameManager {
    #bridgeGame

    constructor() {
        this.#bridgeGame = new BridgeGame();
    }

    start() {
        Print.StartMessage();
        Print.Blank();
        OutputView.readBridgeSize();
    }
}

module.exports = GameManager;