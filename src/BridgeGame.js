/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(){
    this.bridge = null;
    this.gameCount = 1;
    this.moveBridge = new Map([
      ["U", ""],
      ["D", ""],
    ]);
  }

  init(bridge){
    this.bridge = bridge;
  }

  getMoveBridge(){
    return this.moveBridge;
  }
  getGameCount(){
    return this.gameCount;
  }
  addGameCount(){
    this.gameCount++;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(str) {
    const state = this.moveBridge.get("U").length;
    this.checkMove(str, state);
    if(this.moveBridge.get("U")[state] === "X" || this.moveBridge.get("D")[state] === "X") return "GameOver";
    else if(this.bridge.length === state + 1) return "GameClear";
    else return "nextMove";
  }

  checkMove(str, state){
    const check = this.bridge[state] === str ? "O" : "X";
    this.moveBridge.set(str,this.moveBridge.get(str) + check);
    const miss = str === "U" ? "D" : "U";
    this.moveBridge.set(miss, this.moveBridge.get(miss) + " ");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(str) {
    this.addGameCount();
    this.moveBridge = new Map([
      ["U", ""],
      ["D", ""],
    ]);
    return "retry";
  }
}

module.exports = BridgeGame;
