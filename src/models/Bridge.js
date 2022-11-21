class Bridge {
  #compartments;

  /**
   * 브릿지를 생성한다.
   * @param {string[]} compartments 지나갈 수 있는 칸이 위 칸이면 U, 아래칸이면 D로 표현된 다리 모양
   */
  constructor(compartments) {
    this.#compartments = compartments;
  }

  /**
   * 입력받은 칸이 이동할 수 있는 칸인지 비교하는 함수
   * @param {string} direction
   * @param {number} index
   */
  isMovableCompartment(direction, index) {}
}

module.exports = Bridge;
