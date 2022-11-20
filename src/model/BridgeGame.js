const InputView = require("../console/InputView");
const Constant = require("../lib/Constant");
const Bridge = require("./Bridge");
const Printer = require("../view/Printer");
const BridgeMaker = require("../BridgeMaker")
const Generator = require("../lib/BridgeRandomNumberGenerator")

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #printer;
  #state = {
    tried: Constant.GAME_RESULT.DEFAULT,
    isWin: Constant.GAME_RESULT.LOSS,
  };

  constructor() {
    this.#bridge = new Bridge(this);
    this.#printer = new Printer(this);
  }

  play() {
    this.#printer.sayHello();
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
    const setBridge = (size) => {
      const bridge = BridgeMaker.makeBridge(size, Generator.generate)
      this.#bridge.setOriginalBridge(bridge)
    }
    const nextCallback = this.selectDirection.bind(this);
    const errorCallback = this.makeBridge.bind(this);

    InputView.readBridgeSize(setBridge, nextCallback, errorCallback);
  }

  selectDirection() {
    const moveCallback = this.move.bind(this);
    const printCallback = () => {
      this.#printer.printBridge(this.#bridge.getBridges());
      this.continue();
    };
    const errorCallback = this.selectDirection.bind(this);
    InputView.readMoving(moveCallback, printCallback, errorCallback);
  }

  continue() {
    const haveX = this.#bridge.haveXvalue();

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
    const errorCallback = this.retry.bind(this);

    InputView.readGameCommand(restartCallback, quitCallback, errorCallback);
  }

  endGame() {
    const bridges = this.#bridge.getBridges();
    const state = this.getState();

    this.setWinOrLoss();
    this.#printer.printEndResult(bridges, state);
  }

  setWinOrLoss() {
    if (!this.#bridge.haveXvalue()) this.setState(Constant.GAME_RESULT.WIN);
  }
}

module.exports = BridgeGame;
