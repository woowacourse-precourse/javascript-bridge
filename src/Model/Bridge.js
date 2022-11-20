const COMMAND = require('../../constants/command');
const NUMBER = require('../../constants/number');
const STRING = require('../../constants/string');

class Bridge {
  static init(size) {
    const bridges = {};

    COMMAND.DIRECTIONS.forEach((direction) => {
      bridges[direction] = Array.from({ length: size }).fill(STRING.SPACE);
    });
    return bridges;
  }

  static makeValidForm(bridge, countIndex) {
    return COMMAND.DIRECTIONS.map((direction) => {
      const validBridgeForm = bridge[direction]
        .slice(NUMBER.ZERO, countIndex)
        .join(STRING.VERTICAL_BAR);
      return `${STRING.LEFT_BAR} ${validBridgeForm} ${STRING.RIGHT_BAR}`;
    });
  }
}

module.exports = Bridge;
