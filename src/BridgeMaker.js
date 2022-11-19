const { BRIDGE_PATH } = require("./util/bridge");
const { PROCCESS_MESSAGE } = require("./util/messages");
const { closeWithError } = require("./util/validate");

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const bridgePath = [];

    for (let i = 0; i < size; i++) {
      bridgePath.push(this.getPathByNumber(generateRandomNumber()));
    }

    return bridgePath;
  },

  getPathByNumber(number) {
    if (number === 0 || number === "0") return BRIDGE_PATH.down;
    if (number === 1 || number === "1") return BRIDGE_PATH.up;

    return closeWithError(PROCCESS_MESSAGE.pathByNumber);
  },
};

module.exports = BridgeMaker;
