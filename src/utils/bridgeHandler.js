const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const generateRandomNumber = () => {
  return BridgeRandomNumberGenerator.generate();
};

const convertReverse = (number) => {
  return number === 1 ? 0 : 1;
};

const convertNumberToUpDown = (number) => {
  return number === 1 ? 'U' : 'D';
};

const convertBlueprintToBridge = (array) => {
  const bridge = array.map(convertNumberToUpDown);
  return bridge;
};

const createBlueprint = (size) => {
  return new Array(size).fill(false);
};

module.exports = {
  generateRandomNumber,
  convertReverse,
  convertBlueprintToBridge,
  createBlueprint,
};
