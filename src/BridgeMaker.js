const { MOVING } = require("./constants/Values");

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
    const bridgeNumbers = [];
    const bridgeStrings =[];
    for(let index = 0; index < size; index++) {
      const number = generateRandomNumber();
      bridgeNumbers.push(number);
      if(bridgeNumbers[index] === MOVING.UPSIDE_NUMBER) bridgeStrings.push(MOVING.UPSIDE_STRING);
      if(bridgeNumbers[index] === MOVING.DOWNSIDE_NUMBER) bridgeStrings.push(MOVING.DOWNSIDE_STRING);
    }
    return bridgeStrings;
  }
};
module.exports = BridgeMaker;
