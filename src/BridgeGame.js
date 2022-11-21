const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const MakeMap = require('./MakeMap');
const OutputView = require('./OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeShape;

  #playerArr;

  #resultBridge;

  #totalTry = 1;

  constructor() {
    this.#playerArr = [];
    this.#resultBridge = {};
  }

  start() {
    OutputView.startMessage();
    this.getSize();
  }

  getSize() {
    InputView.readBridgeSize(this);
  }

  createMap(size) {
    const bridgeShape = BridgeMaker.makeBridge(size, this.randNum);
    this.#bridgeShape = bridgeShape;
    InputView.readMoving(this);
  }

  randNum() {
    return BridgeRandomNumberGenerator.generate();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput) {
    const idx = this.#playerArr.length;
    const isMove = this.checkMovePosible({ idx, userInput });
    this.#playerArr.push({ userInput, isMove });
    this.createPrintMap(this.#playerArr);
  }

  createPrintMap(playerArr) {
    this.#resultBridge = new MakeMap(playerArr);
    this.printMove();
  }

  checkMovePosible({ idx, userInput }) {
    return this.#bridgeShape[idx] === userInput;
  }

  printMove() {
    OutputView.printMap(this, this.#resultBridge);
  }

  NextMove() {
    const { isEnd, isMove } = this.moveEndBool();
    if (!isEnd) {
      return this.nextInput(isMove);
    }
    if (isEnd) {
      this.end();
    }
  }

  moveEndBool() {
    const currIdx = this.#playerArr.length - 1;
    const isEnd = this.#bridgeShape.length === this.#playerArr.length;
    const { isMove } = this.#playerArr[currIdx];
    return { isEnd, isMove };
  }

  nextInput(isMove) {
    if (isMove) {
      return InputView.readMoving(this);
    }
    return InputView.readGameCommand(this);
  }

  end() {
    const { isEnd, isMove } = this.moveEndBool();
    const isSuccess = isEnd && isMove;
    const success = this.sucessResult(isSuccess);
    OutputView.printResult(this.#resultBridge, this.#totalTry, success);
  }

  sucessResult(result) {
    const resultStr = result ? '성공' : '실패';
    return resultStr;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
}
}

module.exports = BridgeGame;
