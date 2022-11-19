const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const BridgeValidation = require('./validations/Bridge');
const MoveValidation = require('./validations/Move');
const GameControlValidation = require('./validations/GameControl');

class App {
  game;

  play() {
    OutputView.printStart();

    InputView.startInteraction.bind(this)([this.createBridgeGame, this.moveForward, this.gameControl]);
  }

  createBridgeGame(input) {
    BridgeValidation.isValidSize(input);

    this.game = new BridgeGame(input);
  }

  moveForward(input) {
    MoveValidation.validate(input);

    this.game.move(input);
  }

  gameControl(input) {
    GameControlValidation.validate(input);
  }
}

new App().play();

module.exports = App;
