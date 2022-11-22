const {UP_MOVING, DOWN_MOVING} = require("./GameCommands");

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(bridgeSize, generateRandomNumber) {
    const bridgeStyle = [];

    for (let step = 0; step < bridgeSize; step++) {
      const randomNumber = Number(generateRandomNumber());
      randomNumber === 0
        ? bridgeStyle.push(DOWN_MOVING)
        : bridgeStyle.push(UP_MOVING);
    }

    return bridgeStyle;
  }
};

module.exports = BridgeMaker;
