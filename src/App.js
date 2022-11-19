// @ts-check

const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  /** @type {BridgeGame} */
  #bridgeGame;
  #commands;

  constructor() {
    this.#commands = [this.continueGame, this.quitGame, this.restartGame];
  }

  play() {
    OutputView.printStart();
    this.startGame();
  }

  startGame() {
    InputView.readBridgeSize((bridgeSize) => {
      try {
        this.#bridgeGame = new BridgeGame(bridgeSize);
        this.continueGame();
      } catch (error) {
        MissionUtils.Console.print(error.message);
        this.startGame();
      }
    });
  }

  continueGame() {
    InputView.readMoving((moving) => {
      try {
        const status = this.#bridgeGame.move(moving);
        const markingPaper = this.#bridgeGame.getMarkingPaper();
        OutputView.printMap(markingPaper);

        this.#commands[status].call(this);
      } catch (error) {
        MissionUtils.Console.print(error.message);
        this.continueGame();
      }
    });
  }

  restartGame() {
    InputView.readGameCommand((gameCommand) => {
      try {
        const status = this.#bridgeGame.retry(gameCommand);
        this.#commands[status].call(this);
      } catch (error) {
        MissionUtils.Console.print(error.message);
        this.restartGame();
      }
    });
  }

  quitGame() {
    const { count, isSuccess, markingPaper } = this.#bridgeGame.getResultInfo();
    OutputView.printResult(markingPaper, isSuccess, count);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
