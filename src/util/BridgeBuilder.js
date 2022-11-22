const { SIDE } = require('./Message');

function bridgeBuilder(size, generateRandomNumber) {
  const bridge = [];
  while (bridge.length < size) {
    switch (generateRandomNumber.generate()) {
      case SIDE.DOWN:
        bridge.push('D');
      case SIDE.UP:
        bridge.push('U');
    }
  }
  return bridge;
}

module.exports = { bridgeBuilder };
