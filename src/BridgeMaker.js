const { DIRECTION } = require("./util/Constant.js");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 1; i <= size; i++) {
      const number = generateRandomNumber();
      number === 0 ? bridge.push(DIRECTION.DOWN) : bridge.push(DIRECTION.UP);
    }

    return [...bridge];
  },
};


module.exports = BridgeMaker;
