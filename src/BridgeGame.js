/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
   #bridge;
   #bridgePosition;
   #upperMap;
   #lowerMap;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#bridgePosition = 0;
    this.#upperMap = "[";
    this.#lowerMap = "[";
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */ // moving 활용해서 이동을 하고, 잘 갔으면 True/False + upperMap + lowerMap 
   // moving "U", "D"
   // 경우의 수
   // 1. 맞췄을 때
   // 2. 틀렸을 때
  move(moving) {
    let correctMove = this.#bridge[this.#bridgePosition];
    if (moving === correctMove) {  // U == U, D == D
      if (moving == "U") {
        this.#upperMap += " O ";
        this.#lowerMap += "   ";
      } else if (moving == "D") {
        this.#upperMap += "   ";
        this.#lowerMap += " O ";
      }
    } else if (moving != correctMove) {
      if (moving == "U") {
        this.#upperMap += " X ";
        this.#lowerMap += "   ";
      } else if (moving == "D") {
        this.#upperMap += "   ";
        this.#lowerMap += " X ";
      }
    }
    // this.#bridgePosition += 1;
    console.log('통계');
    console.log(this.#bridgePosition);
    console.log(this.#bridge.length - 1);
    if (this.#bridgePosition == this.#bridge.length - 1) {
      this.#upperMap += "]";
      this.#lowerMap += "]";
    } else if (this.#bridgePosition != this.#bridge.length - 1) {
      this.#upperMap += "|";
      this.#lowerMap += "|";
    }
    this.#bridgePosition += 1;
    return [moving === correctMove, this.#upperMap, this.#lowerMap];
  }

  checkTargetReached() {
    return this.#bridgePosition == this.#bridge.length;
  }

  getMaps() {
    return [this.#upperMap, this.#lowerMap];
  }
  // checkTargetReached()
  // bridge.length()랑 bridgePosition + 1이 같으면 목표 도달했기 때문에 True, 아닐 경우 False 리턴 - 인자 필요없음

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */ // BridgeGame을 다시 원상태로 초기화 - bridgePosition 0, upperMap, lowerMap은 "["
  retry() {
    this.#bridgePosition = 0;
    this.#upperMap = "[";
    this.#lowerMap = "[";
  }
}

module.exports = BridgeGame;