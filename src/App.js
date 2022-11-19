const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const BridgeValidation = require('./validations/Bridge');
const MoveValidation = require('./validations/Move');

class App {
  game;

  // constructor() {
  // }

  play() {
    OutputView.printStart();

    InputView.startInteraction.bind(this)([this.createBridgeGame, this.moveForward]);
  }

  createBridgeGame(input) {
    BridgeValidation.isValidSize(input);

    this.game = new BridgeGame(input);
  }

  moveForward(input) {
    MoveValidation.validate(input);
  }
}

new App().play();

module.exports = App;
