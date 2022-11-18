const BridgePanel = require('./BridgePanel');
const BridgeSize = require('./BridgeSize');

class Bridge {
  #panels;

  constructor(panels) {
    BridgeSize.validate(panels.length);
    this.#panels = panels.map((panel) => new BridgePanel(panel));
  }

  stepOn(index, direction) {
    return this.#panels[index].checkTempered(direction);
  }

  size() {
    return this.#panels.length;
  }
}

module.exports = Bridge;
