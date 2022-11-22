const MESSAGE = require("./message");
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
    let bridge=[];
    let successNumber = generateRandomNumber();
    for(let index=0; index < size; index++){
      if(successNumber == 0 ) {
        bridge.push("D");
      }
      if (successNumber == 1) {
        bridge.push("U");
      }
      if(bridge.length != size){
        successNumber = generateRandomNumber();
      }
    }
    return bridge;
  }
};

module.exports = BridgeMaker;
