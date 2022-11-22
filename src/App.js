// @ts-check

const BridgeGame = require('./BridgeGame');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
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
        const { moveStatus, pathMap } = this.#bridgeGame.move(moving);
        OutputView.printMap(pathMap);
        this.#commands[moveStatus].call(this);
      } catch (error) {
        MissionUtils.Console.print(error.message);
        this.continueGame();
      }
    });
  }

  restartGame() {
    InputView.readGameCommand((gameCommand) => {
      try {
        const command = this.#bridgeGame.convertStringToCommand(gameCommand);
        this.#commands[command].call(this);
      } catch (error) {
        MissionUtils.Console.print(error.message);
        this.restartGame();
      }
    });
  }

  quitGame() {
    const { count, isSuccess, pathMap } = this.#bridgeGame.getResultInfo();

    OutputView.printResult(pathMap, isSuccess, count);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
