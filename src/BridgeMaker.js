const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  MOVE_UP: "U",
  MOVE_DOWN: "D",

  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; ++i) {
      const randomNumber = generateRandomNumber();
      if (randomNumber == 0) bridge.push(this.MOVE_DOWN);
      if (randomNumber == 1) bridge.push(this.MOVE_UP);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
