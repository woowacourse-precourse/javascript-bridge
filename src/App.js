const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const MissionUtils = require('@woowacourse/mission-utils');
const ServiceMessages = require('./ServiceMessages');

class App {
  #bridgeGame;
  #totalCount = 1;

  constructor() {
    OutputView.printStartMessage();
  }

  play() {
    this.getBridgeSize();
  }

  restart() {
    if (this.#bridgeGame.allBridgeCrossed()) {
      this.#totalCount += 1;
      this.getUserMove();
    } else {
      this.#totalCount = 1;
      this.getBridgeSize();
    }
  }

  getBridgeSize() {
    InputView.readBridgeSize(bridgeSize => {
      try {
        Validator.checkBridgeSize(bridgeSize);
        this.makeBridge(bridgeSize);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.getBridgeSize();
      }
    });
  }

  makeBridge(bridgeSize) {
    this.#bridgeGame = new BridgeGame(bridgeSize);
    this.getUserMove();
  }

  getUserMove() {
    InputView.readMoving(userMove => {
      try {
        Validator.checkUserMoving(userMove);
        this.makeMove(userMove);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.getUserMove();
      }
    });
  }

  makeMove(userMove) {
    const gameResult = this.#bridgeGame.move(userMove);
    const map = this.#bridgeGame.makeMap(userMove);

    OutputView.printMap(map);
    if (gameResult === 'O') {
      this.moveToNext(map, gameResult);
    }
    if (gameResult === 'X') {
      this.printFinalResult(map, gameResult);
    }
  }

  moveToNext(map, gameResult) {
    if (this.#bridgeGame.allBridgeCrossed()) {
      this.getUserMove();
    } else {
      this.printFinalResult(map, gameResult);
      this.getBridgeSize();
    }
  }
  printFinalResult(map, gameResult) {
    const successOrFail =
      gameResult === 'O' ? ServiceMessages.SUCCESS : ServiceMessages.FAIL;

    OutputView.printResult(map, successOrFail, this.#totalCount);
    this.getUserCommand();
  }

  getUserCommand() {
    InputView.readGameCommand(command => {
      try {
        Validator.checkRestartOrQuit(command);
        this.restartOrQuit(command);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.getUserCommand();
      }
    });
  }

  restartOrQuit(command) {
    if (this.#bridgeGame.retry(command)) {
      this.restart();
    } else {
      MissionUtils.Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
