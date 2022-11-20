const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const validator = require('../utils/validator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../model/BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');

class Controller {
  #bridgeWay;
  #userSelect;
  #BridgeGame;
  #movingResult;
  #attemptsNum;
  #isSuccess;

  constructor() {
    this.#bridgeWay;
    this.#userSelect = [];
    this.#BridgeGame = new BridgeGame();
    this.#movingResult;
    this.#attemptsNum = 1;
    this.#isSuccess = false;
  }

  start() {
    OutputView.printGameStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  getBridgeSize(size) {
    try {
      validator.checkBridgeSizeInput(size);
      this.getBridge(size, BridgeRandomNumberGenerator.generate);
      this.inputUserMoving();
    } catch {
      this.inputBridgeSize();
    }
  }

  getBridge(size, generater) {
    this.#bridgeWay = BridgeMaker.makeBridge(size, generater);
  }

  inputUserMoving() {
    InputView.readMoving(this.getUserMoving.bind(this));
  }

  getUserMoving(select) {
    try {
      validator.checkUserMovingInput(select);
      this.#userSelect.push(select);
      this.getMovingResult(this.#bridgeWay, this.#userSelect);
    } catch {
      this.inputUserMoving();
    }
  }

  getMovingResult(bridgeWay, userSelect) {
    let [bridgeSize, userInputLength] = [bridgeWay.length, userSelect.length];
    this.#movingResult = this.#BridgeGame.move(
      bridgeWay,
      userSelect,
      userInputLength
    );
    OutputView.printMap(this.#movingResult);
    this.checkIsGameOver(this.#movingResult, bridgeSize, userInputLength);
  }

  checkIsGameOver(result, bridgeSize, userInputLength) {
    if (result.isGameOver) {
      this.inputGameOver();
      return;
    }
    if (userInputLength < bridgeSize) this.inputUserMoving();
    if (userInputLength === bridgeSize) {
      this.#isSuccess = true;
      this.printGameResult();
    }
  }

  inputGameOver() {
    InputView.readGameCommand(this.getGameOverSelect.bind(this));
  }

  getGameOverSelect(gameOverSelect) {
    try {
      validator.checkGameOverSelect(gameOverSelect);
      this.runSelectResult(gameOverSelect);
    } catch {
      this.inputGameOver();
    }
  }

  runSelectResult(gameOverSelect) {
    gameOverSelect === 'R'
      ? (this.#BridgeGame.retry(),
        (this.#userSelect = []),
        (this.#attemptsNum += 1),
        this.inputUserMoving())
      : this.printGameResult();
  }

  printGameResult() {
    OutputView.printResult(
      this.#movingResult,
      this.#attemptsNum,
      this.#isSuccess
    );
  }
}

module.exports = Controller;
