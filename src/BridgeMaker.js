const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const UPSIDE_NUMBER = 1;
const DOWNSIDE_NUMBER = 0;
const UPSIDE_STRING = "U";
const DOWNSIDE_STRING = "D";

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
    for(let index = 0; index < size; index++) {
      generateRandomNumber = BridgeRandomNumberGenerator.generate();
      bridgeNumbers.push(generateRandomNumber);
    }
    return bridgeNumbers.map((value) => {
      if(value === UPSIDE_NUMBER) return value = UPSIDE_STRING;
      if(value === DOWNSIDE_NUMBER) return value = DOWNSIDE_STRING;
    })
  },
};
module.exports = BridgeMaker;
