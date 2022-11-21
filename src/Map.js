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
    let map = '[';
    bridgeInfo.userMove.forEach((direction, index) => {
      if (direction === BRIDGE_RULE.MOVE_UP) {
        map += this.isSameDirection(direction, bridgeInfo.bridge[index]);
      } else map += '   ';
      map += '|';
    });
    map = map.replace(REGEX_LAST_VERTICAL_LINE, ']');
    return map;
  },

  isSameDirection(users, bridge) {
    if (users === bridge) return ' O ';
    return ' X ';
  },

  downSide(bridgeInfo) {
    let map = '[';
    bridgeInfo.userMove.forEach((direction, index) => {
      if (direction === BRIDGE_RULE.MOVE_DOWN) {
        map += this.isSameDirection(direction, bridgeInfo.bridge[index]);
      } else map += '   ';
      map += '|';
    });
    map = map.replace(REGEX_LAST_VERTICAL_LINE, ']');
    return map;
  },
};

module.exports = Map;
