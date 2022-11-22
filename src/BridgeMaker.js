const { DIRECTION } = require("./libs/Const");

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill(null).map(() => {
      const number = generateRandomNumber();

      let direction = DIRECTION.down;
      if (Number(number) === 1) direction = DIRECTION.up;

      return direction;
    });
  },
};

module.exports = BridgeMaker;
