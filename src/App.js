// @ts-check

const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const MissionUtils = require('@woowacourse/mission-utils');
const { COMMAND } = require('./utils/const');

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
      this.#bridgeGame = new BridgeGame(Number(bridgeSize));
      this.continueGame();
    });
  }

  continueGame() {
    InputView.readMoving((moving) => {
      const status = this.#bridgeGame.move(moving);
      const markingPaper = this.#bridgeGame.getMarkingPaper();
      OutputView.printMap(markingPaper);

      this.#commands[status].call(this);
    });
  }

  restartGame() {
    InputView.readGameCommand((gameCommand) => {
      const command = COMMAND[gameCommand];
      if (command === COMMAND.R) this.#bridgeGame.retry();

      this.#commands[command].call(this);
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
