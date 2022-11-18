const GameCtrl = require('../GameCtrl');

const BridgeCtrl = class extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  gameProcess() {}

  end() {}
};

module.exports = BridgeCtrl;
