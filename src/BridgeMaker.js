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
    const [bridgeTop, bridgeBottom] = [[], []];
    for (let i = 0; i < size; i++) {
      const number = generateRandomNumber();
      if (number) {
        bridgeTop.push("U");
        bridgeBottom.push("X");
      }
      if (!number) {
        bridgeTop.push("X");
        bridgeBottom.push("D");
      }
    }
    console.log(bridgeTop);
    console.log(bridgeBottom);
    return [bridgeTop, bridgeBottom];
  },

  makeUserBridge(moveInput, userBridge, mainBridge) {
    const [userBridgeTop, userBridgeBottom] = userBridge;
    const [bridgeTop, bridgeBottom] = mainBridge;
    if (moveInput === bridgeTop[userBridge[0].length]) {
      userBridgeTop.push("O");
      userBridgeBottom.push(" ");
      console.log(userBridgeTop);
      console.log(userBridgeBottom);
      return [userBridgeTop, userBridgeBottom]
    }
    if (moveInput === bridgeBottom[userBridge[0].length]) {
      userBridgeTop.push(" ");
      userBridgeBottom.push("O");
      console.log(userBridgeTop);
      console.log(userBridgeBottom);
      return [userBridgeTop, userBridgeBottom]
    }
    if (moveInput === "U") {
      userBridgeTop.push("X");
      userBridgeBottom.push(" ");
    }
    if (moveInput === "D") {
      userBridgeTop.push(" ");
      userBridgeBottom.push("X");
    }
    console.log(userBridgeTop);
    console.log(userBridgeBottom);
    return [userBridgeTop, userBridgeBottom]
  },
};

module.exports = BridgeMaker;
