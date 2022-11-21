const BridgeMaker = require("../BridgeMaker");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const PositionFactory = require("../model/PositionFactory/TwoPositionFactory");
const Bridge = require("../model/Bridge");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {Bridge} */
  #bridge;
  /** @type {number} */
  #tryCount;
  /** @type {PositionFactory} */
  #positionFactory;

  constructor(positionFactory) {
    this.#tryCount = 1;
    this.#positionFactory = positionFactory;
    OutputView.printStart();
    InputView.readBridgeSize(this.start.bind(this));
  }

  start(command) {
    const size = parseInt(command);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = new Bridge(bridge.map(position => this.#positionFactory.createPosition(position.toUpperCase())));
    InputView.readMoving(this.move.bind(this));
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    this.#bridge.movePosition(this.#positionFactory.createPosition(command.toUpperCase()));
    const curResult = this.#bridge.currentResult();
    if (curResult.isFailed()) {
      OutputView.printMap(curResult.stringify());
      InputView.readGameCommand(this.retry.bind(this));
      return;
    }
    if (curResult.isCompelete()) {
      OutputView.printResult(curResult.stringify(), true, this.#tryCount);
      return;
    }
    OutputView.printMap(curResult.stringify());
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
      OutputView.printResult(this.#bridge.currentResult().stringify(), false, this.#tryCount);
      return;
    }
    this.#bridge.emptyPositions();
    this.#tryCount += 1;
    InputView.readMoving(this.move.bind(this));
  }
}

module.exports = BridgeGame;
