const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const generateRandomNumber = () => {
  return BridgeRandomNumberGenerator.generate();
};

const numberConverter = (number) => {
  return number === 1 ? 0 : 1;
};

const convertNumberToUpDown = (number) => {
  return number === 1 ? 'U' : 'D';
};

module.exports = { generateRandomNumber, numberConverter };
