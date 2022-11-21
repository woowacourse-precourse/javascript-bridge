const InputView = require("../console/InputView");
const Constant = require("../lib/Constant");
const Bridge = require("./Bridge");
const ViewPrinter = require("../view/ViewPrinter");
const BridgeMaker = require("../BridgeMaker");
const Generator = require("../lib/BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #viewPrinter;
  #state = {
    tried: Constant.GAME_RESULT.DEFAULT,
    isWin: Constant.GAME_RESULT.LOSS,
  };

  constructor() {
    this.#bridge = new Bridge(this);
    this.#viewPrinter = new ViewPrinter(this);
  }

  play() {
    this.#viewPrinter.sayHello();
    this.makeBridge();
  }

  setState(result) {
    this.#state.isWin = result;
  }

  getBridge() {
    return this.#bridge;
  }

  getState() {
    return this.#state;
  }

  makeBridge() {
    const bridgeSetter = (size) => {
      const bridge = BridgeMaker.makeBridge(size, Generator.generate);
      this.#bridge.setOriginalBridge(bridge);
    };
    const nextCallback = this.selectDirection.bind(this);
    this.#viewPrinter.insertBridgeSize(bridgeSetter, nextCallback);
  }

  selectDirection() {
    const moveCallback = this.move.bind(this);
    const printCallback = () => {
      this.#viewPrinter.printBridge(this.#bridge.getBridges());
      this.continue();
    };
    this.#viewPrinter.selectBridgeDirection(moveCallback, printCallback);
  }

  continue() {
    const haveX = this.#bridge.haveXValue();

    if (haveX) return this.retry();
    if (this.#bridge.isGameEnd()) return this.endGame();
    if (!haveX) return this.selectDirection();
  }

  restartGame() {
    this.#state.tried += 1;
    this.#bridge.setAllBridgeEmpty();
    this.selectDirection();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const index = this.#bridge.getCurrentBridge().length;

    if (direction === Constant.DIRECTION.UP)
      this.#bridge.moveUpside(direction, index);
    if (direction === Constant.DIRECTION.DOWN)
      this.#bridge.moveDownside(direction, index);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    const restartCallback = this.restartGame.bind(this);
    const quitCallback = this.endGame.bind(this);

    this.#viewPrinter.selectRetry(restartCallback, quitCallback);
  }

  endGame() {
    const bridges = this.#bridge.getBridges();
    const state = this.getState();

    this.setWinOrLoss();
    this.#viewPrinter.printEndResult(bridges, state);
  }

  setWinOrLoss() {
    if (!this.#bridge.haveXValue()) this.setState(Constant.GAME_RESULT.WIN);
  }
}

module.exports = BridgeGame;
