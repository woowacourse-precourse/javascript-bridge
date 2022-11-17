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

const convertNumberArrayToUpDown = (array) => {
  array.map(convertNumberToUpDown);
};

module.exports = { generateRandomNumber, convertReverse, convertNumberArrayToUpDown };
