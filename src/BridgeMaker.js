const { COMMAND } = require("./Constants/Constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridgeShape = [];
    for (let count = 0; count < size; count++) {
      const number = generateRandomNumber();
      if (Number(number) === 1) bridgeShape.push(COMMAND.UP);
      if (Number(number) === 0) bridgeShape.push(COMMAND.DOWN); 
    }
    return bridgeShape;
  },
};

module.exports = BridgeMaker;