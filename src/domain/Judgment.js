class Judgment {
  static checkCrossingNext({ bridge, position, direction }) {
    return bridge.stepOn(position, direction);
  }

  static checkCrossingAll() {

  }
}

module.exports = Judgment;
