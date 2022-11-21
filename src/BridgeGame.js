const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const generateRandomNumber = require("./BridgeRandomNumberGenerator").generate;
const { close } = require("./utils/utils");
const BridgegLengthValidator = require("./utils/BridgeLengthValidator");
const DirectionValidator = require("./utils/DirectionValidator");
const { STATE } = require("./constants/message");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #numberOfAttempt = 1;
  #myPosition = 0;
  #currentMap = { upperPart: [], lowerPart: [] };
  #validPath;
  #bridgeSize;

  getBridgeLengthFromUser() {
    return InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  initState() {
    this.#currentMap = { upperPart: [], lowerPart: [] };
    this.#myPosition = 0;
  }

  makeBridge(bridgeSize) {
    this.#bridgeSize = Number(bridgeSize);
    try {
      BridgegLengthValidator.validate(this.#bridgeSize);
    } catch (e) {
      OutputView.printErrorLog(e);
      this.getBridgeLengthFromUser();
      return;
    }
    this.#validPath = BridgeMaker.makeBridge(this.#bridgeSize, generateRandomNumber);
    this.getMoveDirectionFromUser();
  }

  getMoveDirectionFromUser() {
    this.isGameCleared() ? this.quit() : InputView.readMoving(this.move.bind(this));
  }

  isGameCleared() {
    return this.#bridgeSize === this.#myPosition;
  }

  isValidPath(toBeMoveDirection) {
    return toBeMoveDirection === this.#validPath[this.#myPosition];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    try {
      DirectionValidator.validate(direction);
    } catch (e) {
      OutputView.printErrorLog(e);
      this.getMoveDirectionFromUser();
      return;
    }

    if (this.isValidPath(direction)) {
      this.moveMyPositionForward(direction, STATE.VALID.symbol);
      this.updateMyPositionForward();
      this.getMoveDirectionFromUser();
      return;
    }
    this.moveMyPositionForward(direction, STATE.NOT_VALID.symbol);
    this.askUserRestart();
  }

  updateMyPositionForward() {
    this.#myPosition += 1;
  }

  moveMyPositionForward(direction, symbol) {
    if (direction === "U") {
      this.#currentMap.upperPart.push(symbol);
      this.fillBlankUnselectedPath(0);
    }
    if (direction === "D") {
      this.#currentMap.lowerPart.push(symbol);
      this.fillBlankUnselectedPath(1);
    }
    this.showMovedPath();
  }

  askUserRestart() {
    InputView.readGameCommand(this.updateRestartOrNot.bind(this));
  }

  updateRestartOrNot(restartStatus) {
    if (restartStatus === "R") this.retry();
    if (restartStatus === "Q") this.quit();
  }
  showMovedPath() {
    OutputView.printMap(this.#currentMap);
  }

  fillBlankUnselectedPath(direction) {
    direction === 1
      ? this.#currentMap.upperPart.push("   ")
      : this.#currentMap.lowerPart.push("   ");
  }

  quit() {
    OutputView.printResult(this.#currentMap);
    OutputView.printIsGameClear(this.isGameCleared());
    OutputView.printAttemptsCount(this.#numberOfAttempt);
    this.close();
  }

  close() {
    close();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.initState();
    this.#numberOfAttempt += 1;
    this.getMoveDirectionFromUser();
  }
}

module.exports = BridgeGame;
const a = new BridgeGame();
a.getBridgeLengthFromUser();
