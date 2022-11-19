const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');

class App {
  game;

  // constructor() {
  // }

  play() {
    OutputView.printStart();

    InputView.startInteraction.bind(this)([this.createBridgeGame]);
  }

  createBridgeGame(input) {
    // Validation
    this.game = new BridgeGame(input);
  }
}

new App().play();

module.exports = App;
