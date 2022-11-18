const BridgeMaker = require("../BridgeMaker");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const Position = require("../model/Position");
const Bridge = require("../model/Bridge");
const Result = require("../model/Result");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {Bridge} */
  #bridge;
  /** @type {Result} */
  #curResult;
  /** @type {number} */
  #tryCount;

  constructor() {
    this.#tryCount = 1;
    InputView.readBridgeSize(this.start.bind(this));
  }
  start(command) {
    OutputView.printStart();
    const size = parseInt(command);
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    InputView.readMoving(this.move.bind(this));
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    const index = command.toUpperCase() === "U" ? 0 : 1;
    const position = new Position(index);
    this.#bridge.movePosition(position);
    this.#curResult = this.#bridge.currentResult();
    if (this.#curResult.isFailed()) {
      InputView.readGameCommand(this.retry.bind(this));
      return;
    }
    if (this.#curResult.isCompelete()) {
      OutputView.printResult(this.#curResult.stringify(), this.#tryCount);
      return;
    }
    OutputView.printMap(this.#curResult.stringify());
    InputView.readMoving(this.move.bind(this));
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    const isRetry = command.toUpperCase() === "R" ? true : false;
    if (!isRetry) {
      OutputView.printResult(this.#curResult.stringify(), this.#tryCount);
      return;
    }
    this.#bridge.emptyPositions();
    InputView.readMoving(this.move.bind(this));
  }
}

module.exports = BridgeGame;
