const { printMap } = require("./OutputView.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #count = 0;
  #gameCount = 0;
  #moveBridge = new Map([
    ["U", ""],
    ["D", ""],
  ]);

  init(bridge){
    this.#bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(str) {
    const state = this.#moveBridge.get("U").length;
    this.checkMove(str, state);
    printMap(this.#moveBridge);
  }

  checkMove(str, state){
    const check = this.#bridge[state] === str ? "O" : "X";
    this.#moveBridge.set(str,this.#moveBridge.get(str) + check);
    const miss = str === "U" ? "D" : "U";
    this.#moveBridge.set(str,this.#moveBridge.get(miss) + " ");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(str) {
    if(str == "R"){
      this.#gameCount += 1;
      return true;
    }
    if(str == "Q") return false;
  }
}

module.exports = BridgeGame;
