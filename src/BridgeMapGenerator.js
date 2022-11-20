const { WAY, BRIDGE } = require("./constants/index");

const BridgeMapGenerator = {
  generateUpMap(isSafe, bridge, location) {
    const up = bridge
      .slice(0, location)
      .map((way) => (way === WAY.UP ? BRIDGE.SAFE : " "));
    const last = isSafe ? BRIDGE.SAFE : BRIDGE.UNSAFE;
    up.push(bridge[location] === WAY.UP ? last : " ");

    return BRIDGE.START + up.join(BRIDGE.DIVIDE) + BRIDGE.END;
  },

  generateDownMap(isSafe, bridge, location) {
    const down = bridge
      .slice(0, location)
      .map((way) => (way === WAY.DOWN ? BRIDGE.SAFE : " "));
    const last = isSafe ? BRIDGE.SAFE : BRIDGE.UNSAFE;
    down.push(bridge[location] === WAY.DOWN ? last : " ");

    return BRIDGE.START + down.join(BRIDGE.DIVIDE) + BRIDGE.END;
  },
};

module.exports = BridgeMapGenerator;
