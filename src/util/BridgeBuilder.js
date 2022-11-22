const { SIDE } = require('./Message');

function bridgeBuilder(size, generateRandomNumber) {
  const bridge = [];
  while (bridge.length < size) {
    switch (generateRandomNumber.generate()) {
      case SIDE.DOWN_NUM:
        bridge.push('D');
      case SIDE.UP_NUM:
        bridge.push('U');
    }
  }
  return bridge;
}

module.exports = { bridgeBuilder };
