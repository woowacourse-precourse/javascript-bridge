const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  game;
  isPossible;
  isEnd;

  play() {
    OutputView.printStart();
    const { createGame, movePlayer, getGameState, gameEndControl } = this;
    const callbackArr = [createGame, movePlayer, getGameState, gameEndControl];
    InputView.readBridgeSize.bind(this)(callbackArr);
  }

  createGame(input) {
    this.game = new BridgeGame(input);
  }

  movePlayer(direction) {
    this.isPossible = this.game.move(direction);
    this.isEnd = this.game.isEnd();
  }

  getGameState() {
    return { isPossible: this.isPossible, isEnd: this.isEnd };
  }

  gameEndControl(input) {
    this.game.endValidate(input);
  }
}

module.exports = App;
