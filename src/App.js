// @ts-check

const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  /** @type {BridgeGame} */
  #bridgeGame;
  #command;
  #isSuccess;

  constructor() {
    this.#command = [this.restartGame, this.quitGame, this.continueGame];
    this.#isSuccess = false;
  }

  play() {
    OutputView.printStart();
    this.startGame();
  }

  startGame() {
    InputView.readBridgeSize((bridgeSize) => {
      this.#bridgeGame = new BridgeGame(Number(bridgeSize));
      this.continueGame();
    });
  }

  continueGame() {
    InputView.readMoving((moving) => {
      const status = this.#bridgeGame.move(moving);
      const markingPaper = this.#bridgeGame.getMarkingPaper();

      OutputView.printMap(markingPaper);

      this.#isSuccess = status !== 0;
      this.#command[status].call(this);
    });
  }

  restartGame() {
    InputView.readGameCommand((gameCommand) => {
      const status = this.#bridgeGame.retry(gameCommand);
      this.#command[status].call(this);
    });
  }

  quitGame() {
    const count = this.#bridgeGame.getCount();
    const markingPaper = this.#bridgeGame.getMarkingPaper();

    OutputView.printResult(markingPaper, this.#isSuccess, count);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
