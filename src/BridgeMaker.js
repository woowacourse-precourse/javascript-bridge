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
    const BRIDGE_ARRAY = [];
    for (let number = 0; number < size; number += 1) {
      const ADD_RANDOM_NUMBER = generateRandomNumber.generate();
      BRIDGE_ARRAY.push(ADD_RANDOM_NUMBER);
    }
    return this.transForm(BRIDGE_ARRAY);
  },

  transForm(array) {
    const STRING_BRIDGE_ARRAY = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] === 1) STRING_BRIDGE_ARRAY.push('U');
      if (array[index] === 0) STRING_BRIDGE_ARRAY.push('D');
    }
    return STRING_BRIDGE_ARRAY;
  },
};

module.exports = BridgeMaker;
