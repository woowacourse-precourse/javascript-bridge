const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");

const bridgeSizeAndRandomNum = (size) => {
  makeBridge(size, generate);
}

module.exports = { bridgeSizeAndRandomNum };