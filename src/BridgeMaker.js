const { CONFIG, KEY } = require("./Constants/Token");

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  makeBridge(size, generateRandomNumber) {
    const resolved = Number(size);

    if (resolved < CONFIG.BRIDGE_START || resolved > CONFIG.BRIDGE_END) {
      return false;
    }

    return Array.from({ length: resolved }, () => generateRandomNumber()).map(
      (value) => (value === CONFIG.SET_UP ? KEY.BRIDGE_UP : KEY.BRIDGE_DOWN)
    );
  },
};

module.exports = BridgeMaker;
