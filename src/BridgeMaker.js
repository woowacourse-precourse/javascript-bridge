const { HOTKEY } = require("./constants/constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let count = 0; count < size; count++){
      generateRandomNumber() ? bridge.push(HOTKEY.up) : bridge.push(HOTKEY.down);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
