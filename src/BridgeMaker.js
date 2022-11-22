const { POSITION } = require('./enums');

const UP_NUMBER = 1;
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  makeBridge: (size, generateRandomNumber) =>
    [...Array(Number(size))].map(() => {
      const randomNumber = generateRandomNumber();
      const isUpNumber = Number(randomNumber) === UP_NUMBER;
      return isUpNumber ? POSITION.UP : POSITION.DOWN;
    }),
};

module.exports = BridgeMaker;
