const BridgeConverter = {
  /**
   * @param {number} length : 생성하려는 다리의 길이
   * @returns {array}
   */
  makeEmptyBridge(length) {
    return Array.from({ length: 2 }, () => Array.from({ length }, () => " "));
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
    bridge[0][idx] = "X";
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
      bridge[1][idx] = "O";
      return;
    }
    bridge[1][idx] = "X";
    return;
  },
  /**
   * @param {string[]} answer : "U"와 "D"로 이루어진 실제 정답
   * @param {string[]} inputs : "U"와 "D"로 이루어진 사용자의 입력값
   * @returns {string[][]}
   */
  convertToBridge(answer, inputs) {
    const bridge = this.makeEmptyBridge(inputs.length);
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === "U") {
        this.writeBridgeU(answer[i], i, bridge);
      } else this.writeBridgeD(answer[i], i, bridge);
    }
    return bridge;
  },
  /**
   * @param {string[]} answer : "U"와 "D"로 이루어진 실제 정답
   * @param {string[]} inputs : "U"와 "D"로 이루어진 사용자의 입력값
   * @returns {string[][]}
   */
  stringifyBridge(answer, inputs) {
    const bridge = this.convertToBridge(answer, inputs);
    const bridgeUpper = `[ ${bridge[0].join(" | ")} ]`;
    const bridgeLower = `[ ${bridge[1].join(" | ")} ]`;
    return bridgeUpper + "\n" + bridgeLower;
  },
};
module.exports = BridgeConverter;
