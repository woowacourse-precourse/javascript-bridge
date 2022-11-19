const STRING = require('../../constants/string');

class Bridge {
  static initBridge(size) {
    const bridges = {};

    STRING.DIRECTIONS.forEach((direction) => {
      bridges[direction] = Array.from({ length: size }).fill(STRING.SPACE);
    });
    return bridges;
  }
}

module.exports = Bridge;
