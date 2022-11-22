const BridgeGame = require('./BridgeGame');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
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
        OutputView.printErrorMessage(error.message);
        this.startGame();
      }
    });
  }

  continueGame() {
    InputView.readMoving((moving) => {
      try {
        const { status, pathMap } = this.#bridgeGame.move(moving);
        OutputView.printMap(pathMap);
        this.#commands[status].call(this);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
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
        OutputView.printErrorMessage(error.message);
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

module.exports = App;
