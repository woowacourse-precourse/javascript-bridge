const BridgeConverter = {
  /**
   * @param {number} length : 생성하려는 다리의 길이
   * @returns {array}
   */
  makeEmptyBridge(length) {
    return Array.from({ length: 2 }, (_) => Array.from({ length }, (_) => " "));
  },
  /**
   *
   * @param {string} answer : command 값과의 비교되는 정답
   * @param {number} idx : 현재 다리의 몇 번째에 있는지 가리키는 색인값
   * @param {array} bridge : [[],[]]로 구성된 배열값
   * @returns
   */
  writeBridgeU(answer, idx, bridge) {
    if ("U" === answer) {
      bridge[0][idx] = "O";
      return;
    }
    bridge[1][idx] = "X";
    return;
  },
  /**
   *
   * @param {string} answer : command 값과의 비교되는 정답
   * @param {number} idx : 현재 다리의 몇 번째에 있는지 가리키는 색인값
   * @param {array} bridge : [[],[]]로 구성된 배열값
   * @returns
   */
  writeBridgeD(answer, idx, bridge) {
    if ("D" === answer) {
      bridge[0][idx] = "O";
      return;
    }
    bridge[1][idx] = "X";
    return;
  },
  /**
   * 1. 사용자가 입력한 값이 "U"이다.
   *  1.1 사용자가 입력한 값과 정답이 일치한다.
   *  1.2 사용자가 입력한 값과 정답이 일치하지 않는다.
   * 2. 사용자가 입력한 값이 "D"이다.
   *  2.1 사용자가 입력한 값과 정답이 일치한다.
   *  2.2 사용자가 입력한 값과 정답이 일치하지 않는다.
   *
   * @param {string[]} answer : "U"와 "D"로 이루어진 실제 정답
   * @param {string[]} inputs : "U"와 "D"로 이루어진 사용자의 입력값
   * @returns {string[][]}
   */
  convertToBridge(answer, inputs) {
    const bridge = this.makeEmptyBridge(inputs.length);

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === "U") {
        this.writeBridgeU(answer[i], i, bridge);
        break;
      }
      this.writeBridgeD(answer[i], i, bridge);
    }
    return bridge;
  },
};
module.exports = BridgeConverter;
