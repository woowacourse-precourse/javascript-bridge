const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

const { SPACE, PASS } = require("../utils/constants");

class ProductionModel {
  static makeBridge(size) {
    return BridgeMaker.makeBridge(+size, BridgeRandomNumberGenerator.generate);
  }

  static makeMap(nowMap, movingProcess) {
    const direction = Object.keys(SPACE);
    movingProcess.forEach((moving) => {
      const trapZone = direction.filter((space) => space !== moving)[0];
      nowMap[SPACE[moving]].push(PASS.TRUE);
      nowMap[SPACE[trapZone]].push(PASS.FALSE);
    });

    return nowMap;
  }
}

module.exports = ProductionModel;
