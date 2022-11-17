const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { Console } = require('@woowacourse/mission-utils');

class App {
  /** @type {BridgeGame} */
  #bridgeGame;
  #command;

  constructor() {
    this.#command = [this.restart, this.quitGame, this.movePlayer];
  }

  play() {
    OutputView.printStart();
    this.startGame();
  }

  startGame() {
    InputView.readBridgeSize((bridgeSize) => {
      this.#bridgeGame = new BridgeGame(Number(bridgeSize));
      this.movePlayer();
    });
  }

  movePlayer() {
    InputView.readMoving((moving) => {
      const { status, markingPaper } = this.#bridgeGame.move(moving);
      OutputView.printMap(markingPaper);
      this.#command[status].call(this);
    });
  }

  restart() {
    InputView.readGameCommand((gameCommand) => {
      const status = this.#bridgeGame.retry(gameCommand);
      this.#command[status].call(this);
    });
  }

  quitGame() {
    const { markingPaper, isSuccess, count } = this.#bridgeGame.getResultInfo();
    OutputView.printResult(markingPaper, isSuccess, count);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
