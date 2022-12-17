const CONSTANT = require('../lib/Constant');
const Bridge = require('./Bridge');
const ViewPrinter = require('../view/ViewPrinter');
const InputPrinter = require('../view/InputPrinter');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #inputPrinter;
  #viewPrinter;
  #state = {
    tried: CONSTANT.GAME_RESULT.DEFAULT,
    isWin: CONSTANT.GAME_RESULT.LOSS,
  };

  constructor() {
    this.#bridge = new Bridge(this);
    this.#viewPrinter = new ViewPrinter(this);
    this.#inputPrinter = new InputPrinter(this);
  }

  setState(result) {
    this.#state.isWin = result;
  }

  getBridge() {
    return this.#bridge;
  }

  getView() {
    return this.#viewPrinter;
  }

  getState() {
    return this.#state;
  }

  play() {
    this.#viewPrinter.sayHello();
    this.#inputPrinter.insertBridgeSize();
  
  }

  continue() {
    const haveX = this.#bridge.haveXValue();

    if (haveX) return this.#inputPrinter.selectRetry();
    if (this.#bridge.isGameEnd()) return this.endGame();
    if (!haveX) return this.#inputPrinter.selectBridgeDirection();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const index = this.#bridge.getCurrentBridge().length;

    if (direction === CONSTANT.DIRECTION.UP)
      this.#bridge.moveUpside(direction, index);
    if (direction === CONSTANT.DIRECTION.DOWN)
      this.#bridge.moveDownside(direction, index);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#state.tried += 1;
    this.#bridge.setAllBridgeEmpty();
    this.#inputPrinter.selectBridgeDirection();
  }

  setWinOrLoss() {
    if (!this.#bridge.haveXValue()) this.setState(CONSTANT.GAME_RESULT.WIN);
  }

  endGame() {
    this.setWinOrLoss();
    this.#viewPrinter.printEndResult();
  }
}

module.exports = BridgeGame;
