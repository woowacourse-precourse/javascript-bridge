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
    //수정 필요
    const BRIDGE_RANDOM_NUMBER_GENERATOR = require("../src/BridgeRandomNumberGenerator");
    //수정 필요
    var bridge = new Array();
    for (var i = 0; i <size; i++){
      //수정 필요
      var number = BRIDGE_RANDOM_NUMBER_GENERATOR.generate();
      //수정 필요
      
      if (number == 0){
        bridge[i] = "D";
      }
      else{
        bridge[i] = "U";
      }
    }
    
    return bridge;
  },
};

module.exports = BridgeMaker;
