const Utils = {
  getBridgeString(bridge) {
    return `[ ${bridge.join(' | ')} ]`;
  },
};

module.exports = Utils;
