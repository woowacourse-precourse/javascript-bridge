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
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const number = +generateRandomNumber();
      number === 1 ? bridge.push("U") : null;
      number === 0 ? bridge.push("D") : null
      }
    return bridge;
  },

  makeUserBridge(moveInput, userBridge, mainBridge) {
    const [userBridgeTop, userBridgeBottom] = userBridge;
    moveInput === mainBridge[userBridge[0].length]
      ? BridgeMaker.isAnswer(moveInput, userBridge, mainBridge)
      : BridgeMaker.isWorng(moveInput, userBridge, mainBridge);
    return [userBridgeTop, userBridgeBottom];
  },

  isAnswer(moveInput, userBridge, mainBridge) {
    const [userBridgeTop, userBridgeBottom] = userBridge;
    if (moveInput === "U" && mainBridge[userBridge[0].length] === "U") {
      userBridgeTop.push("O");
      userBridgeBottom.push(" ");
    }
    if (moveInput === "D" && mainBridge[userBridge[0].length] === "D") {
      userBridgeTop.push(" ");
      userBridgeBottom.push("O");
    }
    return [userBridgeTop, userBridgeBottom];
  },

  isWorng(moveInput, userBridge, mainBridge) {
    const [userBridgeTop, userBridgeBottom] = userBridge;
    if (moveInput === "U" && mainBridge[userBridge[0].length] === "D") {
      userBridgeTop.push("X");
      userBridgeBottom.push(" ");
    }
    if (moveInput === "D" && mainBridge[userBridge[0].length] === "U") {
      userBridgeTop.push(" ");
      userBridgeBottom.push("X");
    }
    return [userBridgeTop, userBridgeBottom];
  },
};

module.exports = BridgeMaker;
