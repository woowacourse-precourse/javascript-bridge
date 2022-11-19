const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const bridgeValidation = require('./validations/Bridge');

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
    bridgeValidation.isValidSize(input);

    this.game = new BridgeGame(input);
  }
}

new App().play();

module.exports = App;
