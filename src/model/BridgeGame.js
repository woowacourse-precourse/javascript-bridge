const OutputView = require("../console/OutputView");
const InputView = require("../console/InputView");
const Constant = require("../lib/Constant");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #woowaBridge;
  #state = {
    tried: Constant.GAME_RESULT.DEFAULT,
    isWin: Constant.GAME_RESULT.LOSS,
  };

  constructor(bridge, woowaBridge) {
    this.#bridge = bridge;
    this.#woowaBridge = woowaBridge;
  }
  setState(word) {
    this.#state.isWin = word;
  }

  getState() {
    return this.#state;
  }

  getBridge() {
    return this.#bridge.getUpsideBridge();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const index = this.getBridge().length;
    this.#bridge.setResult(direction, index);
  }

  setTried() {
    this.#state.tried += 1;
  }
  
  retry() {
    const reset = () => this.#bridge.setInitialValue(this.setTried.bind(this));
    const errorCallBakc = this.retry.bind(this);
    const printResult = this.#woowaBridge.finalResult.bind(this.#woowaBridge);
    InputView.readGameCommand(reset, printResult, errorCallBakc);
  }
}

module.exports = BridgeGame;
