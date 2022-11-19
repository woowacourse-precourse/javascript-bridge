const InputView = require('./views/InputView');
const BridgeGame = require('./controllers/BridgeGame');
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

    const canMoveForward = this.game.move(input);
    const isGameEnd = this.game.isGameEnd();

    if (isGameEnd && canMoveForward) this.gameEnd();

    return [canMoveForward, isGameEnd];
  }

  gameControl(input) {
    GameControlValidation.validate(input);
  }

  gameEnd() {
    this.game.printResult();
    InputView.close();
  }
}

new App().play();

module.exports = App;
