class Judgment {
  static checkCrossingNext({ bridge, position, direction }) {
    return bridge.stepOn(position, direction);
  }

  static checkCrossingAll({ crossingBridge, bridge }) {
    return crossingBridge.size() === bridge.size();
  }
}

module.exports = Judgment;
