const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validator = require('./Validator');
const MissionUtils = require('@woowacourse/mission-utils');

const validator = new Validator();

class App {
  #bridge;
  #bridgeGame;
  #result = { upper: [], lower: [] };
  #totalCount = 1;

  constructor() {
    OutputView.printStartMessage();
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    this.getBridgeSize();
  }

  restart() {
    this.#result = { upper: [], lower: [] };
    if (this.#bridge.length > 0) {
      this.#totalCount += 1;
      this.getUserMoving();
    } else {
      this.#totalCount = 1;
      this.getBridgeSize();
    }
  }

  getBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      try {
        validator.checkBridgeSize(bridgeSize);
        this.makeBridge(bridgeSize);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.getBridgeSize();
      }
    });
  }

  makeBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.getUserMoving();
  }

  getUserMoving() {
    InputView.readMoving((userMoving) => {
      try {
        validator.checkUserMoving(userMoving);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.getUserMoving();
      }
      this.makeMove(userMoving);
    });
  }

  makeMove(userMoving) {
    if (userMoving === 'U') {
      this.#result.lower.push(' ');
      this.moveToUpper(userMoving);
    }
    if (userMoving === 'D') {
      this.#result.upper.push(' ');
      this.moveToLower(userMoving);
    }
  }

  moveToUpper(userMoving) {
    const gameResult = this.#bridgeGame.move(userMoving, this.#bridge);

    if (gameResult === 'O') {
      this.#result.upper.push('O');
      this.printMovingResult();
      this.#bridge.shift();
      this.moveToNext(gameResult);
    }
    if (gameResult === 'X') {
      this.#result.upper.push('X');
      this.printMovingResult();
      this.printFinalResult(gameResult);
    }
  }

  moveToLower(userMoving) {
    const gameResult = this.#bridgeGame.move(userMoving, this.#bridge);

    if (gameResult === 'O') {
      this.#result.lower.push('O');
      this.printMovingResult();
      this.#bridge.shift();
      this.moveToNext(gameResult);
    }
    if (gameResult === 'X') {
      this.#result.lower.push('X');
      this.printMovingResult();
      this.printFinalResult(gameResult);
    }
  }

  printMovingResult() {
    OutputView.printMap(this.#result.upper, this.#result.lower);
  }

  moveToNext(gameResult) {
    if (this.#bridge.length > 0) {
      this.getUserMoving();
    } else {
      this.printFinalResult(gameResult);
      this.getBridgeSize();
    }
  }
  printFinalResult(gameResult) {
    gameResult === 'X' ? '실패' : '성공';
    OutputView.printResult(
      this.#result.upper,
      this.#result.lower,
      gameResult,
      this.#totalCount
    );
    this.getUserCommand();
  }

  getUserCommand() {
    InputView.readGameCommand((command) => {
      try {
        validator.checkRestartOrQuit(command);
      } catch (error) {
        OutputView.printErrorMessages(error);
        this.getUserCommand();
      }
      this.restartOrQuit(command);
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
