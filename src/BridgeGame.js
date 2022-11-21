const OutputView = require("./OutputView.js");
const InputView = require("./InputView.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #count = 0;
  #gameCount = 1;
  #moveBridge = new Map([
    ["U", ""],
    ["D", ""],
  ]);

  init(bridge){
    this.#bridge = bridge;
  }

  getMoveBridge(){
    return this.#moveBridge;
  }
  getGameCount(){
    this.#gameCount++;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(str) {
    const state = this.#moveBridge.get("U").length;
    this.checkMove(str, state);
    OutputView.printMap(this.#moveBridge);
    if(this.#moveBridge.get("U")[state] === "X" || this.#moveBridge.get("D")[state] === "X") InputView.readGameCommand(this);
    else if(this.#bridge.length === state + 1) OutputView.printResult(this, true);
    else InputView.readMoving(this);
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
    this.getGameCount();
    this.#moveBridge = new Map([
      ["U", ""],
      ["D", ""],
    ]);
    InputView.readMoving(this);
  }
}

module.exports = BridgeGame;
