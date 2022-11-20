const { USER_VALID_INPUT } = require('./common/messages');
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let brigeShape = [];
    for (let i = 0; i < size; i++) {
      let number = generateRandomNumber();
      if (number === 0) {
        brigeShape.push(USER_VALID_INPUT.D);
        continue;
      }
      brigeShape.push(USER_VALID_INPUT.U);
    }
    return brigeShape;
  },
};

module.exports = BridgeMaker;
