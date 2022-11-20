// 얘도 모델? 컨트롤러랑 뷰 코드가 있으면 안됨
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator"); // 지우기
// ######################
const { GO } = require("./constant");
/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) { // 3 / [1, 0, 0]
    const bridge = [];
    for (let i = 0; i < size; i++) {
      generateRandomNumber = BridgeRandomNumberGenerator.generate() // 테스트 때 걸림 얘가 테스트 배열이 안들어가게 함
      generateRandomNumber === 1 ? bridge.push(GO.up) : bridge.push(GO.down);
    }
    return bridge;
  },
};

// MissionUtils.Console.print(BridgeMaker.makeBridge(4))
module.exports = BridgeMaker; // 배열이 나감
