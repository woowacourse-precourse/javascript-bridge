const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const generateRandomNumber = () => {
  return BridgeRandomNumberGenerator.generate();
};

module.exports = { generateRandomNumber };
