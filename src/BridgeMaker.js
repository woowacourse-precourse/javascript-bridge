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
    let bridge = [];
    for (let i = 0; i < 2; i++) {
      let temp = "";
      for (let j = 0; j < size; j++) {
        temp += generateRandomNumber().toString();
      }
      bridge.push(temp);
    }
    return this.replaceBridgeValue(bridge);
  },

  replaceBridgeValue(bridge) {
    let finalBridge = [];
    let temp = "";
    for (let i = 0; i < 2; i++) {
      console.log(bridge[i])
      temp = bridge[i].replace(/0/g, "X");
      temp = temp.replace(/1/g, "O");
      finalBridge.push(temp);
    }
    return finalBridge
  },
};

module.exports = BridgeMaker;
