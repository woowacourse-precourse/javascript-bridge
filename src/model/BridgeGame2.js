const InputView = require("../console/InputView");
const Constant = require("../lib/Constant");
const Bridge2 = require("./Bridge2");
const Printer = require("../view/Printer");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame2 {
  #bridge2;
  #printer;
  #state = {
    tried: Constant.GAME_RESULT.DEFAULT,
    isWin: Constant.GAME_RESULT.LOSS,
  };

  constructor() {
    this.#bridge2 = new Bridge2(this);
    this.#printer = new Printer(this);
  }

  // play(){
  //   this.#printer.sayHello();
  //   this.makeBridge();
  // }

  setState(result) {
    this.#state.isWin = result;
  }

  getState() {
    return this.#state;
  }

  restartGame() {
    this.#state.tried += 1;
    this.#bridge2.setAllBridgeEmpty();
    //to do 다시시작 기능 추가
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const index = this.#bridge2.getCurrentBridge().length;

    if (direction === Constant.DIRECTION.UP)
      this.#bridge2.moveUpside(direction, index);
    if (direction === Constant.DIRECTION.DOWN)
      this.#bridge2.moveDownside(direction, index);
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
    const bridges = this.#bridge2.getBridges();
    const state = this.getState();

    this.setWinOrLoss();
    this.#printer.printEndResult(bridges, state);
  }

  setWinOrLoss() {
    if (!this.#bridge2.haveXvalue()) this.setState(Constant.GAME_RESULT.WIN);
  }
}

module.exports = BridgeGame2;
