const { SIDE } = require('./Message');

function bridgeBuilder(size, generateRandomNumber) {
  const bridge = [];
  while (bridge.length < Number(size)) {
    switch (generateRandomNumber()) {
      case SIDE.DOWN_NUM:
        bridge.push('D');
      case SIDE.UP_NUM:
        bridge.push('U');
    }
  }
  return bridge;
}

module.exports = bridgeBuilder;
