const { BRIDGE_RULE } = require('./utils/constants');

const REGEX_LAST_VERTICAL_LINE = Object.freeze(/\|$/);
const FORMAT = Object.freeze({
  FIRST: '[',
  VERTICAL_LINE: '|',
  SAME: ' O ',
  DIFFERENT: ' X ',
  NOTHING: '   ',
  LAST: ']',
});

const Map = {
  makeMap(bridgeInfo) {
    this.init(bridgeInfo);
    const bridgeMap = [];
    bridgeMap.push(this.makeUpSideMap(bridgeInfo));
    bridgeMap.push(this.makeDownSideMap(bridgeInfo));
    return bridgeMap;
  },

  init(bridgeInfo) {
    this.upSideMap = '';
    this.downSideMap = '';
    this.bridge = bridgeInfo.bridge;
  },

  makeUpSideMap(bridgeInfo) {
    this.upSideMap += FORMAT.FIRST;
    bridgeInfo.userMove.forEach(this.addUpSideMap.bind(this));
    this.upSideMap = this.upSideMap.replace(
      REGEX_LAST_VERTICAL_LINE,
      FORMAT.LAST
    );
    return this.upSideMap;
  },

  addUpSideMap(direction, index) {
    if (direction === BRIDGE_RULE.MOVE_UP) {
      this.upSideMap += this.isSameDirection(direction, this.bridge[index]);
    } else this.upSideMap += FORMAT.NOTHING;
    this.upSideMap += FORMAT.VERTICAL_LINE;
  },

  isSameDirection(users, bridge) {
    if (users === bridge) return FORMAT.SAME;
    return FORMAT.DIFFERENT;
  },

  makeDownSideMap(bridgeInfo) {
    this.downSideMap = FORMAT.FIRST;
    bridgeInfo.userMove.forEach(this.addDownSideMap.bind(this));
    this.downSideMap = this.downSideMap.replace(
      REGEX_LAST_VERTICAL_LINE,
      FORMAT.LAST
    );
    return this.downSideMap;
  },

  addDownSideMap(direction, index) {
    if (direction === BRIDGE_RULE.MOVE_DOWN) {
      this.downSideMap += this.isSameDirection(direction, this.bridge[index]);
    } else this.downSideMap += FORMAT.NOTHING;
    this.downSideMap += FORMAT.VERTICAL_LINE;
  },
};

module.exports = Map;
