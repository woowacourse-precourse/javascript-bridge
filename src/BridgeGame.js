const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #tempPosition;

  constructor(size){
    this.#bridge = makeBridge(size,generate)
    this.#tempPosition = 0;
  }

    /**
   * 만들어진 다리를 반환하는 getter
   * @return {string[]} 만들어진 다리를 반환한다.
   */
  get bridge (){
    return this.#bridge;
  }

    /**
     * 현재 서있는 다리의 위치(인덱스)를 나타내는 getter
     * @return {number} 현재 서 있는 다리의 위치(인덱스)를 반환한다.
     */
     get tempPosition(){
      return this.#tempPosition;
    }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {string} direction "U" 또는 "D"의 값만을 인자로 받는다.
   * @return {boolean} 이동이 가능하다면 true, 불가능하다면 false를 반환한다.
   */
  move(direction) {
    if (this.#bridge[this.#tempPosition] === direction) {
      this.#tempPosition += 1;
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} response "R" 또는 "Q"의 값만을 인자로 받는다.
   * @return {boolean} "R"이라면 true(재시작), "Q"라면 false(종료)를 반환한다.
   */
  retry(response) {
    if (response === "R") {
      return true;
    }
    if (response === "Q") {
      return false;
    }
  }

}


module.exports = BridgeGame;
