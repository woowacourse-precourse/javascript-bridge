const { BRIDGE_RULE } = require('./utils/constants');
const REGEX_LAST_VERTICAL_LINE = /\|$/;

const Map = {
  makeMap(bridgeInfo) {
    bridgeMap = [];
    bridgeMap.push(this.upSide(bridgeInfo));
    bridgeMap.push(this.downSide(bridgeInfo));
    return bridgeMap;
  },

  upSide(bridgeInfo) {
    let upsideMap = '[';
    bridgeInfo.userMove.forEach((direction, index) => {
      if (direction === BRIDGE_RULE.MOVE_UP) {
        upsideMap += this.isSameDirection(direction, bridgeInfo.bridge[index]);
      } else upsideMap += '   ';
      upsideMap += '|';
    });
    upsideMap = upsideMap.replace(REGEX_LAST_VERTICAL_LINE, ']');
    return upsideMap;
  },

  isSameDirection(users, bridge) {
    if (users === bridge) return ' O ';
    return ' X ';
  },

  downSide(bridgeInfo) {
    let downMap = '[';
    bridgeInfo.userMove.forEach((direction, index) => {
      if (direction === BRIDGE_RULE.MOVE_DOWN) {
        downMap += this.isSameDirection(direction, bridgeInfo.bridge[index]);
      } else downMap += '   ';
      downMap += '|';
    });
    downMap = downMap.replace(REGEX_LAST_VERTICAL_LINE, ']');
    return downMap;
  },
};

module.exports = Map;
