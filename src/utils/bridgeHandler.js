const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { OPTION, RANDOM_NUMBER, BRIDGE_VALUE } = require('./constants');

const generateRandomNumber = () => {
  return BridgeRandomNumberGenerator.generate();
};

const convertNumberToUpDown = (number) => {
  return number === RANDOM_NUMBER.ONE ? OPTION.UP : OPTION.DOWN;
};

const convertBlueprintToBridge = (array) => {
  const bridge = array.map(convertNumberToUpDown);
  return bridge;
};

const createBlueprint = (size) => {
  return new Array(size).fill(BRIDGE_VALUE.BLUEPRINT_DEFAULT);
};

module.exports = {
  generateRandomNumber,
  convertBlueprintToBridge,
  createBlueprint,
};
