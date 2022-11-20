const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator')

const randomNumber = () => {
  const number = BridgeRandomNumberGenerator.generate()
  return number
}

module.exports = randomNumber;
