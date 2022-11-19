const BridgeMaker = require("../BridgeMaker");
const { SPACE } = require("../utils/constants");

class ProductionModel {
  makeBridge(size) {
    return BridgeMaker.getSize(size);
  }

  makeMap(nowMap, movingProcess) {
    const direction = Object.keys(SPACE);
    movingProcess.forEach((moving) => {
      const trapZone = direction.filter((space) => space !== moving)[0];
      nowMap[SPACE[moving]].push("O");
      nowMap[SPACE[trapZone]].push(" ");
    });
    return nowMap;
  }
}

module.exports = ProductionModel;
