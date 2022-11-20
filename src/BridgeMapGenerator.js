const { WAY, BRIDGE } = require("./constants/index");

const BridgeMapGenerator = {
  generateUpMap(isSafe, bridge, location) {
    const up = bridge
      .slice(0, location)
      .map((way) => (way === WAY.UP ? BRIDGE.SAFE : " "));
    const safe = isSafe && bridge[location] === WAY.UP;
    const unsafe = !isSafe && bridge[location] === WAY.DOWN;

    up.push(safe ? BRIDGE.SAFE : unsafe ? BRIDGE.UNSAFE : " ");

    return BRIDGE.START + up.join(BRIDGE.DIVIDE) + BRIDGE.END;
  },

  generateDownMap(isSafe, bridge, location) {
    const down = bridge
      .slice(0, location)
      .map((way) => (way === WAY.DOWN ? BRIDGE.SAFE : " "));
    const safe = isSafe && bridge[location] === WAY.DOWN;
    const unsafe = !isSafe && bridge[location] === WAY.UP;

    down.push(safe ? BRIDGE.SAFE : unsafe ? BRIDGE.UNSAFE : " ");

    return BRIDGE.START + down.join(BRIDGE.DIVIDE) + BRIDGE.END;
  },
};

module.exports = BridgeMapGenerator;
