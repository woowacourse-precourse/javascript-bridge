const BridgeMaker = require("../BridgeMaker");
const { SPACE, PASS } = require("../utils/constants");

class ProductionModel {
  makeBridge(size) {
    return BridgeMaker.getBridge(size);
  }

  makeMap(nowMap, movingProcess) {
    const direction = Object.keys(SPACE);
    movingProcess.forEach((moving) => {
      const trapZone = direction.filter((space) => space !== moving)[0];
      nowMap[SPACE[moving]].push(PASS.TRUE);
      nowMap[SPACE[trapZone]].push(PASS.FALSE);
    });
    console.log(nowMap);
    return nowMap;
  }
}

module.exports = ProductionModel;
