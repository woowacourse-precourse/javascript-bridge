const { WORD, MESSAGE } = require("./Constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridges = [];
    for (let i = 0; i < size; i++) {
      let randomNumber = generateRandomNumber();
      if (randomNumber === WORD.DOWN_NUMBER) bridges.push(WORD.DOWN);
      else if (randomNumber === WORD.UP_NUMBER) bridges.push(WORD.UP);
      else throw MESSAGE.ERROR.RANDOM_NUMBER;
    }
    return bridges;
  },
};

module.exports = BridgeMaker;
