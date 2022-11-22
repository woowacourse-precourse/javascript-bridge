const BridgeMaker = require("./BridgeMaker");
const Bridge = requier("./Bridge");
const InputView = requier("./InputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = new Bridge();
  #attemp;
  #stage;

  constructor(){
    this.#attemp = 1;
    this.#stage = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move() {
    
    this.#bridge.move(InputView.readMoving(), this.#stage);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {

  }

  addAttemp(){
    this.#attemp++;
  }

  stageReset(){
    this.#stage = 0;
  }

}

module.exports = BridgeGame;
